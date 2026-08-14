from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, Request

from app.database.connection import contacts_collection
from app.database.models import ContactMessage, ContactResponse
from app.services.email_service import send_contact_confirmation
from app.utils.rate_limit import is_rate_limited


router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"],
)


@router.post("/", response_model=ContactResponse)
def create_contact(
    contact: ContactMessage,
    request: Request,
):
    client_ip = request.client.host

    # Rate limiting
    if is_rate_limited(client_ip):
        raise HTTPException(
            status_code=429,
            detail="Too many submissions. Please try again later.",
        )

    try:
        # Convert Pydantic model to dictionary
        contact_data = contact.model_dump()

        # Add extra information
        contact_data["created_at"] = datetime.now(timezone.utc)
        contact_data["ip_address"] = client_ip

        # Save contact to MongoDB
        result = contacts_collection.insert_one(contact_data)

        if not result.inserted_id:
            raise HTTPException(
                status_code=500,
                detail="Failed to save contact message.",
            )

        # Send confirmation email
        email_sent = send_contact_confirmation(
            recipient_email=contact.email,
            recipient_name=contact.name,
            subject=contact.subject,
            message=contact.message,
        )

        if not email_sent:
            print("Warning: Contact saved, but confirmation email failed.")

        return {
            "success": True,
            "message": "Your message has been sent successfully!",
        }

    except HTTPException:
        raise

    except Exception as error:
        print(f"Contact submission error: {error}")

        raise HTTPException(
            status_code=500,
            detail="Something went wrong while processing your message.",
        )