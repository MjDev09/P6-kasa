import { createContext, useState } from 'react';

export const LogementContext = createContext();

export const LogementContextProvider = ({ children }) => {
    const [dataLogement, setDataLogement] = useState([])
    const changeDataLogement = (data) => {
        setDataLogement(data)
    }

    return (
        <LogementContext.Provider value={{ dataLogement, changeDataLogement}}>
            {children}
        </LogementContext.Provider>
    )
}