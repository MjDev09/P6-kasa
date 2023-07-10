import '../styles/Title.scss'
import '../styles/About.scss'
import img_title from '../assets/background-about.png'
import { useContext, useEffect } from 'react'
import { ValorContext } from '../utils/ContextProvider'
import { AnimationContext } from '../utils/ContextProvider'

function About() {
    const { openOnglet, valeurs } = useContext(ValorContext)
    

    const { animationFunction, animationOn } = useContext(AnimationContext)
    

    const animationFiabiliteClick = () => {
        openOnglet('onglet_fiabilite')
        animationFunction('animation_fiabilite')
    }

    const AnimationFiabiliteEnd = () => {
        openOnglet('onglet_fiabilite');
      };


    return (
        <div>
            <div className='boxTitle'>
                <img src={img_title} alt='Grandes roches au bord de mer' className='boxTitle__image'/>
            </div>
            
            <div className='valeurs'>
                <div className='valeurs__box'>
                    <div className='boxValor'>
                        <h2 className='boxValor__title'>Fiabilité</h2>
                        <button onClick={animationFiabiliteClick}  className={`boxValor__icone-arrow ${animationOn ? (valeurs ? 'btn-anim' : 'btn-anim-reverse') : ''}`}
        onAnimationEnd={AnimationFiabiliteEnd}></button>
                    </div>{console.log(valeurs)}{console.log(animationOn)} 
                    <div className='boxText'>
                        <p className={`hidden ${animationOn ? (valeurs ? 'textVisible' : 'textHidden') : ''}`}
        >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </div>

                <div className='valeurs__box'>
                    <h2 className='valeurs__box__title'>Respect</h2>
                    {/*<img src={icone_arrow} alt='icone arrow_back'/>*/}
                    <span></span>
                </div>

                <div className='valeurs__box'>
                    <h2 className='valeurs__box__title'>Service</h2>
                    
                    <span></span>
                </div>
                
                <div className='valeurs__box'>
                    <h2 className='valeurs__box__title'>Sécurité</h2>
                    
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default About