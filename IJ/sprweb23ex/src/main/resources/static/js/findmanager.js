function findGogek() {
    const no = document.getElementById("jikwonNo").value;
    const name = document.getElementById("jikwonName").value;
    const data = { no: parseInt(no), name };

    fetch("/api/gogeks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            const area = document.getElementById("resultArea");
            if (data && data.length > 0) {
                area.innerHTML = `<strong>총 ${data.length}명</strong><br><br>`;
                data.forEach(g => {
                    area.innerHTML += `고객번호: ${g.gogekNo}, 고객명: ${g.gogekName}, 전화: ${g.gogekTel}<br>`;
                });
            } else {
                area.innerText = "해당 직원의 고객이 없습니다.";
            }
        });
}
