import '../styles/Title.scss'
import img_title from '../assets/background-title.png'

function Title() {
    return (
        <div className='boxTitle'>
            <img src={img_title} alt='Background de titre,Grandes roches au bord de mer' className='boxTitle__image'/>
            <h1 className='boxTitle__title'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Title