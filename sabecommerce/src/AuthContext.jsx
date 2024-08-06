import { createContext, useContext, useState } from "react";

export const authContext = createContext(undefined)

export  function AuthProvider({children}){
    const [user, setUser] = useState()
    console.log(user)
 return (<authContext.Provider value={{ user, setUser}} > {children} </authContext.Provider>)  
}


export const useAuth = () =>  useContext(authContext)