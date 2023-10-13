import { ADD_TODO, DELETE_TODO, CHANGE_TODO,EDIT_TODO } from "./Types";

export const addTodo = (data) => {
  console.log("data>>>", data);
  return {
    type: ADD_TODO,
    payload: data,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const changeTodo = (id) => {
  return {
    type: CHANGE_TODO,
    id,
  };
};

export const editTodo=(id,text)=>{
  return {
    type:EDIT_TODO,
    id,text
  }
}