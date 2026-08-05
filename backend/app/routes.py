from fastapi import APIRouter, HTTPException

from app.models import GeneratePostRequest
from app.services.gemini import generate_linkedin_post

router = APIRouter()


@router.post("/generate")
def generate_post(request: GeneratePostRequest):
    try:
        result = generate_linkedin_post(
            project_name=request.project_name,
            description=request.description,
            tone=request.tone,
        )

        return {
            "status": "success",
            "data": result,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )