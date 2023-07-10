import logo from '../assets/logo.png'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className='banner'>
            <img src={logo} alt='Logo Kasa' className='banner__logo' />
            
            <nav className='banner__nav'>
                <Link to="/" className='nav__btn nav__btn-accueil'>Accueil</Link>
                <Link to="/About" className='nav__btn nav__btn-apropos'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header