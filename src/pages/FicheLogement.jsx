import { LogementContext } from '../utils/context';
import Slideshow from '../components/Slideshow'
import LogementTitleTags from '../components/LogementTitleTag';
import { useParams } from 'react-router-dom';
import housing from '../data/housing.json';
import Error from '../components/Erreur'

function FicheLogement () {
    let { logementId } = useParams();
    const logements = housing;
    
    const isIdPresent = logements.some(logement => logement.id === logementId)
    if (!isIdPresent) {
        
        return <Error/>;

    }
    else {
    return (
        <main>
        <Slideshow/>
        <LogementTitleTags/>
        </main>
    )}
}

export default FicheLogement