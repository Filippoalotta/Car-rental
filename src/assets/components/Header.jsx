import { useState } from 'react'
import logo from '../images/car-rental-logo.png';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';

function Header(){

    const [hambOpen, setHambOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = ()=> {
        setHambOpen(!hambOpen);
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <header className={hambOpen ? 'open-hamb' : ''}>
                <img src={logo} alt="logo" className='logo' />
                <nav className='nav-menu'>
                    <ul className='nav-menu-ul'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/vehicles'}>Vehicles</Link>
                        </li>
                        <li>
                            <Link to={'/team'}>Team</Link>
                        </li>
                        <li>
                            <Link to={'/contacts'}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="buttons-container">
                    <a href="#">Sign In</a>
                    <button className='button2'>Register</button>
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
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/vehicles'}>Vehicles</Link>
                        </li>
                        <li>
                            <Link to={'/team'}>Team</Link>
                        </li>
                        <li>
                            <Link to={'/contacts'}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;