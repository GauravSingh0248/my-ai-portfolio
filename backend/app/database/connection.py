import os

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
MONGODB_DB = os.getenv("MONGODB_DB", "portfolio")

if not MONGODB_URI:
    raise ValueError("MONGODB_URI is not set in the .env file")

client = MongoClient(MONGODB_URI)

database = client[MONGODB_DB]

contacts_collection = database["contacts"]


def test_connection():
    try:
        client.admin.command("ping")
        print("MongoDB connection successful!")
        return True
    except Exception as error:
        print(f"MongoDB connection failed: {error}")
        return False