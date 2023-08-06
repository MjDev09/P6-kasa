import { useState } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/LogementTitleTags.scss'
import IconStar from './IconStar';
import Collapse from './Collapse';
import housing from '../data/housing.json';
import { useParams } from 'react-router-dom';

function LogementTitleTags () {
    
    let { logementId } = useParams();
    
    const logements = housing;
    
    const [currentLogement, setCurrentLogement] = useState(logements.find((element) => element.id === logementId));
   
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
                    <Collapse titleDropdawn='Description'>{currentLogement.description}
                    </Collapse>
                </div>

                <div className='boxTabInfoLogement__box'>
                    <Collapse titleDropdawn='Équipements'>
                        <ul>
                            {tableEquipments.map((equipment,index) => (
                            <li className='puceListEquipment' key={`${index}-${equipment}`}>{equipment}</li>
                        
                            ))}
                        </ul>
                        
                    </Collapse>
                </div>
            </div>
        </div>       
    )
}

export default LogementTitleTags