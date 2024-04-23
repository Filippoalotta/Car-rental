import '../scss/AboutPage.scss'
import Header from '../components/Header';
import OurStory from '../images/our-story.jpg'
import EasyFastService from '../components/EasyFastServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

function AboutPage(){

    return(
        <>
            <Header></Header>
            <div className='about-page'>
                <div className="page-bg">
                    <h2>Our Team</h2>
                </div>
                <div className="our-story">
                    <img src={OurStory} alt="Why choose us image" />
                    <div className="our-story-content">
                        <h4>Our Story</h4>
                        <h2>Between Past and Future</h2>
                        <p>Through challenges and triumphs, our car rental story has unfolded. With passion and dedication, we&apos;ve transformed travelers&apos; needs into unique experiences. Looking ahead, we&apos;ll continue to drive towards new horizons, carrying our commitment to excellence with us.</p>
                    </div>
                </div>
                <EasyFastService></EasyFastService>
                <WhyChooseUs></WhyChooseUs>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AboutPage;