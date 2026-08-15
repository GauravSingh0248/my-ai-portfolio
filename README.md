# 🚀 Gaurav Singh — AI-Powered Portfolio

> A modern, interactive developer portfolio built with React, FastAPI, LangChain, Gemini, and Retrieval-Augmented Generation (RAG).

<p align="center">
  <a href="https://my-ai-portfolio-lake.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit%20Now-00C853?style=for-the-badge&logo=vercel" />
  </a>
  <a href="https://github.com/GauravSingh0248">
    <img src="https://img.shields.io/badge/GitHub-GauravSingh0248-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://linkedin.com/in/gauravsingh0248">
    <img src="https://img.shields.io/badge/LinkedIn-Gaurav%20Singh-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
</p>

<p align="center">
  <a href="https://my-ai-portfolio-lake.vercel.app/"><strong>🌐 View Live Portfolio</strong></a>
</p>

---

## 🌐 About

This is my personal portfolio website, designed to showcase my:

- 💻 Technical skills
- 🚀 Projects
- 🎓 Education
- 🏆 Achievements
- 💼 Experience
- 📚 Current learning journey
- 🎮 Personal interests

The main goal was to build more than a traditional portfolio.

The website includes an **AI-powered portfolio assistant** that can answer questions about me using my own portfolio knowledge base.

### 🔴 Live Project

**Portfolio:** https://my-ai-portfolio-lake.vercel.app/

---

## 🤖 AI Portfolio Assistant

The chatbot is powered by **LangChain + Gemini + RAG**.

Instead of sending every question directly to an LLM, the system first retrieves relevant information from my portfolio knowledge base and then provides that context to Gemini.

### RAG Flow

```text
Visitor
   │
   ▼
React Chatbot
   │
   ▼
FastAPI Backend
   │
   ▼
Retriever
   │
   ▼
ChromaDB
   │
   ▼
Relevant Portfolio Chunks
   │
   ▼
LangChain + Gemini
   │
   ▼
Markdown Response
   │
   ▼
ReactMarkdown
   │
   ▼
Chat Interface
```

### Knowledge Base

The chatbot currently uses structured Markdown files:

```text
backend/
└── knowledge/
    ├── about.md
    ├── achievements.md
    ├── education.md
    ├── experience.md
    ├── learning.md
    ├── project.md
    ├── resume.md
    └── skills.md
```

These files are loaded, split into chunks, converted into embeddings, and stored in ChromaDB for semantic retrieval.

---

# ✨ Features

## 🎨 Portfolio

- Modern responsive interface
- Interactive navigation
- Dark/light theme support
- Home, About, Skills, Projects, and Contact sections
- Personal interests and additional portfolio pages
- Responsive design for different screen sizes

## 🤖 AI Assistant

- Portfolio-specific AI chatbot
- Gemini-powered responses
- LangChain integration
- Retrieval-Augmented Generation
- ChromaDB vector search
- Markdown-formatted responses
- Automatic chat scrolling
- Enter-to-send support
- Shift + Enter for multiline messages
- Production frontend-backend integration

## 📩 Contact System

Visitors can submit their contact information and message through the portfolio contact form.

The backend processes the submission and sends an automated confirmation email.

Contact data is stored using **MongoDB Atlas**.

## 🔐 Backend

- FastAPI API
- Environment-based configuration
- Rate limiting for contact requests
- RAG pipeline
- Gemini integration
- MongoDB Atlas integration
- Email service integration

---

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- React Icons
- React Markdown

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

### AI / Generative AI

- Google Gemini
- LangChain
- LangChain Google GenAI
- RAG
- ChromaDB
- Gemini Embeddings

### Database & Services

- MongoDB Atlas
- EmailJS

### Deployment

- Vercel — Frontend
- Render — Backend

### Tools

- Git
- GitHub
- VS Code
- Jupyter

---

# 📂 Project Structure

```text
my-ai-portfolio/
│
├── backend/
│   ├── app/
│   │   ├── database/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── knowledge/
│   │   ├── about.md
│   │   ├── achievements.md
│   │   ├── education.md
│   │   ├── experience.md
│   │   ├── learning.md
│   │   ├── project.md
│   │   ├── resume.md
│   │   └── skills.md
│   │
│   ├── testing/
│   ├── chroma_db/
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> `.env` and `chroma_db/` are excluded from Git and should never be committed.

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/GauravSingh0248/my-ai-portfolio.git
cd my-ai-portfolio
```

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## 3. Backend Setup

Open another terminal:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside `backend/` and add the required credentials.

Then start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The backend will normally run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 🔑 Environment Variables

Create:

```text
backend/.env
```

Example:

```env
GOOGLE_API_KEY=your_google_api_key

MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name

EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

Never commit real credentials to GitHub.

---

# 🧠 Current RAG Pipeline

The current implementation follows:

```text
Markdown Knowledge Files
        │
        ▼
Document Loader
        │
        ▼
Text Splitter
        │
        ▼
Gemini Embeddings
        │
        ▼
ChromaDB
        │
        ▼
Retriever
        │
        ▼
Relevant Context
        │
        ▼
Prompt + User Question
        │
        ▼
Gemini
        │
        ▼
Markdown Answer
```

The knowledge base is currently split into **8 Markdown files** and the vector store contains the generated document chunks used for retrieval.

---

# 🚀 Deployment

The project is deployed as two services:

```text
                    ┌──────────────────────┐
                    │   Vercel             │
                    │   React Frontend     │
                    └──────────┬───────────┘
                               │
                               │ API Requests
                               ▼
                    ┌──────────────────────┐
                    │   Render             │
                    │   FastAPI Backend    │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
            MongoDB Atlas   ChromaDB      Gemini
```

### Live Portfolio

🌐 https://my-ai-portfolio-lake.vercel.app/

The frontend is deployed on **Vercel**, while the FastAPI backend is deployed on **Render**.

---

# 🎯 Why I Built This

I wanted my portfolio to demonstrate the technologies I am learning rather than simply list them.

Instead of only saying:

> "I know React, FastAPI, LangChain, RAG, and Generative AI."

I wanted the portfolio itself to use those technologies.

This project therefore combines:

**Frontend Development + Backend Development + Generative AI + RAG**

into one practical application.

---

# 👨‍💻 About Me

I'm **Gaurav Singh**, a Computer Science & Engineering student interested in:

- Software Development
- Machine Learning
- Deep Learning
- Generative AI
- Retrieval-Augmented Generation
- AI Agents
- Problem Solving

I enjoy building projects that combine software engineering and AI to create practical applications.

---

# 📫 Connect With Me

- GitHub: https://github.com/GauravSingh0248
- LinkedIn: https://linkedin.com/in/gauravsingh0248
- Email: officialgaurav0408@gmail.com

---

# 🚧 Future Updates

This project is being developed iteratively. The current version focuses on a deployed portfolio and RAG-powered AI assistant.

Planned improvements include:

- [ ] Add conversational memory to the AI assistant
- [ ] Improve RAG retrieval and chunking
- [ ] Add source references to AI responses
- [ ] Improve prompt engineering and response consistency
- [ ] Add streaming AI responses
- [ ] Integrate GitHub API for live repository/project information
- [ ] Add tool calling
- [ ] Upgrade the chatbot into a LangChain-based AI agent
- [ ] Add portfolio-specific tools
- [ ] Add better analytics and monitoring
- [ ] Improve production security and abuse prevention
- [ ] Improve UI/UX based on real visitor feedback

---

<p align="center">

### ⭐ If you find this project interesting, consider giving it a star!

Built with ❤️, curiosity, and a lot of code.

**Gaurav Singh © 2026**

</p>
