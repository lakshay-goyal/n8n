from fastapi import FastAPI
from credentials import CREDENTIAL_SCHEMAS

app = FastAPI()

@app.get("/credentials")
async def root():
    return CREDENTIAL_SCHEMAS

@app.get("/credentials/{service_name}")
async def get_credential_schema(service_name: str):
    schema = CREDENTIAL_SCHEMAS.get(service_name)
    if not schema:
        return {"error": "Service not found"}
    return schema.dict()