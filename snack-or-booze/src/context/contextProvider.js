import React, {useState, createContext} from "react";




export let myContext = createContext();



export const MyProvider = ({children}) =>{
const [drinks, setDrinks] = useState([]);
const [snacks, setSnacks] = useState([])




    return(
        <myContext.Provider  value={{drinks, snacks, setDrinks, setSnacks}}>
            {children}
        </myContext.Provider>
    )
}