import '../styles/Footer.scss'
import logo_white from '../assets/logo_white.png'
import copyright from '../assets/copyright.png'


function Footer(){
    return (
        <footer className='footer'>
            <img src={logo_white} alt='Logo Kasa' className='footer__logo' />
            <p className='footer__copyright'>©2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer