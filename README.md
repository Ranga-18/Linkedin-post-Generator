LinkedIn Post Generator

A full-stack AI web application that generates professional LinkedIn posts from a user's topic or idea using Google Gemini AI.

📁 Project Structure

linkedin-post-generator/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   ├── prompts.py
│   │   ├── config.py
│   │   └── services/
│   │       └── gemini.py
│   ├── .env.example
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md

⚙️ Local Setup
1. Clone the repository
git clone https://github.com/Ranga-18/Linkedin-post-Generator.git
cd Linkedin-post-Generator
2. Backend setup
cd backend
python -m venv venv

Activate the virtual environment:

Windows:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Create a .env file:

GEMINI_API_KEY=your_gemini_api_key

Start the backend:

python -m uvicorn app.main:app --reload

Backend will run at:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs
3. Frontend setup

Open another terminal:

cd frontend
npm install
npm run dev

The frontend will run at:

http://localhost:5173
🔐 Environment Variables

Never commit your actual API key to GitHub.

Use:

GEMINI_API_KEY=your_gemini_api_key_here

The actual API key should be stored in your local .env file or your deployment platform's environment variables.

🌐 Deployment

The application can be deployed as two services:

Frontend: Vercel
Backend: Render

The frontend communicates with the deployed FastAPI backend, which securely handles requests to the Gemini API.

🔄 How It Works
User enters topic
        ↓
React Frontend
        ↓
FastAPI Backend
        ↓
Google Gemini AI
        ↓
Generated LinkedIn Content
        ↓
Title + Post + Hashtags + Emojis

👨‍💻 Author

Ranganathan P

GitHub: Ranga-18

Built with React, FastAPI, and Gemini AI. 🚀
