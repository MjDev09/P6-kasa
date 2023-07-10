import '../styles/Footer.scss'
import logo_white from '../assets/logo_white.png'
import copyright from '../assets/copyright.png'

function Footer(){
    return (
        <footer className='footer'>
            <img src={logo_white} alt='Logo Kasa' className='footer__logo' />
            <img src={copyright} alt='copyright Kasa' className='footer__copyright' />
        </footer>
    )
}

export default Footer