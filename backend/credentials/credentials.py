from credentials.schemas.gmail import GmailCredentialSchema
from credentials.schemas.telegram import TelegramCredentialSchema

CREDENTIAL_SCHEMAS = {
    "gmail": GmailCredentialSchema(),
    "telegram": TelegramCredentialSchema(),
}
