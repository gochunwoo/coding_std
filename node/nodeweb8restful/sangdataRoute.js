import express from 'express';

// DB 처리 함수들 가져오기 (sangprocess.js에서 export한 함수들)
import {
  getAllSangdata,
  getSangdataByCode,
  createSangdata,
  updateSangdata,
  deleteSangdata
} from './sangprocess.js';

const router = express.Router(); 

// read all
// 1. 전체 상품 목록 조회 (GET /sangdata) 
router.get('/', async (req, res) => {
  try {
    const rows = await getAllSangdata();    // 전체 상품 다 가져오기
    res.status(200).json(rows);             // 성공하면 목록을 JSON으로 보내기
  } catch (err) {
    res.status(500).json({ error: err.message }); // 서버 에러 처리
  }
});

// read one
// 2. 특정 상품 하나 조회 (GET /sangdata/:code)
router.get('/:code', async (req, res) => {
  const { code } = req.params;                 // 주소에서 code값 추출

  try {
    const row = await getSangdataByCode(code); // DB에서 해당 상품 가져오기

    // 상품이 없으면 메시지와 404 상태코드 보내기
    if (row.length === 0) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.status(200).json(row[0]);  // 상품이 있으면 첫 번째 데이터만 보여주기

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// insert
// 3. 상품 추가 (POST /sangdata) 
router.post('/', async (req, res) => {
  const { code, sang, su, dan } = req.body; 

  try {
    await createSangdata(code, sang, su, dan); 
    res.status(201).json({ code, sang, su, dan }); // 추가 성공 시 입력값 그대로 응답
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update
// 4. 상품 수정 (PUT /sangdata/:code) 
router.put('/:code', async (req, res) => {
  const { code } = req.params;              
  const { sang, su, dan } = req.body;       

  try {
    const result = await updateSangdata(code, sang, su, dan); 

    // 수정된 데이터가 없으면 (없는 코드거나 같은 값이면) 실패 메시지
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.status(200).json({ message: 'data updated' }); 

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete
// 5. 상품 삭제 (DELETE /sangdata/:code)
router.delete('/:code', async (req, res) => {
  const { code } = req.params;                

  try {
    const result = await deleteSangdata(code);  

    // 삭제된 행이 없으면 실패 메시지
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'data not found' });
    }

    res.status(200).json({ message: 'data deleted' }); 

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
