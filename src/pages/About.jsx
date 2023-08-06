import '../styles/Title.scss'
import '../styles/About.scss'
import img_title from '../assets/background-about.png'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'

function About() {
    return (
        <div>
            <Banner imageUrl={img_title} imageAlt='Grandes roches au bord de mer' boxClassName="boxTitle boxTitleAbout" imageClassName='boxTitle__image boxTitleAbout__image'/>
            <div className='valeurs'>
                <Collapse titleDropdawn="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Collapse>

                <Collapse titleDropdawn="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>

                <Collapse titleDropdawn="Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.    
                </Collapse>

                <Collapse titleDropdawn="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.    
                </Collapse>
            </div>
        </div>
        )
    }
    
    export default About