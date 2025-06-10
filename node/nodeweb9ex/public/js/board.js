// 오늘 날짜 yyyy-mm-dd
function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

// 검색 기능
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
let allPosts = [];

async function loadBoardList() {
  const res = await fetch("/board");
  const posts = await res.json();
  allPosts = posts;
  renderBoardList(posts);
}

function renderBoardList(posts) {
  const today = getToday();
  const tbody = document.getElementById("boardList");
  tbody.innerHTML = posts
    .map((post, idx) => {
      const isNew = post.bwrite && post.bwrite.slice(0, 10) === today;
      return `
      <tr>
        <td>${idx + 1}</td>
        <td><a href="view.html?num=${post.num}">${post.title}</a> ${
        isNew ? '<span class="badge bg-danger ms-1">New</span>' : ""
      }</td>
        <td>${post.author}</td>
        <td>${post.readcnt}</td>
        <td>${new Date(post.bwrite).toLocaleDateString()}</td>
      </tr>
    `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", loadBoardList);

if (searchBtn && searchInput) {
  searchBtn.onclick = function () {
    const keyword = searchInput.value.trim();
    if (!keyword) {
      renderBoardList(allPosts);
      return;
    }
    const filtered = allPosts.filter(
      (post) =>
        post.title.includes(keyword) ||
        post.author.includes(keyword) ||
        (post.content && post.content.includes(keyword))
    );
    renderBoardList(filtered);
  };
}

// 글쓰기
const writeForm = document.getElementById("writeForm");
if (writeForm) {
  writeForm.onsubmit = async function (e) {
    e.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const res = await fetch("/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, title, content }),
    });
    const resultModal = new bootstrap.Modal(
      document.getElementById("resultModal")
    );
    if (res.ok) {
      document.getElementById("resultMsg").textContent = "등록되었습니다.";
      resultModal.show();
      writeForm.reset();
      loadBoardList();
    } else {
      document.getElementById("resultMsg").textContent = "등록 실패";
      resultModal.show();
    }
  };
}
