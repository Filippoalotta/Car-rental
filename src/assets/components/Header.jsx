import { useState, useEffect } from 'react'
import logo from '../images/car-rental-logo.png';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';

function Header(){

    const [hambOpen, setHambOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect( ()=> {
        if(menuOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });


    const handleClick = ()=> {
        setHambOpen(!hambOpen);
        setMenuOpen(!menuOpen);
    }

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0
        })
    }

    return(
        <>
            <header className={hambOpen ? 'open-hamb' : ''}>
                <Link to={'/'} onClick={scrollToTop}>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <nav className='nav-menu'>
                    <ul className='nav-menu-ul'>
                        <li>
                            <Link to={'/'} onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} onClick={scrollToTop}>About</Link>
                        </li>
                        <li>
                            <Link to={'/vehicles'} onClick={scrollToTop}>Vehicles</Link>
                        </li>
                        <li>
                            <Link to={'/team'} onClick={scrollToTop}>Team</Link>
                        </li>
                        <li>
                            <Link to={'/contacts'} onClick={scrollToTop}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="buttons-container">
                    <a href="#">Sign In</a>
                    <button className='button2'>Sign Up</button>
                </div>
                <nav className="nav-hamb" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
                <nav className={`${'nav-mb'} ${menuOpen ? 'open-nav' : ''}`}>
                    <ul>
                    <li>
                            <Link to={'/'} onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} onClick={scrollToTop}>About</Link>
                        </li>
                        <li>
                            <Link to={'/vehicles'} onClick={scrollToTop}>Vehicles</Link>
                        </li>
                        <li>
                            <Link to={'/team'} onClick={scrollToTop}>Team</Link>
                        </li>
                        <li>
                            <Link to={'/contacts'} onClick={scrollToTop}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;