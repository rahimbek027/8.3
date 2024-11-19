import React, { createContext, ReactNode, useState } from "react";
import { CountryType } from "../components/CountriesList";

interface ContextType {
    counties:CountryType[];
    setCounties:React.Dispatch<React.SetStateAction<CountryType[]>>;
    refresh:boolean
    setRefresh:React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextType>({
    counties:[],
    setCounties:():void => {},
    refresh:false,
    setRefresh:():void => {}
})

export const CountryContext:React.FC<{children: ReactNode}> = ({children}) => {
    const [counties, setCounties] = useState<CountryType[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false)
    
    return (
        <Context.Provider value={{counties, setCounties, refresh, setRefresh}} >{children}</Context.Provider>
    )
}