from pydantic import BaseModel, Field
from typing import Optional

class PropertySchema(BaseModel):    
    displayName: Optional[str] = Field(None, description="Display name of the property")
    name: str = Field(..., description="Name of the property")
    type: str = Field(..., description="Type of the property")
    typeOptions: Optional[dict] = Field(None, description="Type options for the property")
    description: Optional[str] = Field(None, description="Description of the property")

class CredentialSchema(BaseModel):
    name: str = Field(..., description="Name of the credential")
    displayName: Optional[str] = Field(None, description="Display name for the credential")
    documentationUrl: Optional[str] = Field(None, description="URL for the credential documentation")
    properties: list[PropertySchema] = Field(..., description="List of properties for the credential")