import '../styles/Title.scss'
import '../styles/About.scss'
import img_title from '../assets/background-about.png'
import { useContext } from 'react'
import { ValorContext } from '../utils/ContextProvider'
import { AnimationProvider } from '../utils/ContextProvider'

function About() {
    const { openOnglet, valeurs } = useContext(ValorContext)
    const classNameFiabilite = valeurs.onglet_fiabilite ? 'textVisible' : 'textHidden';

    const { animation, animationOn } = useContext(AnimationProvider)
    const classNameAnimationFiabilite = animationOn.animation_fiabilite ? 'textAnimationOn' : 'textAnimationOff';

    const animationClick = (onglet, animationValeur) => {
        openOnglet(onglet)
        animation(animationValeur)
    }

    const AnimationEnd = () => {
        openOnglet(false);
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
                        <button onClick={() => openOnglet('onglet_fiabilite')}  className='boxValor__icone-arrow'></button>
                    </div>{console.log(valeurs)}
                    <div className='boxText'>
                        <p className={`hidden ${classNameFiabilite}`}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
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