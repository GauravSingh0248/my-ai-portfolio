from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import test_connection

from app.routes.contact import router as contact_router

app = FastAPI(
    title="Gaurav Portfolio API",
    description="Backend API for Gaurav's portfolio",
    version="1.0.0",
)

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)

@app.on_event("startup")
def startup_event():
    test_connection()

@app.get("/")
def root():
    return {
        "message": "Gaurav Portfolio API is running 🚀"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy"
    }