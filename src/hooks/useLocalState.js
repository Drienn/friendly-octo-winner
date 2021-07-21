import { useReducer } from 'react';

export const reducer = (state, payload) => (payload ? { ...state, ...payload } : state);
export const useLocaleState = (initialState) => useReducer(reducer, initialState);
