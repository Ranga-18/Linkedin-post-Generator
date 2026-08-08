from pydantic import BaseModel, Field
from typing import Optional

class GeneratePostRequest(BaseModel):
    project_name: str = Field(
        ...,
        min_length=3,
        max_length=100,
        description="Name of the project",
    )
    description: str = Field(
        ...,
        min_length=20,
        max_length=2000,
        description="Project description",
    )

    tone: str = Field(
        ...,
        description="Writing tone",
    )

    length: Optional[str] = Field(
        default="medium",
        description="Post length: short | medium | long",
    )