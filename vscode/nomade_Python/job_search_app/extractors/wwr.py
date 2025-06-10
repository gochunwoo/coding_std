from playwright.sync_api import sync_playwright
import time

def extract_wwr_jobs(keyword):
    jobs = []  # 크롤링 결과를 담을 리스트

    print("\n[WWR] WeWorkRemotely 사이트 스크래핑을 시작합니다.")
    print(f"[WWR] 검색 키워드: {keyword}")
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)  # headless 모드로 브라우저 실행
        page = browser.new_page()
        
        # User-Agent를 설정하여 차단 방지
        page.set_extra_http_headers({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
        })
        
        try:
            search_url = f"https://weworkremotely.com/remote-jobs/search?term={keyword}"  # 검색 URL 생성
            print(f"[WWR] {search_url} 로 이동합니다.")
            page.goto(search_url)   # 해당 URL로 이동
            time.sleep(5)           # 페이지 로딩 대기
            print("[WWR] 페이지 로딩 완료.")

            print("[WWR] 채용공고 요소 탐색 중...")

            # li.feature, article.job 등 여러 방식으로 채용공고 요소 찾기
            job_elements = page.query_selector_all("li.feature, article.job")
            print(f"[WWR] 잠재적인 채용공고 요소 {len(job_elements)}개 발견.")

            # 만약 요소를 못 찾으면 백업 선택자 사용
            if not job_elements:
                job_elements = page.query_selector_all(".jobs-list li")
                print(f"[WWR] (.jobs-list li)로 {len(job_elements)}개 요소 재발견.")

            # 각 채용공고 요소를 순회하며 정보 추출
            for i, element in enumerate(job_elements):
                print(f"[WWR] {i+1}/{len(job_elements)}번째 채용 요소 처리 중...")
                try:
                    link_elem = element.query_selector("a")
                    link = f"https://weworkremotely.com{link_elem.get_attribute('href')}" if link_elem and link_elem.get_attribute('href') else ""
                    print(f"[WWR] {i+1}번째: 링크 = {link}")

                    title_elem = element.query_selector("span.title, .title")
                    title = title_elem.inner_text() if title_elem else ""
                    print(f"[WWR] {i+1}번째: 제목 = {title}")
                    
                    company_elem = element.query_selector("span.company, .company")
                    company = company_elem.inner_text() if company_elem else ""
                    print(f"[WWR] {i+1}번째: 회사 = {company}")
                    
                    region_elem = element.query_selector("span.region, .region")
                    region = region_elem.inner_text() if region_elem else "정보 없음"
                    print(f"[WWR] {i+1}번째: 지역/리워드 = {region}")

                    # 필수정보 있을 때만 저장(키워드와 매치되는 제목 또는 회사)
                    if link and title and company:
                        # 검색어가 제목이나 회사명에 포함되는 경우만 저장
                        if keyword.lower() in title.lower() or keyword.lower() in company.lower():
                            jobs.append({
                                "title": title.strip(),
                                "company": company.strip(),
                                "reward": region.strip(),
                                "link": link
                            })
                            print(f"[WWR] {i+1}번째: '{title}' 채용공고 결과에 추가.")
                        else:
                            print(f"[WWR] {i+1}번째: '{title}'은(는) 키워드 '{keyword}'와 일치하지 않아 건너뜀.")
                    else:
                        print(f"[WWR] {i+1}번째: 필수 정보(링크/제목/회사) 누락으로 건너뜀.")

                except Exception as e:
                    print(f"[WWR] {i+1}번째: 채용공고 처리 중 오류 발생 - {str(e)}")
                    continue
            
        except Exception as e:
            print(f"[WWR] 스크래핑 과정 중 오류 발생: {str(e)}")
        
        finally:
            print(f"[WWR] WeWorkRemotely 스크래핑 종료. 총 수집 건수: {len(jobs)}")
            browser.close()  # 브라우저 닫기

    return jobs  # 크롤링 결과 반환
