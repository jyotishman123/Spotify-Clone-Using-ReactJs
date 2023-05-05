import React,{useReducer,createContext,useContext} from 'react';

const Contex = createContext()

export default function ContexProvider({ initialState, reducer,  children}) {
  return (
     <Contex.Provider value={useReducer(reducer, initialState)}>
        {children}
     </Contex.Provider>
  )
}

export const useContexValue = () => useContext(Contex)