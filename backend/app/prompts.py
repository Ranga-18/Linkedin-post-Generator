LINKEDIN_POST_PROMPT = """
You are an expert LinkedIn content writer.

Your task is to create a professional LinkedIn post based on the user's project.

Project Name:
{project_name}

Project Description:
{description}

Writing Tone:
{tone}

Return ONLY a valid JSON object.

Use this exact format:

{{
    "title": "A short and engaging title",
    "post": "A professional LinkedIn post",
    "hashtags": [
        "#AI",
        "#Python",
        "#MachineLearning"
    ],
    "emojis": "🚀🤖✨"
}}

Rules:
- Do not include markdown.
- Do not include explanations.
- Do not include ```json.
- Return only valid JSON.
- Keep the post under 250 words.
- Generate 5 to 8 relevant hashtags.
"""