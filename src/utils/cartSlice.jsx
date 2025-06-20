import { createSlice } from "@reduxjs/toolkit";


const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    // reducer is an obj and that obj has diff type of actions that can we take 
    reducers:{
        additem:(state,action)=>{
            //mutating the state
            state.items.push(action.payload);
        },
        deleteitem:(state)=>{
            state.items.pop()
        },
        clearcart:(state)=>{
            // RTK-either mutate the state or return a new state- return {items : []}
            state.items.length=0
        }
    }
})

export const {additem,deleteitem,clearcart} =cartSlice.actions
export default cartSlice.reducer