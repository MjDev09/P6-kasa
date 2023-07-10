import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../styles/body.scss'
import Home from '../pages/Home'
import About from '../pages/About'
import { ValorProvider } from '../utils/ContextProvider'
import { AnimationProvider } from '../utils/ContextProvider'

function AppRouter(){
    return(
        <Router>
            <ValorProvider>
                <AnimationProvider>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/About" element={<About/>}/>
                        {/*créer route en fonction des cartes*/}
                        <Route path="/"/>
                        <Route path="/"/>
                        <Route path="/"/>
                        <Route path="/"/>
                        {/*<Route path="*" element={<Error/>} />*/}
                    </Routes>
                    <Footer/>
                </AnimationProvider>
            </ValorProvider>
        </Router>
    )
}

export default AppRouter