import React, { useState, } from 'react'





function Collapse({titleDropdawn, children}){
    
    const [isAnimated, setIsAnimated] = useState(false) //état qui permet de savoir si l'onglet est ouvert ou fermé//

    const [isLoadAnimation, setIsLoadAnimation] =useState(false)  //état qui est à faux au départ pour éviter l'animation au chargement de page//
    
    const handleClick = () => {
        setIsAnimated(!isAnimated)
        setIsLoadAnimation(true)
    }
        return (
            <div className='valeurs__box'>
                
                <div className='boxValor'>
                    <h2 className='boxValor__title'>{titleDropdawn}</h2>
                    <button onClick={handleClick} className={`boxValor__icone-arrow ${isLoadAnimation ?(isAnimated ? 'btn-anim': 'btn-anim-reverse')  : ''}`}></button>
                </div>

                <div className={`boxText ${isLoadAnimation ? (isAnimated ? 'boxText-extension' : 'boxText-shrinking') : ''}`}>
                    <div className={`hiddenText ${isLoadAnimation ? (isAnimated ? 'hiddenText-visible' : 'hiddenText-noVisible') : ''}`}>
                        {children}
                    </div>
                </div>

            </div>
    )
}

export default Collapse;