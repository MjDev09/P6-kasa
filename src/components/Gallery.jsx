import { useState, useContext, useEffect } from "react"
import '../styles/Gallery.scss'
import housing from '../data/housing.json'
import { Link } from 'react-router-dom'
import { LogementContext } from "../utils/context"


function Gallery(){

    const logements = housing
    const [cards, setCards] = useState(logements)
    
    const { dataLogement, changeDataLogement } = useContext(LogementContext)

    function handleClick (id, title, cover, pictures, description, host, rating, location, equipments, tags) {
        changeDataLogement (id, title, cover, pictures, description, host, rating, location, equipments, tags)
        }
 

    return (
        <div className="gallery">
            {cards.map(({id, title, cover, pictures, description,host, rating, location, equipments, tags}, index ) => (
                <Link to={{ pathname: `/FicheLogement/${id}`}} onClick={() => handleClick({id, title, cover, pictures, description, host, rating, location, equipments, tags})}  key={`${id}-${index}`}  >
                    <figure key={id} className="figureGallery">
                        <img key={`${id}-image`} src={cover} alt={title} className="figureGallery__image"/>
                        <figcaption key={`${id}-titre`} className="figureGallery__titre">{title}</figcaption>
                </figure>
                </Link>
            ))}
        </div>
            )
}

export default Gallery