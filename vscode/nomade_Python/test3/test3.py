from requests import get

websites = ( 
    "google.com",
    "airbnb.com",
    "https://naver.com",
    "facebook.com",
    "https://tiktok.com"
)

results ={}

for website in websites:
    if not website.startswith("https://"):
        website = f"https://{website}"

    response = get(website)

    if 200 <= response.status_code < 300: # 200~299 = OK
        results[website] = "OK"
    elif 300 <= response.status_code < 400: # 300~399 = OK
        results[website] = "Redirect"
    elif 400 <= response.status_code < 500: # 400~499 = OK
        results[website] = "Client Error"
    else: # 그외
        results[website] = "Server Error or Other"

print(results)