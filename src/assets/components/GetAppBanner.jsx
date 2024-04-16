import '../scss/GetAppBanner.scss'
import Google from '../images/google-play-image.png'
import Apple from '../images/apple-image.png'
import Iphone from '../images/iphone-img.png'

function GetAppBanner(){

    return(
        <>
            <section className="get-app-banner-container">
                <div className="get-app-banner-content">
                    <h2>Download Car Rental App for <span className="green-span">FREE</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="store-container">
                        <img src={Google} alt="Google play store image" />
                        <img src={Apple} alt="Apple store image" />
                    </div>
                </div>
                <img src={Iphone} alt="Iphone image" className='iphone-img'/>
            </section>
        </>
    )
}

export default GetAppBanner;