import { useState, useEffect } from "react"
import '../styles/Gallery.scss'
import housing from '../data/housing.json'
function Gallery(){
    const logements = housing
    const [cards, setCards] = useState(logements)

    return (
        <div className="gallery">
            {cards.map(({id, title, cover}) => (
                <figure key={id}>
                    <img key={`${id}-image`} src={cover} alt={title}/>
                    <figcaption key={`${id}-titre`}>{title}</figcaption>
                </figure>
            ))}
        </div>
            )
}

export default Gallery