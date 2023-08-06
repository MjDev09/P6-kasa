import { useState, useContext, useEffect } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/Slideshow.scss';
import { useParams } from 'react-router-dom';
import housing from '../data/housing.json';


function Slideshow (){
    let { logementId } = useParams();
    
    const logements = housing;
      
       
    const [currentPicture, setCurrentPicture] = useState(0);
    const [currentLogement, setCurrentLogement] = useState(logements.find((element) => element.id === logementId));
    
    let pictures2 = [] 
    if (currentLogement && currentLogement.pictures) {
        pictures2 = currentLogement.pictures
    } 
    const totalPictures = pictures2.length
                    
    //fonction pour gérer les photos suivantes//
    const changePictureMore = () => {                 
        if (currentPicture < totalPictures - 1){
            setCurrentPicture(currentPicture +1)
        }
        else {
            setCurrentPicture(0)
        }
        }

    //fonction pour gérer les photos précédentes//
    const changePictureLess = () => {
            if (currentPicture > 0){
                setCurrentPicture(currentPicture -1)
            }
            else {
                setCurrentPicture(totalPictures - 1)
            }
        }         
        
        return(
            <div>
            { totalPictures > 1 ? (
            <div className='boxSlide'>
                <img key={`${currentLogement.id}-image`} src={currentLogement.pictures[currentPicture]} alt={currentLogement.title} className='boxSlide__picture'/>
                <button className='boxSlide__btn boxSlide__btn-left' onClick={() => changePictureLess()}>
                </button>
                <button className='boxSlide__btn boxSlide__btn-right' onClick={() => changePictureMore()}></button>
                <p className='boxSlide__numberPicture'>{`${currentPicture + 1}/${totalPictures}`} </p>
                </div>
            ) : (
                <div className='boxSlide'>
                <img key={`${currentLogement.id}-image`} src={currentLogement.pictures[currentPicture]} alt={currentLogement.title} className='boxSlide__picture'/>
                </div>
            )
                }
                </div>
        )
    }


export default Slideshow