// src/api/jikwon.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jikwon";

// 전체 직원 조회
export const getAllJikwon = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// 특정 직원 조회
export const getJikwon = async (no) => {
  const res = await axios.get(`${BASE_URL}/${no}`);
  return res.data;
};

// 직급 수정
export const updateJik = async (no, jik) => {
  const res = await axios.put(`${BASE_URL}/${no}`, { jikwonjik: jik });
  return res.data;
};

// 성별별 직원 조회
export const getJikwonByGender = async (gender) => {
  const res = await axios.get(`${BASE_URL}/gender/${gender}`);
  return res.data;
};

// 성별별 평균연봉
export const getAvgPayByGender = async () => {
  const res = await axios.get(`${BASE_URL}/gender/avgpay`);
  return res.data;
};
