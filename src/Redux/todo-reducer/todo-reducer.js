import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
  GET_POST,
  LOAD_TODOS,
} from "../Types";

const initialState = {
  todos: [],
  loadTodos: []
};


export const todoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_TODO: {
      const updatedTodos = [...state.todos, payload];
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case DELETE_TODO: {
      const { id } = action;
      const updatedTodos = state.todos.filter((todo) => todo.id !== id);
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case CHANGE_TODO: {
      const { id } = action;
      const changetodos = state.todos.map((elem, i) => {
        return elem.id === id ? { ...elem, change: true } : { ...elem };
      });
      return {
        ...state,
        todos: changetodos,
      };
    }
    case EDIT_TODO: {
      const { id, text } = action;
      const edit = state.todos.map((elem, i) => {
        return elem.id === id
          ? { ...elem, change: false, title: text }
          : { ...elem };
      });
      return {
        ...state,
        todos: edit,
      };
    }
    case COMPLETED_TODO: {
      const { id } = action;
      const complete =  state.todos.map((elem, i) => {
        return elem.id === id
          ? { ...elem, completed: !elem.completed }
          : { ...elem };
      });
      return {
        ...state,
        todos: complete,
      };
    }
    case GET_POST:{
      return {
        ...state,
        todos: payload
      }
    }
    case LOAD_TODOS:{
      return {
        ...state,
        loadTodos: payload
      }
    }
    default:
      return state;
  }
};
