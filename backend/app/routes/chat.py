from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"],
)


class ChatRequest(BaseModel):
    message: str


@router.post("")
async def chat(request: ChatRequest):
    return {
        "response": f"You said: {request.message}"
    }