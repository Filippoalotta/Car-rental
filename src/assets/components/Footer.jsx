import '../scss/Footer.scss'
import LogoFooter from '../images/logo-footer-icon.png'
import phoneIcon from '../images/phone-icon.png'
import emailIcon from '../images/email-icon.png'

function Footer(){

    const arrow = '>';

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        })
    }

    return(
        <>
            <footer>
                <div className="footer-content">
                    <div className="contacts-logo-container">
                        <img src={LogoFooter} alt="logo car rental" onClick={scrollToTop} />
                        <div className="contact-content">
                            <img src={phoneIcon} alt="phone icon" />
                            <span>+00 1234 567 89</span>
                        </div>
                        <div className="contact-content">
                            <img src={emailIcon} alt="phone icon" />
                            <span>carrental@grmmail.com</span>
                        </div>
                    </div>
                    <ul className="menu-footer-container">
                        <li className='li-title'>Download</li>
                        <a href="#"><li>Android App</li></a>
                        <a href="#"><li>Ios App</li></a>
                        <a href="#"><li>Desktop</li></a>
                        <a href="#"><li>Projects</li></a>
                    </ul>
                    <ul className="menu-footer-container">
                        <li className='li-title'>About Us</li>
                        <a href="#"><li>Press Center</li></a>
                        <a href="#"><li>Our Story</li></a>
                        <a href="#"><li>Career</li></a>
                        <a href="#"><li>Reporting</li></a>
                    </ul>
                    <ul className="menu-footer-container">
                        <li className='li-title'>Subscription</li>
                        <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quasi.</p>
                        </li>
                        <li>
                            <input type="text" placeholder='Email Address' />
                            <button className='button-footer'>{arrow}</button>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    <span>Copyright ©2024 Car Rental. All Rights Reserved.</span>
                    <span>Web Development by Filippo Alotta</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;