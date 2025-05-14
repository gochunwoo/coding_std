import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./mydir/Home";
import About from "./mydir/About";
import ProductList from "./mydir/ProductList";
import ProductDetail from "./mydir/ProductDetail";
import Count from "./mydir/Count";
import Input1 from "./mydir/Input1";
import Input2 from "./mydir/Input2";
import Multidata from "./mydir/Multidata";
import MyProduct from "./mydir/MyAjax";
import MyProduct2 from "./mydir/MyAjax2";

import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            리액트 라우터 연습
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                홈
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                소개
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                상품 목록
              </Nav.Link>
              <Nav.Link as={Link} to="/countmem">
                Count 화면
              </Nav.Link>
              <Nav.Link as={Link} to="/input1">
                입력 화면
              </Nav.Link>
              <Nav.Link as={Link} to="/input2">
                회원 추가
              </Nav.Link>
              <Nav.Link as={Link} to="/multidata">
                배열 자료
              </Nav.Link>
              <Nav.Link as={Link} to="/myAjax">
                Ajax 연결
              </Nav.Link>
              <Nav.Link as={Link} to="/myAjax2">
                Ajax axios 연결
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 각 페이지 내용 */}
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/countmem" element={<Count />} />
          <Route path="/input1" element={<Input1 />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/multidata" element={<Multidata />} />
          <Route path="/myAjax" element={<MyProduct />} />
          <Route path="/myAjax2" element={<MyProduct2 />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
