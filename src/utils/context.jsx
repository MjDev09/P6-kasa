import { createContext, useState } from 'react';

export const LogementContext = createContext();

export const LogementContextProvider = ({ children }) => {
    const [dataLogement, setDataLogement] = useState([])
    const changeDataLogement = (data) => {
        setDataLogement(data)
    }
    if (dataLogement && dataLogement.length === 0) {
        const data = localStorage.getItem('logementSelected')
        if (data) {
        changeDataLogement(JSON.parse(data))
        
        }
    } 

    return (
        <LogementContext.Provider value={{ dataLogement, changeDataLogement}}>
            {children}
        </LogementContext.Provider>
    )
}