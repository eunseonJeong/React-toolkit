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
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/About"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {findTodo.id}
        {findTodo.title}
        {findTodo.text}
        </div>
    </div>
  );
}

export default About;
