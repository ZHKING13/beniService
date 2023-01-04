import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthentificated : false,
}

export const userReducer = createReducer(initialState,{
  LoginRequest: (state) => {
    state.loading = true
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.playload;
    state.isAuthentificated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.playload;
    state.isAuthentificated = false;

  },

  RegisterRequest: (state) =>{
    state.loading = true

  },
  RegisterSuccess: (state, action) =>{
    state.loading = false;
    state.user = action.playload;
    state.isAuthentificated = true;
  },
  RegisterFailure: (state, action) =>{
    state.loading = false;
    state.error = action.playload;
    state.isAuthentificated = false;
    
  },

  LoadUserRequest: (state) => {
    state.loading = true
},
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.playload;
    state.isAuthentificated = true;
},
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.playload ;
    state.isAuthentificated = false;
  },
  getUserRequest: (state) => {
    state.loading = true

  },
  getUserSucces: (state, action) => {
    state.loading = false;
    state.user = action.playload;
    state.isAuthentificated = true;
  },
  getUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.playload;
    state.isAuthentificated = false;

  },
})