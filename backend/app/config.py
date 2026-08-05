from dotenv import load_dotenv
import os

# Load variables from the .env file
load_dotenv()

# Read the Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Validate that the key exists
if not GEMINI_API_KEY:
    raise ValueError(
        "GEMINI_API_KEY not found. Please add it to your .env file."
    )