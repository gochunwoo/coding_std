import React, { useState } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";

const Input2 = () => {
  const [params, setParams] = useState({
    irum: "",
    nai: "",
    juso: "",
  });

  const { irum, nai, juso } = params;

  const changeFunc = (e) => {
    const { id, value } = e.target;
    setParams({
      ...params,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    console.log("등록된 값:", params); // 실제 실무에서는 DB나 배열에 저장
    alert("등록 완료!");

    // 입력값 초기화
    setParams({
      irum: "",
      nai: "",
      juso: "",
    });
  };

  return (
    <Container className="my-4">
      <h3 className="mb-3">회원 정보 입력</h3>

      <Form>
        <Form.Group className="mb-3" controlId="irum">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            value={irum}
            onChange={changeFunc}
            placeholder="이름을 입력하세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nai">
          <Form.Label>나이</Form.Label>
          <Form.Control
            type="text"
            value={nai}
            onChange={changeFunc}
            placeholder="나이를 입력하세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="juso">
          <Form.Label>주소</Form.Label>
          <Form.Control
            type="text"
            value={juso}
            onChange={changeFunc}
            placeholder="주소를 입력하세요"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          등록
        </Button>
      </Form>

      <hr />

      <h5>입력 결과</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{irum}</td>
            <td>{nai}</td>
            <td>{juso}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Input2;
