import { Link } from 'react-router-dom';
import '../styles/Error.scss'; 


function Error() {
    return (
        <div >
            <main className="mainError">
                <h1 className="mainError__title">404</h1>
                <h2 className="mainError__subTitle">Oups! La Page que vous demandez n'existe pas</h2>
                <Link to="/" className='mainError__linkError' >Retourner sur la page d'accueil</Link>
            </main>
        </div>
    )
}

export default Error