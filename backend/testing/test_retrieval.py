from app.services.rag import get_retriever


retriever = get_retriever()

question = "What programming languages and technologies does Gaurav know?"

documents = retriever.invoke(question)

print("\nRetrieved documents:\n")

for i, document in enumerate(documents, start=1):
    print(f"--- Document {i} ---")
    print(f"Source: {document.metadata.get('source')}")
    print(document.page_content)
    print()