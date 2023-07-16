import logo from '../assets/logo.png'
import logoSmall from '../assets/logoSmall.png'
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom'

function Header(){
    return (
        <header className='banner'>
            <img src={logo} alt='Logo Kasa' className='banner__logo' />
            
            <nav className='banner__nav'>
                <NavLink to="/" className={({ isActive }) => 
                      (isActive ? "nav__btn nav__btn-accueil active-link" : "nav__btn nav__btn-accueil inactive-link")} >Accueil</NavLink>
                <NavLink to="/About" className={({ isActive }) => 
                      (isActive ? "nav__btn nav__btn-accueil active-link" : "nav__btn nav__btn-accueil inactive-link")}>À Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header