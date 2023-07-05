import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/"/>
                <Route path="/"/>
                {/*créer route en fonction des cartes*/}
                <Route path="/"/>
                <Route path="/"/>
                <Route path="/"/>
                <Route path="/"/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter