from urllib import request
import cloudscraper                     # Cloudflare 우회용 요청 도구
from bs4 import BeautifulSoup           # HTML 파싱용 라이브러리
import sys

import requests                              # 콘솔 출력 설정을 위한 모듈

sys.stdout.reconfigure(encoding='utf-8')


scraper = cloudscraper.create_scraper()
'''all_jobs = []

def scrape_page(url):
    response = scraper.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    jobs = soup.find("section", class_="jobs").find_all("li")[1:-1]
    
    for job in jobs:
        title_tag = job.find("h4", class_="new-listing__header__title")
        company_tag = job.find("p", class_="new-listing__company-name")
        region_tags = job.find_all("p", class_="new-listing__categories__category")

        title = title_tag.text.strip() if title_tag else "N/A"
        company = company_tag.text.strip() if company_tag else "N/A"
        position = title
        region = region_tags[-1].text.strip() if region_tags else "N/A"

        link_tag = job.find("a")
        url = "https://weworkremotely.com" + link_tag["href"] if link_tag else "N/A"
        job_data = {
            "title": title,
            "company": company,
            "position": position,
            "region": region,
            "url": url
        }

        all_jobs.append(job_data)


category_url = "https://weworkremotely.com/categories/remote-back-end-programming-jobs"
scrape_page(category_url)

for job in all_jobs:
    print(job)'''


keywords = ["flutter", "python", "golang"]

r = requests.get("https://remoteok.com/remote-flutter-jobs", headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
})

print(r.status_code)