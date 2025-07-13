import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Todo from "./types";
import { fetchTodos } from "./todosThunks";



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
    }
}) 

export const todosReducer =  todosSlice.reducer;