from app.services.email_service import send_contact_confirmation


success = send_contact_confirmation(
    recipient_email="officialgaurav0408@gmail.com",
    recipient_name="Gaurav",
    subject="EmailJS Test",
    message="Testing EmailJS from my FastAPI backend.",
)

print("Result:", success)