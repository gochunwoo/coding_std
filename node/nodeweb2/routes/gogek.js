import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("고객 전체 목록 출력쓰~");
});

export default router;
