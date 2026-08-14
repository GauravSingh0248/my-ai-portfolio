import os

import requests
from dotenv import load_dotenv

load_dotenv()

EMAILJS_SERVICE_ID = os.getenv("EMAILJS_SERVICE_ID")
EMAILJS_TEMPLATE_ID = os.getenv("EMAILJS_TEMPLATE_ID")
EMAILJS_PUBLIC_KEY = os.getenv("EMAILJS_PUBLIC_KEY")
EMAILJS_PRIVATE_KEY = os.getenv("EMAILJS_PRIVATE_KEY")
EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send"


def send_contact_confirmation(
    recipient_email: str,
    recipient_name: str,
    subject: str,
    message: str,
):
    try:
        payload = {
            "service_id": EMAILJS_SERVICE_ID,
            "template_id": EMAILJS_TEMPLATE_ID,
            "user_id": EMAILJS_PUBLIC_KEY,
            "template_params": {
                "name": recipient_name,
                "email": recipient_email,
                "subject": subject,
                "message": message,
                "website_link": "http://localhost:5173",
            },
            "accessToken": EMAILJS_PRIVATE_KEY,
        }

        response = requests.post(
            EMAILJS_URL,
            json=payload,
            timeout=10,
        )

        if response.status_code != 200:
            print(
                f"EmailJS error: "
                f"{response.status_code} - {response.text}"
            )
            return False

        print("EmailJS confirmation email sent successfully!")
        return True

    except requests.RequestException as error:
        print(f"EmailJS request failed: {error}")
        return False

    except Exception as error:
        print(f"Email sending failed: {error}")
        return False