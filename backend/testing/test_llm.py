from app.services.llm import model


response = model.invoke(
    "Explain what a software engineer does in one sentence."
)

print("\nAI Response:")
print(response.content[0]["text"])