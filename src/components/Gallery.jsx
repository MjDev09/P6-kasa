import { useState, useContext, useEffect } from "react"
import '../styles/Gallery.scss'
import housing from '../data/housing.json'
import { Link } from 'react-router-dom'
import { LogementContext } from "../utils/context"
import { useNavigate } from 'react-router-dom';

function Gallery(){

    {/*const [cards1, setCards1] = useState()
    useEffect(() => {
        fetch(`http://localhost:3000/src/data/housing.json`)
             .then((response) => response.json()
             .then(( data ) => setCards1(JSON.parse(data))
             .catch((error) => console.log(error))
         ))
     }, [])
    
    console.log (setCards1) */}
    const logements = housing
    const [cards, setCards] = useState(logements)
    
    const { dataLogement, changeDataLogement } = useContext(LogementContext)

    const tableID = cards.map((house) => house.id)
    
    const navigate = useNavigate()

    function handleClick (id, title, cover, pictures, description, host, rating, location, equipments, tags) {
        if(id !== null && tableID.includes(id)) {
        changeDataLogement (id, title, cover, pictures, description, host, rating, location, equipments, tags)

        localStorage.setItem('logementSelected', JSON.stringify(id, title, cover, pictures, description, host, rating, location, equipments, tags) );
        } 
        else {
        navigate('/*')
        }
    } 

    return (
        <div className="gallery">
            {cards.map(({id, title, cover, pictures, description,host, rating, location, equipments, tags}, index ) => (
                <Link to={{ pathname: '/FicheLogement'}} onClick={() => handleClick({id, title, cover, pictures, description, host, rating, location, equipments, tags})}  key={`${id}-${index}`}  >
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