import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {newTodo,doneState,deleteTodo,editState,fixTodo} from "../modules/TodoModule"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [fixTitle, setFixTitle] = useState("");
  const [fixText, setFixText] = useState("");

  const titleTodo = (e) => {
    setTitle(e.target.value);
  };

  const textTodo = (e) => {
    setText(e.target.value);
  };

  const fixTitleTodo = (e) => {
    setFixTitle(e.target.value);
  };

  const fixTextTodo = (e) => {
    setFixText(e.target.value);
  };

  return (
    <>
      <header> TodoList </header>
      <form>
        <label htmlFor="">제목 : </label>
        <input type="text" onChange={titleTodo} />
        <label htmlFor="">내용 : </label>
        <input type="text" onChange={textTodo} />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(newTodo({ title, text }));
          }}
        >
          작성
        </button>
      </form>

      <hr />

      <div>
        <h2>해야 할 일</h2>
        {todoList.map((item) =>
          !item.isDone ? (
            <div key={item.id}>
              {item.edit ? (
                <div>
                  <input value={fixTitle} onChange={fixTitleTodo} />
                  <input value={fixText} onChange={fixTextTodo} />
                  <button
                    onClick={() => {
                      dispatch(fixTodo([item.id, fixTitle, fixText]));
                    }}
                  >
                    수정완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch(doneState(item.id));
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(item.id));
                    }}
                  >
                    삭제
                  </button>
                </div>
              ) : (
                <div>
                  <li onClick={() =>{navigate(`/About/${item.id}`)}}>더보기</li>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button
                    onClick={() => {
                      dispatch(editState(item.id));
                      setFixTitle(item.title);
                      setFixText(item.text);
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      dispatch(doneState(item.id));
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(item.id));
                    }}
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          ) : null
        )}
      </div>

      <hr />
      <div>
        <div>
          <h2>끝난 일</h2>
          {todoList.map((item) =>
            item.isDone ? (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button
                  onClick={() => {
                    dispatch(doneState(item.id));
                  }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(item.id));
                  }}
                >
                  삭제
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
