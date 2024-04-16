import '../scss/EasyFastServices.scss'
import chooseCarImg from '../images/choose-car-icon.png'
import customizeImg from '../images/customize-offer-icon.png'
import getKeyImg from '../images/get-key-icon.png'

function EasyFastServices(){

    return(
        <>
        <section id='how-rent' className="easy-fast-container">
            <h3>How can I rent my car?</h3>
            <h2>Quick and Easy!</h2>
            <div className='easy-fast-content'>
                <div className="easy-fast-service">
                    <img src={chooseCarImg} alt="service image" className='service-icon' />
                    <h3>Choose your car</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, veritatis?Ti amo</p>
                </div>
                <div className="easy-fast-service">
                    <img src={customizeImg} alt="service image" className='service-icon' />
                    <h3>Customize your offer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi temporibus quos pariatur?</p>
                </div>
                <div className="easy-fast-service">
                    <img src={getKeyImg} alt="service image" className='service-icon' />
                    <h3>Get your key</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero tenetur maiores.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default EasyFastServices;