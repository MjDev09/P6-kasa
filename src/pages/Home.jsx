import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import img_title from '../assets/background-title.png'

function Home (){
    return (
        <section>
            <Banner title='Chez vous, partout et ailleurs' imageUrl={img_title} imageAlt='Background de titre,Grandes roches au bord de mer' boxClassName="boxTitle" imageClassName='boxTitle__image'/>
            <Gallery/>
        </section>
    )
}

export default Home