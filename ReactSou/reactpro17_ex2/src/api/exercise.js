import axios from "axios";

const BASE_URL = "http://localhost:8080/api/exercise";

// 전체 운동 기록 조회
export const getAllExercise = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

// 운동 기록 등록
export const addExercise = async (exercise) => {
  const res = await axios.post(BASE_URL, exercise);
  return res.data;
};

// 운동 기록 수정
export const updateExercise = async (id, exercise) => {
  const res = await axios.put(`${BASE_URL}/${id}`, exercise);
  return res.data;
};

// 운동 기록 삭제
export const deleteExercise = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
