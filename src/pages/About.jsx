import '../styles/Title.scss'
import '../styles/About.scss'
import img_title from '../assets/background-about.png'
import ToggleSlide from '../components/Animation'

function About() {
    return (
        <div>
            <div className='boxTitle boxTitleAbout'>
                <img src={img_title} alt='Grandes roches au bord de mer' className='boxTitle__image boxTitleAbout__image'/>
            </div>
            
            <div className='valeurs'>
                <ToggleSlide titleDropdawn="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</ToggleSlide>

                <ToggleSlide titleDropdawn="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </ToggleSlide>

                <ToggleSlide titleDropdawn="Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
                </ToggleSlide>

                <ToggleSlide titleDropdawn="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.    
                </ToggleSlide>
            </div>
        </div>
        )
    }
    
    export default About