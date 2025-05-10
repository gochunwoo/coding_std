document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");

    // 물결 효과를 위한 추가 wave 요소 생성
    for (let i = 0; i < 2; i++) {
        const wave = document.createElement("div");
        wave.className = "wave";
        banner.appendChild(wave);
    }

    // 마우스 이동에 따른 물결 효과
    banner.addEventListener("mousemove", (e) => {
        const waves = document.querySelectorAll(".wave");
        const rect = banner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        waves.forEach((wave, index) => {
            const speed = (index + 1) * 0.5;
            wave.style.transform = `translate(${x * speed}px, ${
                y * speed
            }px) rotate(${index * 45}deg)`;
        });
    });
});
