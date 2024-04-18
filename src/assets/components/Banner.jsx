import '../scss/Banner.scss'
import rangeRover from '../images/range-rover.png'

function Banner() {

    const scrollToBook = ()=> {
        window.scrollTo({
            top: 350
        });
    };

    return(
        <>
        <div className="banner-container">
            <div className="banner-content">
                <h1><span className='green-span'>Rent</span> your freedom on four wheels!</h1>
                <p>With our car rental service, turn every journey into an unforgettable adventure. We offer a wide selection of high-quality vehicles to suit every need and budget.</p>
                <div className="buttons-container-banner">
                    <button className='button2' onClick={scrollToBook}>Book Ride</button>
                    <a href="#how-rent"><button className='button1'>Learn More</button></a>
                </div>
            </div>
            <img src={rangeRover} alt="banner image" className='banner-img' />
        </div>
        </>
    )
}

export default Banner;