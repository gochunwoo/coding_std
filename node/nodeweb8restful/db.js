import mariadb from "mariadb";

// Connection Pool 설정
const dbpool = mariadb.createPool({
  host: "127.0.0.1", // DB 호스트
  user: "root", // 사용자 계정
  password: "123", // 비밀번호
  database: "test", // 사용할 DB 이름
  connectionLimit: 5, // 동시 연결 최대 수
  port: 3306,
});

export default dbpool;
