from credentials.schemas.validation.schema import CredentialSchema, PropertySchema

class GmailCredentialSchema(CredentialSchema):
    name: str = "Gmail"
    displayName: str = "Gmail Credential"
    documentationUrl: str = "https://developers.google.com/gmail/api"
    properties: list[PropertySchema] = [
        PropertySchema(
            displayName="Client ID",
            name="clientId",
            type="string",
            description="The Client ID obtained from Google Cloud Console."
        ),
        PropertySchema(
            displayName="Client Secret",
            name="clientSecret",
            type="string",
            description="The Client Secret obtained from Google Cloud Console."
        ),
        PropertySchema(
            displayName="Refresh Token",
            name="refreshToken",
            type="string",
            description="The Refresh Token used to obtain new access tokens."
        )
    ]