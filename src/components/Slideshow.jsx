import { useState, useContext, useEffect } from 'react';
import { LogementContext } from '../utils/context';
import '../styles/Slideshow.scss'

function Slideshow (){
    const { dataLogement, changeDataLogement } = useContext(LogementContext) 


    const [cart, updateCart] = useState(3)
    
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
            {console.log(cart)}
           <div className='boxSlide'>
            <img key={`${dataLogement.id}-image`} src={dataLogement.cover} alt={dataLogement.title} className='boxSlide__picture'/>
            <button className='boxSlide__btn boxSlide__btn-left'></button>
            <button className='boxSlide__btn boxSlide__btn-right'></button>
            <p className='boxSlide__numberPicture'></p>
            </div>
    
            </div>
    )
}

export default Slideshow