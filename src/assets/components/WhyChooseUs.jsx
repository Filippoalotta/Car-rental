import '../scss/WhyChooseUs.scss'
import whyChooseUs from '../images/why-choose-us-img.png'

function WhyChooseUs() {

    return(
        <>
        <section className="why-choose-us-container">
            <div className="why-choose-us-content">
                <h4>Why Choose Us</h4>
                <h2>Choose, Save, Drive</h2>
                <p>With a wide selection of high-quality vehicles, competitive rates, and impeccable customer service, we are committed to ensuring that every journey is a success. Our dedication to convenience and customer satisfaction sets us apart from the competition.</p>
                <button className='button2'>Learn More</button>
            </div>
            <img src={whyChooseUs} alt="Why choose us image" />
        </section>
        </>
    )
}

export default WhyChooseUs;