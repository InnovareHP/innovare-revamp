import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

export const fixBlogStructure = async (title: string, content: string) => {
  const response = await client.responses.create({
    model: "gpt-4o",
    temperature: 0.7,
    input: `You are a professional blog editor and SEO expert. 
        Rewrite the following blog content with:
        - Proper Markdown structure (## Headings, ### Subheadings, etc.)
        - Exact content of the blog post
        - Keep the content relevant to the title
        - Keep the content concise and to the point
  
        Additionally, generate SEO metadata for the page:
        - metaTitle (max 60 characters, engaging)
        - metaDescription (max 160 characters, compelling)
        - metaKeywords (comma-separated keywords relevant to the content)
  
        Return ONLY valid JSON with this structure:
        {
          "structuredContent": "...",
          "metadata": {
            "metaTitle": "...",
            "metaDescription": "...",
            "metaKeywords": "..."
          }
          "excerpt": "..."
          "tags": ["..."]
          "category": "..."
        }
  
        Title: "${title}"
        Content:
        """${content}"""`,
  });

  let output = response.output_text.trim();

  // remove Markdown code fences like ```json ... ```
  output = output.replace(/```json|```/g, "");

  return JSON.parse(output);
};

export const openai = client;
