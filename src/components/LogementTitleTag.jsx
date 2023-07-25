import { useState } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/LogementTitleTags.scss'
import IconStar from './IconStar';
import ToggleSlide from './Animation';
import housing from '../data/housing.json';
import { useParams } from 'react-router-dom';

function LogementTitleTags () {
    
    let { logementId } = useParams();
    console.log(logementId);
    const logements = housing;
    console.log(logements)
    const [currentLogement, setCurrentLogement] = useState(logements.find((element) => element.id === logementId));
    console.log(currentLogement)
    const tableTags = currentLogement.tags 
    const rating= currentLogement.rating
    const tableEquipments = currentLogement.equipments

    return (
        <div>
            <div className='boxLogementTitleTags'>
                <div className='boxDetail'>
                    <h1 className='boxDetail__title'>{currentLogement.title}</h1> 
                    <p className='boxDetail__location'>{currentLogement.location}
                    </p>
                    <ul className='boxDetail__list'>
                        {tableTags.map((tags,index) => (
                            <li className='boxDetail__puceList' key={`${index}-${tags}`}>{tags}</li>
                        
                        ))}
                    </ul>
                           
                </div>

                <div className='boxHostRate'>
                    <figure className='boxHostRate__figureHost'>
                            <img src={currentLogement.host.picture} alt="" className='boxHostRate__figureHost__picture'/>
                            <figcaption className='boxHostRate__figureHost__name'>{currentLogement.host.name}</figcaption>
                    </figure>   

                    <div className='boxHostRate__rate'>
                        <IconStar rating={rating} /> 
                    </div>               
                </div>
            </div> 
            <div className='boxTabInfoLogement'>
                <div className='boxTabInfoLogement__box'>
                    <ToggleSlide titleDropdawn='Description'>{currentLogement.description}
                    </ToggleSlide>
                </div>

                <div className='boxTabInfoLogement__box'>
                    <ToggleSlide titleDropdawn='Équipements'>
                        <ul>
                            {tableEquipments.map((equipment,index) => (
                            <li className='puceListEquipment' key={`${index}-${equipment}`}>{equipment}</li>
                        
                            ))}
                        </ul>
                        
                    </ToggleSlide>
                </div>
            </div>
        </div>       
    )
}

export default LogementTitleTags