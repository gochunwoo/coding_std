import mariadb from "mariadb";

// DB pool 설정
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "test",
  connectionLimit: 5,
});

// DB 연결 함수
async function getConnection() {
  return pool.getConnection();
}

/*
// select 쿼리 함수
async function selectQuery() {
  let connection;
  try {
    connection = await getConnection();
    console.log("[DB] 연결 성공");
    const query = "SELECT * FROM sangdata";
    const rows = await connection.query(query);
    // const query = "SELECT * FROM sangdata where code=?";  // where code=? 몇번째 코드를 호출할건가?
    // const rows = await connection.query(query,[1]); query(query, [배열]) // 배열에 값을 너어 호출하면됨
    console.log(`[DB] ${rows.length}개 행 조회됨`);
    return rows;
  } catch (err) {
    console.error("[DB] 쿼리 실패:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.release();
      console.log("[DB] 연결 해제 완료");
    }
  }
}
*/
// 쿼리문에서 원하는 컬럼만 선택
// 쿼리결과를 rows에 저장
async function selectQuery() {
  let connection;
  try {
    connection = await getConnection();
    console.log("[DB] 연결 성공");

    // 원하는 컬럼만 조회
    const query = "SELECT code, sang, su, dan FROM sangdata";
    const rows = await connection.query(query);

    console.log(`[DB] ${rows.length}개 행 조회됨`);
    // 각 행을 하나씩 출력
    for (const row of rows) {
      // row는 { code: ..., sang: ..., su: ..., dan: ... } 형태
      console.log(
        `code: ${row.code}, sang: ${row.sang}, su: ${row.su}, dan: ${row.dan}`
      );
    }
    return rows;
  } catch (err) {
    console.error("[DB] 쿼리 실패:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.release();
      console.log("[DB] 연결 해제 완료");
    }
  }
}

// insert 쿼리 함수 추가
async function insertQuery(code, sang, su, dan) {
  let connection;
  try {
    connection = await getConnection();
    console.log("[DB] 연결 성공");
    const query =
      "INSERT INTO sangdata (code, sang, su, dan) VALUES (?, ?, ?, ?)";
    const result = await connection.query(query, [code, sang, su, dan]);
    console.log("[DB] insert 결과:", result);

    return result;
  } catch (err) {
    console.error("[DB] insert 실패:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.release();
      console.log("[DB] 연결 해제 완료");
    }
  }
}

// update 쿼리 함수 추가
async function updateQuery(code, sang, su, dan) {
  let connection;
  try {
    connection = await getConnection();
    console.log("[DB] 연결 성공");
    const query =
      "UPDATE sangdata SET sang = ?, su = ?, dan = ? WHERE code = ?";
    const result = await connection.query(query, [sang, su, dan, code]);
    console.log("[DB] update 결과:", result);

    return result;
  } catch (err) {
    console.error("[DB] update 실패:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.release();
      console.log("[DB] 연결 해제 완료");
    }
  }
}

// delete 쿼리 함수 추가
async function deleteQuery(code) {
  let connection;
  try {
    connection = await getConnection();
    console.log("[DB] 연결 성공");
    const query = "DELETE FROM sangdata WHERE code = ?";
    const result = await connection.query(query, [code]);
    console.log("[DB] delete 결과:", result);

    return result;
  } catch (err) {
    console.error("[DB] delete 실패:", err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.release();
      console.log("[DB] 연결 해제 완료");
    }
  }
}

// 메인 함수
async function main() {
  try {
    // await insertQuery(8, "노트북", 10, 5000); // 자료추가
    // await updateQuery(8, "게이밍노트북", 20, 15000);  // 자료 수정
    // await deleteQuery(8); // 자료 삭제

    // select 조회
    const rows = await selectQuery();
    console.log("[결과 출력]");
    console.log(JSON.stringify(rows, null, 2));
  } catch (err) {
    console.error("[에러] 프로그램 실행 중 오류:", err.message);
    process.exit(1);
  } finally {
    try {
      console.log("[DB] Connection pool 종료 완료");
    } catch (endErr) {
      console.error("[DB] Pool 종료 중 오류:", endErr.message);
    }
  }
}

main();

export { selectQuery, pool };
