import { ADD_TODO } from "./Types";

export const addTodo=(data)=>{
    console.log("data>>>", data);
    return {
        type:ADD_TODO,
        payload:data
    }
}