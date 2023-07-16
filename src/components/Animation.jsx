import React, { useState, } from 'react'





function ToggleSlide({titleDropdawn, children}){
    
    const [isTextVisible, setIsTextVisible] = useState(false)

    const [isAnimated, setIsAnimated] = useState(false)

    const [isLoadAnimation, setIsLoadAnimation] =useState(false)
    
    const handleClick = () => {
        setIsAnimated(!isAnimated)
        setIsTextVisible(!isTextVisible)
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

export default ToggleSlide