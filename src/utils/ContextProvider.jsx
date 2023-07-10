import React, { useState, createContext } from 'react'


export const ValorContext = createContext()

export const ValorProvider = ({ children }) => {
    const [valeurs, setValor] = useState({ onglet_fiabilite: false, onglet_respect: false, onglet_service: false, onglet_securite: false })
    const openOnglet = (onglet_select) => {
        setValor({ ...valeurs, [onglet_select]: !valeurs[onglet_select] });
    }

    return ( 
        <ValorContext.Provider value={{ valeurs, openOnglet }}>
        {children}
        </ValorContext.Provider>
    )
}

export const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
    const [animationOn, setAnimation] = useState({ animation_fiabilite: false, animation_respect: false, animation_service: false, animation_securite: false })
    const animationFunction = (animation_select) => {
        setAnimation({ ...animationOn, [animation_select]: !animationOn[animation_select] });
    }

    return (
        <AnimationContext.Provider value={{ animationOn, animationFunction }}>
        {children}
        </AnimationContext.Provider>    
    )
}   