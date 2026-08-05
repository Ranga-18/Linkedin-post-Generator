import json

from google import genai

from app.config import GEMINI_API_KEY
from app.prompts import LINKEDIN_POST_PROMPT

# Create the Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)


def generate_linkedin_post(project_name: str, description: str, tone: str):
    """
    Generates a LinkedIn post using the Gemini API.
    """

    prompt = LINKEDIN_POST_PROMPT.format(
        project_name=project_name,
        description=description,
        tone=tone,
    )

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt,
    )

    try:
        return json.loads(response.text)

    except json.JSONDecodeError:
        raise ValueError(
            "Gemini returned an invalid JSON response."
        )