import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Conteext/Context'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItem'

function App() {
const [todos, setTodos] = useState([])

const addTodo = (todo) => {
  setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
}

const editTodo = (id, todo) => {
  setTodos((prev) => prev.forEach((prevTodo)=> (prevTodo.id === id ? todo: prevTodo)))
}

const removeTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

const toggleCheck = (id) => {
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo===id? {...prevTodo, complete: !prevTodo.complete } : prevTodo))
}

useEffect(()=>{
  const todo = localStorage.getItem("todo")
  if (todo) {
    setTodos(todo)  
  }
}, [])

useEffect(() =>{
  const setTod = localStorage.setItem("todos", JSON.stringify(todos))
}, [todos ])

  return (
    <TodoProvider value={{todos, addTodo, removeTodo, editTodo, toggleCheck}}>
      <h1 className='bg-violet-700 w-full p-5 rounded-lg text-4xl text-white font-bold '>React TODO List</h1>
      <div className="bg-[#172842] min-h-screen py-8 rounded-md">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
             
                  {todos.forEach((todo) =>(
                    <div key={todo.id}>
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
