from credentials.schemas.validation.schema import CredentialSchema, PropertySchema

class TelegramCredentialSchema(CredentialSchema):
    name: str = "Telegram Bot"
    displayName: str = "Telegram Bot Credential"
    documentationUrl: str = "https://core.telegram.org/bots/api"
    properties: list[PropertySchema] = [
        PropertySchema(
            displayName="Bot Token",
            name="botToken",
            type="string",
            description="The token provided by BotFather to access the Telegram Bot API."
        ),
        PropertySchema(
            displayName="Chat ID",
            name="chatId",
            type="string",
            description="The unique identifier for the target chat or username of the target channel."
        )
    ]
    