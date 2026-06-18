import { createSlice } from "@reduxjs/toolkit";

const loggedUser = createSlice({
    name="loggedUser",
    initialState: {
        name: "ram",
        loggedIn: true,
        
    }
})