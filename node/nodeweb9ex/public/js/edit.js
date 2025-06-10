// 글자수 제한
const maxTitle = 30;
const maxContent = 1000;
document.getElementById("editTitle").setAttribute("maxlength", maxTitle);
document.getElementById("editContent").setAttribute("maxlength", maxContent);

function updateCounter(id, max) {
  const input = document.getElementById(id);
  const counter = document.getElementById(id + "Count");
  input.addEventListener("input", () => {
    counter.textContent = `${input.value.length} / ${max}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCounter("editTitle", maxTitle);
  updateCounter("editContent", maxContent);
});

// 게시글 번호 추출
const urlParams = new URLSearchParams(window.location.search);
const postNum = urlParams.get("num");

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

// 기존 데이터 불러오기
async function loadEditData() {
  try {
    const response = await fetch(`/board/${postNum}`);
    if (!response.ok) throw new Error("게시글을 찾을 수 없습니다.");
    const post = await response.json();
    document.getElementById("editTitle").value = post.title;
    document.getElementById("editContent").value = post.content;
    document.getElementById(
      "editTitleCount"
    ).textContent = `${post.title.length} / ${maxTitle}`;
    document.getElementById(
      "editContentCount"
    ).textContent = `${post.content.length} / ${maxContent}`;
  } catch (error) {
    showResultModal(error.message, () => (location.href = "board.html"));
  }
}
document.addEventListener("DOMContentLoaded", loadEditData);

// 수정 폼 제출
const editForm = document.getElementById("editForm");
if (editForm) {
  editForm.onsubmit = async function (e) {
    e.preventDefault();
    const title = document.getElementById("editTitle").value;
    const content = document.getElementById("editContent").value;
    try {
      const response = await fetch(`/board/${postNum}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        showResultModal(
          "수정되었습니다.",
          () => (location.href = `view.html?num=${postNum}`)
        );
      } else {
        const error = await response.json();
        showResultModal(error.error || "수정 실패");
      }
    } catch (error) {
      showResultModal("수정 실패");
    }
  };
}
