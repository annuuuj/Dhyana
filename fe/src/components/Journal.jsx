// src/components/Journal.jsx

import { useState } from "react";
import axios from 'axios';
import { PlusCircle, Book, Save } from "lucide-react";
import "../styles/Journal.css";
import journal from '../assets/journal.png';
import del from '../assets/dlt.webp';


// Custom Components
const Button = ({ children, onClick, className = "", type = "button" }) => (
  <button onClick={onClick} type={type} className={`custom-button ${className}`}>
    {children}
  </button>
);

const Input = ({ value, onChange, placeholder, className = "" }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`custom-input ${className}`}
  />
);

const Textarea = ({ value, onChange, placeholder, className = "" }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`custom-textarea ${className}`}
  />
);

const Journal = () => {
  // Load notes from localStorage on first render
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("journalNotes");
    return stored ? JSON.parse(stored) : [];
  });

  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this journal entry?");
  if (!confirmDelete) return;

  const updatedNotes = notes.filter((note) => note.id !== id);
  setNotes(updatedNotes);
  localStorage.setItem("journalNotes", JSON.stringify(updatedNotes));
};


  const handleAddNote = async () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      const note = {
        id: Date.now(),
        title: newNote.title,
        content: newNote.content,
        date: new Date().toISOString().split("T")[0],
      };

         try {
      const res = await axios.post('http://localhost:5000/api/journal/add', note); // ✅ Match backend route
      const savedNote = res.data.entry;

      const updatedNotes = [savedNote, ...notes];
      setNotes(updatedNotes);

      setNewNote({ title: "", content: "" });
      setIsAddingNote(false);
    } catch (err) {
      console.error("Error saving journal entry:", err);
    }

      const updatedNotes = [note, ...notes];
      setNotes(updatedNotes);
      localStorage.setItem("journalNotes", JSON.stringify(updatedNotes));

      setNewNote({ title: "", content: "" });
      setIsAddingNote(false);
    }
  };

  return (
    <section className="journal-section">
      {/* Header */}
      <div className="journal-header">
        <div className="journal-info">
          <h2>Mental Wellness Journal</h2>
          <h1>Track Your Journey to Better Mental Health</h1>
          <p>
            Journaling is a powerful tool for mental wellness. Regular writing helps you process emotions,
            identify patterns, reduce stress, and gain clarity. Use this space to reflect and grow.
          </p>
          <div className="journal-tip">
            ✨ Journaling for 15 minutes daily can significantly improve mental health.
          </div>
        </div>
        <img src={journal} alt="Journal" className="journal-image" />
      </div>

      {/* Entries */}
      <div className="journal-entries">
        <div className="journal-title-bar">
          <div className="title-icon">
            <Book className="icon" />
            <h3>Your Journal Entries</h3>
          </div>
          <Button onClick={() => setIsAddingNote(true)} className="add-button">
            <PlusCircle className="icon-sm" /> New Entry
          </Button>
        </div>

        {/* New Entry Form */}
        {isAddingNote && (
          <div className="entry-form">
            <Input
              placeholder="Entry title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <Textarea
              placeholder="Write your thoughts here..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            />
            <div className="form-actions">
              <Button onClick={handleAddNote} className="save-button">
                <Save className="icon-sm" /> Save Entry
              </Button>
              <Button
                onClick={() => {
                  setIsAddingNote(false);
                  setNewNote({ title: "", content: "" });
                }}
                className="cancel-button"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Entries List */}
        <div className="entries-list">
          {notes.map((note) => (
            <div key={note.id} className="entry-card">
              <div className="entry-header">
                <h4>{note.title}</h4>
                <span className="entry-date">{note.date}
                  <button className="delete-button" onClick={() => handleDelete(note.id)}     style={{
    //   position: "absolute",
    // margin-top: "23px",
    // margin-left: -"59px",
    // border-radius: "16px",
    // background-color: "aliceblue"
    }}>
    delete
  </button>
                </span>
              
              </div>
              <p>{note.content}</p>
            </div>
          ))}

          {notes.length === 0 && !isAddingNote && (
            <div className="empty-state">
              <Book className="icon-lg" />
              <p>Start your mental wellness journey by writing your first journal entry.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journal;
