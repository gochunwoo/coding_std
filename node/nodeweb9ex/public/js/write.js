// 글자수 제한
const maxAuthor = 10;
const maxTitle = 30;
const maxContent = 1000;

document.getElementById("author").setAttribute("maxlength", maxAuthor);
document.getElementById("title").setAttribute("maxlength", maxTitle);
document.getElementById("content").setAttribute("maxlength", maxContent);

function updateCounter(id, max) {
  const input = document.getElementById(id);
  const counter = document.getElementById(id + "Count");
  input.addEventListener("input", () => {
    counter.textContent = `${input.value.length} / ${max}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCounter("author", maxAuthor);
  updateCounter("title", maxTitle);
  updateCounter("content", maxContent);
});

// 결과 안내 모달
function showResultModal(msg, callback) {
  document.getElementById("resultMsg").textContent = msg;
  const modal = new bootstrap.Modal(document.getElementById("resultModal"));
  modal.show();
  if (callback) {
    document
      .getElementById("resultModal")
      .addEventListener("hidden.bs.modal", function handler() {
        document
          .getElementById("resultModal")
          .removeEventListener("hidden.bs.modal", handler);
        callback();
      });
  }
}

document.getElementById("writeForm").onsubmit = async function (e) {
  e.preventDefault();
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  try {
    const res = await fetch("/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, title, content }),
    });
    if (res.ok) {
      showResultModal("등록되었습니다.", () => (location.href = "board.html"));
    } else {
      const error = await res.json();
      showResultModal(error.error || "등록 실패");
    }
  } catch (error) {
    showResultModal("등록 실패");
  }
};
