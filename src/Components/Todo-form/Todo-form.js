import React,{useState,useEffect} from 'react'
import s from "./Todo-form.module.css"
import uniqid from 'uniqid';
import { addTodo } from '../../Redux/Actions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
  const dispatch=useDispatch()
  const [input,setInput]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    const id=uniqid()
    const newItem={
      id:id,
      title:input,
      completed:false,
      change:false
    }
    dispatch(addTodo(newItem))
    setInput('');
  }
  

  return (
      <form onSubmit={handleSubmit} className={s.form}>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} name="" id="" />
        <button type='submit' disabled={!input.trim()}>Add</button>
      </form>
  )
}

export default TodoForm