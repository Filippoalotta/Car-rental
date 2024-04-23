import '../scss/Card.scss'
import { Link } from 'react-router-dom';

function Card({id, brand, model, year, installments, image}){

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0
        })
    }

    return(
        <>
            <div className="card" key={id}>
                <img src={image} alt={model} />
                <h4>{brand + ' ' + model}</h4>
                <span className='small-text'>{year}</span>
                <div className='card-content'>
                    <h4>${installments}<span className='small-text'> / month</span></h4>
                    <button className='card-button' onClick={scrollToTop}>
                        <Link to={'/'}>Rent Now</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;