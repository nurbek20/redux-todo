import React, { useState } from "react";

import s from "./Todo-list.module.css";
const TodoList = (props) => {
  const {
    index,
    id,
    title,
    completed,
    change,
    handleDelete,
    handleChange,
    updateTodo,
    isActivTodo,
  } = props;
  const [input, setInput] = useState(title);
  const handleUpdate = () => {
    updateTodo(id, input);
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
              <input
                onChange={() => isActivTodo(id)}
                checked={completed}
                type="checkbox"
              />
              <span className={completed?s.text:null} >{`${index + 1}. ${title}`}</span>
              <button disabled={completed?true:false} onClick={() => handleChange(id)}>Change</button>
              <button disabled={completed?false:true} onClick={() => handleDelete(id)}>Delete</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
