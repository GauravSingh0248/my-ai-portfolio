from fastapi import APIRouter
from pydantic import BaseModel

from app.services.rag import get_retriever

from app.services.llm import model
router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"],
)


class ChatRequest(BaseModel):
    message: str

retriever = get_retriever()

@router.post("")
async def chat(request: ChatRequest):

    documents = retriever.invoke(request.message)

    context = "\n\n".join(
        document.page_content
        for document in documents
    )

    prompt = f"""
        You are Gaurav's AI Portfolio Assistant.

        Answer the user's question using only the portfolio context provided below.

        Formatting rules:
        - Use Markdown formatting.
        - Use ## for main sections.
        - Use ### for subsections.
        - Use **bold** for important labels.
        - Use bullet points when listing multiple items.
        - Keep paragraphs short.
        - Do not use raw HTML.
        - Do not put ### and ** around the same heading.
        - Do not mention that you are using a knowledge base.
        - If the answer is not available in the context, say that the information
        is not available in Gaurav's portfolio.

        Portfolio Context:
        {context}

        User Question:
        {request.message}
        """

    response = model.invoke(prompt)

    return {
        "response": response.content[0]["text"]
    }