from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()

# Initialize the model
model = ChatGoogleGenerativeAI(
    model="gemini-3.6-flash",
    temperature=0.7,
)
