import React, { useEffect, useCallback, useState } from "react";
import TodoForm from "./Todo-form";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./Todo-list/Todo-list";
import {
  deleteTodo,
  changeTodo,
  editTodo,
  completedTodo,
  addPost,
} from "../Redux/Actions";
import { getTodos } from "../thunk/services";

const Home = () => {
  const { todos, loadTodos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleChange = (id) => {
    dispatch(changeTodo(id));
  };
  const updateTodo = (id, text) => {
    dispatch(editTodo(id, text));
  };
  const isActivTodo = (id) => {
    dispatch(completedTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    if(loadTodos) {
      dispatch(addPost(loadTodos))
    }
  }, [])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      dispatch(addPost(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <TodoForm />
      <div className="list">
        {todos &&
          todos.map((elem, index) => {
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
    </div>
  );
};

export default Home;
