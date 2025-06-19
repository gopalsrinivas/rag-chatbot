import os
from dotenv import load_dotenv
import pinecone

load_dotenv()


def setup_pinecone():
    pinecone.init(
        api_key=os.getenv("PINECONE_API_KEY"),
        environment=os.getenv("PINECONE_ENVIRONMENT"),
    )

    # Create index if it doesn't exist
    if "altibbe-faq" not in pinecone.list_indexes():
        pinecone.create_index("altibbe-faq", dimension=1536, metric="cosine")
        print("Created new Pinecone index 'altibbe-faq'")
    else:
        print("Pinecone index 'altibbe-faq' already exists")


if __name__ == "__main__":
    setup_pinecone()
