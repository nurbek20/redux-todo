import { ADD_TODO, DELETE_TODO, CHANGE_TODO,EDIT_TODO } from "../Types";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  console.log("action>>>", action);
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
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
    case EDIT_TODO:{
      const {id,text}=action
      const edit=state.todos.map((elem,i)=>{
        return elem.id===id?{...elem,change: false,text:text}:{...elem}
      })
      return{
        ...state,
        todos:edit
      }
    }

    default:
      return state;
  }
};
