import json
import re

from google import genai

from app.config import GEMINI_API_KEY
from app.prompts import LINKEDIN_POST_PROMPT

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_linkedin_post(project_name: str, description: str, tone: str, length:str="medium" ):
    """
    Generates a LinkedIn post using the Gemini API.
    """
    prompt = LINKEDIN_POST_PROMPT.format(
        project_name=project_name,
        description=description,
        tone=tone,
        length=length,
    )

    response = client.models.generate_content(
        model="gemini-3.5-flash",   # ✅ valid model
        contents=prompt,
    )

    raw = response.text.strip()

    # Strip ```json fences if Gemini adds them
    if raw.startswith("```"):
        raw = re.sub(r"^```(?:json)?", "", raw).strip()
        raw = re.sub(r"```$", "", raw).strip()

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        raise ValueError("Gemini returned an invalid JSON response.")