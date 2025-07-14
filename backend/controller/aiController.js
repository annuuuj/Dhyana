const axios = require('axios');

const askAI = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ message: 'Prompt is required' });

  try {
    const response = await axios.post(
      // CORRECTED: Changed 'gemini-1.0-pro' to 'gemini-2.0-flash' for broader availability
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            parts: [
              {
                text: `You're an expert in mental health. User prompt: "${prompt}". Respond with:
                - 2 book suggestions
                - 2 blog links
                - 2 YouTube video links
                - 2 mental health doctor types or specialist roles`
              }
            ]
          }
        ]
      }
    );

    const aiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    res.status(200).json({ response: aiText });
  } catch (err) {
    console.error('Gemini error:', err.response?.data || err.message);
    // You can log the full error response for more details during debugging
    // console.error('Gemini error response data:', err.response?.data);
    res.status(500).json({ message: 'Failed to get response from Gemini AI' });
  }
};

module.exports = { askAI };
