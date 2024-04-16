import '../scss/Card.scss'

function Card({id, brand, model, year, installments, image}){
    return(
        <>
            <div className="card" key={id}>
                <img src={image} alt={model} />
                <h4>{brand + ' ' + model}</h4>
                <span className='small-text'>{year}</span>
                <div className='card-content'>
                    <h4>${installments}<span className='small-text'> / month</span></h4>
                    <a href="#home"><button className='card-button'>Rent Now</button></a>
                </div>
            </div>
        </>
    )
}

export default Card;