import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
  GET_POST
} from "./Types";

export const addTodo = (data) => {
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

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
};
export const completedTodo = (id) => {
  return{
    type:COMPLETED_TODO,
    id
  }
};

export const addPost=(data)=>{
  return{
    type:GET_POST,
    payload:{data}
  }
}