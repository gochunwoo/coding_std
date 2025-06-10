// 게시글 번호 추출
const urlParams = new URLSearchParams(window.location.search);
const postNum = urlParams.get("num");

// 게시글 상세 정보 불러오기
async function loadPostDetail() {
  try {
    const response = await fetch(`/board/${postNum}`);
    if (!response.ok) throw new Error("게시글을 찾을 수 없습니다.");
    const post = await response.json();
    document.getElementById("postTitle").textContent = post.title;
    document.getElementById("postAuthor").textContent = post.author;
    document.getElementById("postReadCount").textContent = post.readcnt;
    document.getElementById("postDate").textContent = new Date(
      post.bwrite
    ).toLocaleString();
    document.getElementById("postContent").innerHTML = post.content.replace(
      /\n/g,
      "<br>"
    );
  } catch (error) {
    showResultModal(error.message);
  }
}

document.addEventListener("DOMContentLoaded", loadPostDetail);

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

// 수정 모달
const editBtn = document.getElementById("editBtn");
if (editBtn) {
  editBtn.onclick = function () {
    document.getElementById("editTitle").value =
      document.getElementById("postTitle").textContent;
    document.getElementById("editContent").value =
      document.getElementById("postContent").textContent;
    const modal = new bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  };
}

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
          () => (window.location.href = "board.html")
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

// 삭제 버튼
const deleteBtn = document.getElementById("deleteBtn");
if (deleteBtn) {
  deleteBtn.onclick = function () {
    const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
    modal.show();
  };
}

// 삭제 확인
const deleteConfirmBtn = document.getElementById("deleteConfirmBtn");
if (deleteConfirmBtn) {
  deleteConfirmBtn.onclick = async function () {
    try {
      const response = await fetch(`/board/${postNum}`, { method: "DELETE" });
      if (response.ok) {
        showResultModal(
          "삭제되었습니다.",
          () => (window.location.href = "board.html")
        );
      } else {
        const error = await response.json();
        showResultModal(error.error || "삭제 실패");
      }
    } catch (error) {
      showResultModal("삭제 실패");
    }
  };
}
