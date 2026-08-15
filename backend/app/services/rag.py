from pathlib import Path

from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

load_dotenv()


# PATHS

BASE_DIR = Path(__file__).resolve().parents[2]

KNOWLEDGE_DIR = BASE_DIR / "knowledge"
VECTOR_STORE_DIR = BASE_DIR / "chroma_db"


# LOAD MARKDOWN FILES

def load_knowledge_documents():
    documents = []

    for file_path in KNOWLEDGE_DIR.glob("*.md"):
        text = file_path.read_text(
            encoding="utf-8"
        )

        document = Document(
            page_content=text,
            metadata={
                "source": file_path.name
            }
        )

        documents.append(document)

    return documents

# SPLIT DOCUMENTS

def split_documents(documents):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=150,
        separators=[
            "\n## ",
            "\n### ",
            "\n\n",
            "\n",
            " ",
            "",
        ],
    )

    return text_splitter.split_documents(documents)


# EMBEDDINGS

embeddings = GoogleGenerativeAIEmbeddings(
    model="gemini-embedding-2-preview"
)


# VECTOR STORE

def create_vector_store():

    documents = load_knowledge_documents()

    print(f"Loaded {len(documents)} knowledge files.")

    chunks = split_documents(documents)

    print(f"Created {len(chunks)} chunks.")

    vector_store = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=str(VECTOR_STORE_DIR),
        collection_name="portfolio_knowledge",
    )

    print("Vector store created successfully.")

    return vector_store


# LOAD EXISTING VECTOR STORE

def get_vector_store():

    return Chroma(
        persist_directory=str(VECTOR_STORE_DIR),
        embedding_function=embeddings,
        collection_name="portfolio_knowledge",
    )

# RETRIEVER


def get_retriever():

    vector_store = get_vector_store()

    return vector_store.as_retriever(
        search_kwargs={
            "k": 4
        }
    )