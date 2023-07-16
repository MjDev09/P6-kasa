import { useContext } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/LogementTitleTags.scss'
import IconStar from './IconStar';
import ToggleSlide from './Animation';

function LogementTitleTags () {
    const { dataLogement, changeDataLogement } = useContext(LogementContext) 

    const tableTags = dataLogement.tags 
    const rating= dataLogement.rating
    const tableEquipments = dataLogement.equipments

    return (
        <div>
            <div className='boxLogementTitleTags'>
                <div className='boxDetail'>
                    <h1 className='boxDetail__title'>{dataLogement.title}</h1> 
                    <p className='boxDetail__location'>{dataLogement.location}
                    </p>
                    <ul className='boxDetail__list'>
                        {tableTags.map((tags,index) => (
                            <li className='boxDetail__puceList' key={`${index}-${tags}`}>{tags}</li>
                        
                        ))}
                    </ul>
                           
                </div>

                <div className='boxHostRate'>
                    <figure className='boxHostRate__figureHost'>
                            <img src={dataLogement.host.picture} alt="" className='boxHostRate__figureHost__picture'/>
                            <figcaption className='boxHostRate__figureHost__name'>{dataLogement.host.name}</figcaption>
                    </figure>   

                    <div className='boxHostRate__rate'>
                        <IconStar rating={rating} />
                        {console.log(rating)}  
                    </div>               
                </div>
            </div> 
            <div className='boxTabInfoLogement'>
                <div className='boxTabInfoLogement__box'>
                    <ToggleSlide titleDropdawn='Description'>{dataLogement.description}
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