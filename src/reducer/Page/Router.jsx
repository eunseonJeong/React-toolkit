import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import App from "../../App";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는, 
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  const location = useLocation();
  return (
    // <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<App/>} ></Route>
        <Route path='/:id' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;