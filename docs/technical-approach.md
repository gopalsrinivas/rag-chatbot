# Technical Approach

## RAG Implementation

1. **Document Processing**:

   - Documents are chunked into 500-1000 token segments
   - Each chunk is embedded using OpenAI's text-embedding-ada-002
   - Vectors stored in Pinecone for fast retrieval

2. **Retrieval**:

   - User query is embedded using same model
   - Top 5 most similar document chunks retrieved
   - Similarity scores logged for transparency

3. **Generation**:
   - Retrieved context combined with user query
   - Prompt engineered for clarity and accuracy
   - OpenAI GPT-4 used for final response generation

## n8n Workflow

- HTTP Webhook trigger for questions
- Custom JavaScript nodes for query processing
- Python script node for vector search
- OpenAI API node for generation
- Error handling at each step
