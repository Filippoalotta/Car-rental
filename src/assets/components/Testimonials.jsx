import '../scss/Testimonials.scss'
import Stars from '../images/stars-icon.png'
import Testimonial from '../images/testimonial-img.jpg'
import Comma from '../images/comma-icon.png'

function Testimonials(){

    return(
        <>
            <section className="testimonials-container">
                <h3>Reviewed by Clients</h3>
                <h2>What They Say?</h2>
                <div className='testimonials-cards-container'>
                    <div className="testimonials-card">
                        <div className="testimonials-images-container">
                            <img src={Comma} alt="Comma image" />
                            <img src={Stars} alt="Stars icon" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum, eligendi placeat dolor aut laboriosam sequi pariatur doloremque harum nostrum?</p>
                        <div className="testimonials-content">
                            <img src={Testimonial} alt="Testimonial image" className='testimonials-img'/>
                            <div>
                                <h4>Alessio G.</h4>
                                <span>Palermo</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-card">
                        <div className="testimonials-images-container">
                            <img src={Comma} alt="Comma image" />
                            <img src={Stars} alt="Stars icon" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum, eligendi placeat dolor aut laboriosam sequi pariatur doloremque harum nostrum?</p>
                        <div className="testimonials-content-container">
                            <div className="testimonials-content">
                                <img src={Testimonial} alt="Testimonial image" className='testimonials-img'/>
                                <div>
                                    <h4>Roberto L.</h4>
                                    <span>Roma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-card">
                        <div className="testimonials-images-container">
                            <img src={Comma} alt="Comma image" />
                            <img src={Stars} alt="Stars icon" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum, eligendi placeat dolor aut laboriosam sequi pariatur doloremque harum nostrum?</p>
                        <div className="testimonials-content-container">
                            <div className="testimonials-content">
                                <img src={Testimonial} alt="Testimonial image" className='testimonials-img'/>
                                <div>
                                    <h4>Anna M.</h4>
                                    <span>Milano</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;