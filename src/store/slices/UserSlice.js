import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
state.push(action.payload)

        },
        removeUser(state,action){
            
        state.splice(action.payload,1)
        },
        clearalluser(state,action){
return [];
        }
    }
})

console.log(UserSlice)


export default UserSlice.reducer;
export const {addUser} =UserSlice.actions
export const {removeUser} =UserSlice.actions

export const {clearalluser} =UserSlice.actions