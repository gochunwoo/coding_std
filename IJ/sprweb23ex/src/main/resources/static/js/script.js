// ✅ 스크롤 애니메이션 (IntersectionObserver)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

// 대상 요소에 모두 observer 연결
document.querySelectorAll(".stats-section, .solution-section, .ai-cards-section, .stats-box-section, .slide-section")
    .forEach(section => {
        observer.observe(section);
    });
