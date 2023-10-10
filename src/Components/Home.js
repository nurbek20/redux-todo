import React from 'react'
import TodoForm from './Todo-form'
import { useSelector } from 'react-redux'
import TodoList from './Todo-list/Todo-list'

const Home = () => {
    const {todos} =useSelector((state)=>state.todoReducer)
    console.log("todos>>>",todos);
  return (
    <div>
        <h1 className='title'>Todo List</h1>
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Home