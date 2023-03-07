import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function About() {

  const param = useParams();
  const todoList = useSelector((state) => state.todo);

  const findTodo = todoList.find( (item) =>{
    return item.id === parseInt(param.id);
  })

  return (
    <div>
      <nav>
        <ul>
          <button>
            <Link to="/">
              Home
            </Link>
          </button>

        </ul>
      </nav>
      <div>
        {findTodo.id} <br />
        {findTodo.title} <br />
        {findTodo.text} <br />
        </div>
    </div>
  );
}

export default About;
