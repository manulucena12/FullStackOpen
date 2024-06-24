import { createSlice } from "@reduxjs/toolkit"

export const userListSlice = createSlice({
    name: 'UserList',
    initialState: [],
    reducers: {
        setUserList(state,action){
            return action.payload
        },
        addUserToList(state,action){
            state.push({...action.payload, blogs: []})
        }
    }
})

export const {setUserList, addUserToList} = userListSlice.actions