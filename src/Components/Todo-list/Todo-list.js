import React, { useState } from "react";

import s from "./Todo-list.module.css";
const TodoList = (props) => {
  const {
    index,
    id,
    text,
    completed,
    change,
    handleDelete,
    handleChange,
    updateTodo,
  } = props;
  const [input, setInput] = useState(text);
  const handleUpdate=() => {
    updateTodo(id,input);
  };
  return (
    <>
      {change ? (
        <div className={s.formInput}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleUpdate}>Add</button>
        </div>
      ) : (
        <div className={s.form}>
          <ul>
            <li>
              <input type="checkbox" />
              <span>{`${index + 1}. ${text}`}</span>
              <button  onClick={() => handleChange(id)}>Change</button>
              <button  onClick={() => handleDelete(id)}>Delete</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
