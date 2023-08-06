import '../styles/Title.scss'


function Banner({title, imageUrl, imageAlt, boxClassName, imageClassName}) {
    return (
        <div className={boxClassName}>
            <img src={imageUrl} alt={imageAlt} className={imageClassName}/>
            {title && <h1 className='boxTitle__title' >{title}</h1>}
        </div>
    )
}

export default Banner

