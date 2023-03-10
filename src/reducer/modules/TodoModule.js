import { createSlice } from "@reduxjs/toolkit";
//객체로 변경하는 
const initialState = [];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        newTodo: (state, {payload}) => {
            state.push({
                id: state.length + 1,
                title: payload.title,
                text: payload.text,
                isDone: false,
                edit: false,
            })
        },

        doneState: (state, {payload}) => {
            return state.map((item) => item.id === payload ? {...item, isDone: !item.isDone} : item)
        },

        deleteTodo: (state, {payload}) => {
            return state.filter((item)=> payload !== item.id);
        },

        editState: (state, {payload}) => {
            return state.map((item) => item.id === payload ? {...item, edit: !item.edit} : item);
        },

        fixTodo: (state, {payload}) => {
            return state.map((item) => item.id === payload[0] ? {...item, title: payload[1], text: payload[2], edit: !item.edit} : item);
        },
    }
})

export const { newTodo, doneState, deleteTodo, editState, fixTodo} = todoSlice.actions;
export default todoSlice.reducer;