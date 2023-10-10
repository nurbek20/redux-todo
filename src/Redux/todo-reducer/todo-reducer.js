import { ADD_TODO } from "../Types";

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
        todos:[...state.todos,action.payload]
      };
    }
    default:
      return state;
  }
};
