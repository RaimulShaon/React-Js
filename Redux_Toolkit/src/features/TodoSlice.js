import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [
       { id: 1, 
        text: "hello World"}
    ]
}

export const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo : (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos. filter((item) =>(
                item.id !==action.payload
            ))
        },
        updateTodo : (state, action) =>{
            state.todos.forEach((item)=> item.id === action.payload.id? {...item, text}: item
                
            )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = TodoSlice.actions;
 
export default TodoSlice.reducer