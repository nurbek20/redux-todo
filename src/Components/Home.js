import React from "react";
import TodoForm from "./Todo-form";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./Todo-list/Todo-list";
import { deleteTodo, changeTodo,editTodo,completedTodo } from "../Redux/Actions";

const Home = () => {
  const { todos } = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleChange = (id) => {
    dispatch(changeTodo(id));
  };
  const updateTodo = (id, text) => {
    dispatch(editTodo(id,text))
  };
  const isActivTodo=(id)=>{
    dispatch(completedTodo(id))
  }


  return (
    <div>
      <h1 className="title">Todo List</h1>
      <TodoForm />
      {todos.map((elem, index) => {
        return (
          <TodoList
            key={index}
            {...elem}
            index={index}
            handleDelete={handleDelete}
            handleChange={handleChange}
            updateTodo={updateTodo}
            isActivTodo={isActivTodo}
          />
        );
      })}
    </div>
  );
};

export default Home;
