import { useState, useContext, useEffect } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/Slideshow.scss'

function Slideshow (){
    const { dataLogement, changeDataLogement } = useContext(LogementContext) 

    const pictures2 = dataLogement.pictures
    console.log(pictures2)
    

    const totalPictures = pictures2.length
    console.log(totalPictures)
    
    const [currentPicture, setCurrentPicture] = useState(0)
    const changePictureMore = () => {
        if (currentPicture < totalPictures - 1){
            setCurrentPicture(currentPicture +1)
        }
        else {
            setCurrentPicture(0)
        }
    }

    const changePictureLess = () => {
        if (currentPicture > 0){
            setCurrentPicture(currentPicture -1)
        }
        else {
            setCurrentPicture(totalPictures - 1)
        }
    }
    console.log(pictures2[currentPicture])
    {/*const [savedData, setSavedData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('ImageData');
        if (savedData) {
            setSavedData(JSON.parse(savedData));
        }
      }, []);
    
    useEffect(() => {
        if (savedData) {

          changeDataLogement(savedData);
        }
      }, [savedData, changeDataLogement]);
      
    useEffect(() => {
        localStorage.setItem('ImageData', JSON.stringify(dataLogement));
      }, [dataLogement]); */} 
        
    
    return(
        <div>
            
           <div className='boxSlide'>
            <img key={`${dataLogement.id}-image`} src={dataLogement.pictures[currentPicture]} alt={dataLogement.title} className='boxSlide__picture'/>
            <button className='boxSlide__btn boxSlide__btn-left' onClick={() => changePictureLess()}>
            </button>
            <button className='boxSlide__btn boxSlide__btn-right' onClick={() => changePictureMore()}></button>
            <p className='boxSlide__numberPicture'></p>
            </div>
    
            </div>
    )
}

export default Slideshow