// board.js

let modalCallback = null;

// 모달창 띄우기
function showModal(message, onConfirm) {
    document.getElementById("modalMessage").innerText = message;
    modalCallback = onConfirm;

    const modal = new bootstrap.Modal(document.getElementById("actionModal"));
    modal.show();
}

// 확인 버튼 누르면 콜백 실행
document.addEventListener("DOMContentLoaded", function () {
    const confirmBtn = document.getElementById("modalConfirmBtn");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", function () {
            if (modalCallback) modalCallback();
            const modal = bootstrap.Modal.getInstance(document.getElementById("actionModal"));
            modal.hide();
        });
    }

    // 작업 완료 시 알림창 띄우기
    const result = new URLSearchParams(window.location.search).get("result");
    if (result) {
        let msg = "";
        if (result === "insert") msg = "글이 등록되었습니다.";
        if (result === "update") msg = "글이 수정되었습니다.";
        if (result === "delete") msg = "글이 삭제되었습니다.";
        if (msg) showModal(msg, null); // 확인만 뜨는 모달
    }
});
