import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../styles/body.scss'
import Home from '../pages/Home'
import About from '../pages/About'
import Error from './Erreur'
import FicheLogement from '../pages/FicheLogement'
import { LogementContextProvider } from '../utils/context'


function AppRouter(){
    

    return(
        <Router>
            <LogementContextProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/FicheLogement" element={<FicheLogement/>} />
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </LogementContextProvider>
        </Router>
    )
}

export default AppRouter