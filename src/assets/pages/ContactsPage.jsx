import '../scss/ContactsPage.scss'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactsPage(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        setTelephone('');
        setMessage('');
    }

    return(
        <>
            <Header></Header>
            <section className="contacts-page">
                <div className="page-bg">
                    <h1>Contacts</h1>
                </div>
                <div className="contacts-section">
                    <div className="contacts-info-container">
                        <h2>Information</h2>
                        <div className="contacts-info">
                            <div className="info">
                                <h3>Telephone</h3>
                                <span>3345464565</span>
                            </div>
                            <div className="info">
                                <h3>Email</h3>
                                <span>carrental@grmmail.com</span>
                            </div>
                            <div className="info">
                                <h3>Social Media</h3>
                                <a href="#"><span>Instagram</span></a>
                                <a href="#"><span>Whatsapp</span></a>
                                <a href="#"><span>Facebook</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <h2>Connect With Us!</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Insert your first name' autoComplete='off' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required />
                            <input type="text" placeholder='Insert your last name' autoComplete='off' value={lastName} onChange={(e)=> setLastName(e.target.value)} required />
                            <input type="email" placeholder='Insert your email' autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)} required />
                            <input type="text" placeholder='Insert your telephone' autoComplete='off' value={telephone} onChange={(e)=> setTelephone(e.target.value)} required />
                            <textarea placeholder='Insert your message' value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                            <button type='submit' className='button2'>Send Now!</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default ContactsPage;