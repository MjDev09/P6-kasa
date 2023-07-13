import { useState, useContext } from "react"
import '../styles/Gallery.scss'
import housing from '../data/housing.json'
import { Link } from 'react-router-dom'
import { LogementContext } from "../utils/context"

function Gallery(){
    const logements = housing
    const [cards, setCards] = useState(logements)
    
    const { dataLogement, changeDataLogement } = useContext(LogementContext)

    return (
        <div className="gallery">
            {cards.map(({id, title, cover, pictures, description,host, rating, location, equipments, tags, index }) => (
                <Link to={{ pathname: '/FicheLogement'}} onClick={() => changeDataLogement({id, title, cover, pictures, description, host, rating, location, equipments, tags})}  key={`${id}-${index}`}  >
                    <figure key={id}>
                        <img key={`${id}-image`} src={cover} alt={title}/>
                        <figcaption key={`${id}-titre`}>{title}</figcaption>
                </figure>
                </Link>
            ))}
        </div>
            )
}

export default Gallery