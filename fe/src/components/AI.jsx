import React, { useState } from 'react';
import { Send, Mic, Loader2 } from "lucide-react"; // Loader icon
import axios from 'axios';
import '../styles/AI.css';

const useToast = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const toast = ({ title, description }) => {
    setToastMessage({ title, description });
    setTimeout(() => setToastMessage(null), 3000);
  };
  return { toast, toastMessage };
};

const AI = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false); // NEW
  const { toast, toastMessage } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const token = localStorage.getItem('token');
    if (!token) {
      toast({ title: "Authentication Required", description: "Please log in to use this feature." });
      return;
    }

    try {
      setLoading(true); // Show loader
      setResponse('');
      toast({ title: "Message sent", description: "Your question has been submitted." });

      const res = await axios.post(
        'http://localhost:5000/api/ai/ask',
        { prompt: message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      setResponse(res.data.response);
      setMessage('');
    } catch (err) {
      console.error('Error calling AI:', err.response?.data || err.message);
      if (err.response?.status === 401) {
        toast({
          title: "Authentication Failed",
          description: err.response.data.message || "Session expired.",
        });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      <main className="main-content">
        <div className="content-area">
          <div className="text-section">
            <h1 className="main-heading">How Can I Help You Today</h1>
            <p className="sub-heading">Ask anything about mental health, stress, or emotional well-being</p>
          </div>

          <div className="input-container">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Type your question here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="input-field"
              />
              <button className="icon-button" aria-label="Microphone">
                <Mic className="icon-size" />
              </button>
              <button onClick={handleSendMessage} className="send-button">
                <Send className="icon-size icon-margin-right" />
                Search
              </button>
            </div>
          </div>

          {/* Loader */}
          {loading && (
            <div className="loader-container">
              <Loader2 className="spinner" />
              <p>Generating response...</p>
            </div>
          )}

          {/* AI Response */}
          {response && !loading && (
            <div className="ai-response formatted-response">
              <h2>AI Response:</h2>
              <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, "<br />") }} />
            </div>
          )}

          {/* Toast Notification */}
          {toastMessage && (
            <div className="toast-message">
              <strong>{toastMessage.title}</strong>
              <p>{toastMessage.description}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AI;
