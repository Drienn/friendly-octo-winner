import { useContext, createContext } from 'react';

export const StoreContext = createContext({});
export const useStore = () => useContext(StoreContext);
