import logo from '../assets/logo.png'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <div className='banner'>
            <h1 className='banner__title'>
                <img src={logo} alt='Logo Kasa' className='banner__logo' />
                {/*tester si la police est montserra et si oui, remplacer image par lettre et ne rajouter que l'image de la maison */}
            </h1> 
            <nav className='banner__nav'>
                <Link to="/" className='nav__btn'>Accueil</Link>
                <Link to="/a_propos" className='nav__btn'>A Propos</Link>
            </nav>
        </div>
    )
}