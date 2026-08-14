from collections import defaultdict
from time import time


REQUEST_LIMIT = 2
TIME_WINDOW = 10 * 60  # 10 minutes

requests = defaultdict(list)


def is_rate_limited(client_ip: str) -> bool:
    current_time = time()

    # Remove requests older than the time window
    requests[client_ip] = [
        request_time
        for request_time in requests[client_ip]
        if current_time - request_time < TIME_WINDOW
    ]

    # Check limit
    if len(requests[client_ip]) >= REQUEST_LIMIT:
        return True

    # Record current request
    requests[client_ip].append(current_time)

    return False