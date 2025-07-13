import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Todo from "./types";

const baseUrl = 'https://todo-app-redux-53d66-default-rtdb.europe-west1.firebasedatabase.app/todos.json'

export const fetchTodos = createAsyncThunk<{[key:string]:Todo}>(
    'todos/fetchTodos',
    async () => {
        const res = await axios.get(baseUrl);

        return res.data;
    }

);


// export const deleteTodo createAsyncThunk<string,Todo>(
//     'todos/deleteTodo',
//     async(data)=>{
//         try {
//             await axios.delete(baseUrl,JSON.stringify(data))
//             return 
//         } catch (error) {
            
//         }
//     }
// );

