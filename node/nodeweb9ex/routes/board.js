import express from "express";
import {
  getBoardList,
  getBoardDetail,
  increaseReadCount,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../db/db.js";

const router = express.Router();

// 게시글 목록 조회
router.get("/", async (req, res) => {
  try {
    const posts = await getBoardList();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 상세 조회
router.get("/:num", async (req, res) => {
  try {
    const num = parseInt(req.params.num);
    const post = await getBoardDetail(num);

    if (!post) {
      return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
    }

    // 조회수 증가
    await increaseReadCount(num);
    post.readcnt += 1; // 응답에 반영

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 작성
router.post("/", async (req, res) => {
  try {
    const { author, title, content } = req.body;

    if (!author || !title || !content) {
      return res.status(400).json({ error: "모든 필드를 입력해주세요." });
    }

    const postId = await createBoard(author, title, content);
    res.status(201).json({ id: postId, message: "게시글이 작성되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 수정
router.put("/:num", async (req, res) => {
  try {
    const num = parseInt(req.params.num);
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "제목과 내용을 입력해주세요." });
    }

    const success = await updateBoard(num, title, content);

    if (!success) {
      return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
    }

    res.json({ message: "게시글이 수정되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 게시글 삭제
router.delete("/:num", async (req, res) => {
  try {
    const num = parseInt(req.params.num);
    const success = await deleteBoard(num);

    if (!success) {
      return res.status(404).json({ error: "게시글을 찾을 수 없습니다." });
    }

    res.json({ message: "게시글이 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
