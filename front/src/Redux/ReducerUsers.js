import { createReducer } from '@reduxjs/toolkit';
import { ALERT, LIMPIAR_ALERT, GET_USUARIO } from './ActionsUser.js';

const initalState = {
  user: {},
  alert: {}
};

const userReducer = createReducer(initalState, (builder) => {
  builder
    .addCase( ALERT, (state, action) => {
      return {
        ...state,
        alert: action.payload
      }
    })
    .addCase( LIMPIAR_ALERT, (state) => {
      return {
        ...state,
        alert: {}
      }
    })
    .addCase( GET_USUARIO, (state, action) => {
      return {
        ...state,
        user: action.payload
      }
    })
});

export default userReducer;