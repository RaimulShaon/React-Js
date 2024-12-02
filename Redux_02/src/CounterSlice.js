import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ];

const CounterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers: {
        increament: (state, action)=>{
            const CounterIndex = state.findIndex((I) => I.id === action.payload)
        state[CounterIndex].value++
        },
        decreament: (state, action)=>{
            const CounterIndex = state.findIndex((I) => I.id === action.payload)
        state[CounterIndex].value--
        }
    }
})

export  default  CounterSlice.reducer;
export const {increament, decreament} = CounterSlice.actions;

