
import '../styles/LogementTitleTags.scss'


function IconStar({ rating })  {
    const starRating = []
    const starInactive= []
    for (let i = 0; i < rating; i++) {
        starRating.push(<div key={`starActive-${i + 1 }`} className='star starActive'></div>)
    }

    for (let i = 0; i < 5 - rating; i++) {
        starInactive.push(<div key={`starInactive-${i + 1 }`} className='star starInactive'></div>)
    }

    return (
        <div className='box_star'>
            {starRating}
            {starInactive}
        </div>
    
    )
}

export default IconStar