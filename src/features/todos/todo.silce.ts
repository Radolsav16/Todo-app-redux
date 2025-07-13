import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Todo from "./types";
import { addTodo, deleteTodo, fetchTodos } from "./todosThunks";



interface TodosState {
    items:{[key:string]:Todo},
    status:'idle' | 'succeeded' | 'failed' | 'loading',
    error:string | null
}


const initialState:TodosState = {
    items:{},
    status:'idle',
    error:null
};


export const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{ },
    extraReducers:(builder) =>{
        builder
            .addCase(fetchTodos.pending,(state)=>{
                state.status = 'loading'
                state.error = null
                state.items = {}
            })
            .addCase(fetchTodos.rejected,(state,action) =>{
                state.status = 'failed';
                state.error = action.error.message ?? 'Failing Fetch Request';
            })
            .addCase(fetchTodos.fulfilled,(state,action: PayloadAction<{[key:string]:Todo}>)=>{
                state.status = 'succeeded';
                state.items = action.payload
            })
            .addCase(deleteTodo.rejected,(state,action) =>{
                state.status = 'failed'
                state.error = action.error.message ?? 'Failing delete todo'
            })

            .addCase(deleteTodo.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                delete state.items[action.payload];
            })
            .addCase(addTodo.rejected,(state,action) =>{
                state.status = 'failed',
                state.error = action.error.message ?? 'Failing Adding Todo'
            })
            .addCase(addTodo.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.items[action.payload.id] = action.payload
            })
    }
}) 

export const todosReducer =  todosSlice.reducer;