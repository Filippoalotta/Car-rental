import '../scss/Testimonials.scss'
import Stars from '../images/stars-icon.png'
import Testimonial from '../images/testimonial-img.jpg'
import test3 from '../images/employee3.jpg'
import test4 from '../images/employee4.jpg'
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
                            <img src={test3} alt="Testimonial image" className='testimonials-img'/>
                            <div>
                                <h4>David G.</h4>
                                <span>Brisbane</span>
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
                                <img src={test4} alt="Testimonial image" className='testimonials-img'/>
                                <div>
                                    <h4>John L.</h4>
                                    <span>Sydney</span>
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
                                    <h4>Ariana M.</h4>
                                    <span>Melbourne</span>
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