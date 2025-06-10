import mysql from "mysql2/promise";

// DB 연결 설정
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 게시글 목록 조회
export async function getBoardList() {
  try {
    const [rows] = await pool.query(
      "SELECT num, title, author, readcnt, bwrite FROM nodeboard ORDER BY num DESC"
    );
    return rows;
  } catch (error) {
    console.error("게시글 목록 조회 실패:", error);
    throw error;
  }
}

// 게시글 상세 조회
export async function getBoardDetail(num) {
  try {
    const [rows] = await pool.query("SELECT * FROM nodeboard WHERE num = ?", [
      num,
    ]);
    return rows[0];
  } catch (error) {
    console.error("게시글 상세 조회 실패:", error);
    throw error;
  }
}

// 조회수 증가
export async function increaseReadCount(num) {
  try {
    await pool.query(
      "UPDATE nodeboard SET readcnt = readcnt + 1 WHERE num = ?",
      [num]
    );
  } catch (error) {
    console.error("조회수 증가 실패:", error);
    throw error;
  }
}

// 게시글 작성
export async function createBoard(author, title, content) {
  try {
    const [result] = await pool.query(
      "INSERT INTO nodeboard (author, title, content) VALUES (?, ?, ?)",
      [author, title, content]
    );
    return result.insertId;
  } catch (error) {
    console.error("게시글 작성 실패:", error);
    throw error;
  }
}

// 게시글 수정
export async function updateBoard(num, title, content) {
  try {
    const [result] = await pool.query(
      "UPDATE nodeboard SET title = ?, content = ? WHERE num = ?",
      [title, content, num]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("게시글 수정 실패:", error);
    throw error;
  }
}

// 게시글 삭제
export async function deleteBoard(num) {
  try {
    const [result] = await pool.query("DELETE FROM nodeboard WHERE num = ?", [
      num,
    ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("게시글 삭제 실패:", error);
    throw error;
  }
}
