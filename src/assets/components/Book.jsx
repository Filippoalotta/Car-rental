import { useState } from 'react';
import '../scss/Book.scss'

function Book() {

    const scrollToBook = ()=> {
        window.scrollTo({
            top: 350
        });
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [carType, setCarType] = useState('');
    const [pickUp, setPickUp] = useState('');
    const [dropOff, setDropOff] = useState('');
    const [completedModal, setCompletedModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleClickOpen = (e)=> {
        setModalOpen(!modalOpen);
        e.preventDefault();
    }

    const handleClickClose = ()=> {
        setModalOpen(false);

        setCarType('');
        setPickUp('');
        setDropOff('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setTelephone('');
        setAddress('');
        setCity('');
        setZipCode('');
    }

    const handleCloseComplOpen = (e)=> {
        e.preventDefault();
        setModalOpen(!modalOpen);
        setCompletedModal(true)
        setTimeout(()=> {
            setCompletedModal(false)
        }, 5000)

        setCarType('');
        setPickUp('');
        setDropOff('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setTelephone('');
        setAddress('');
        setCity('');
        setZipCode('');
    };

    return(
        <>
            <section id='book-form1' className="book-section">
                <form className='book-form'>
                    <div className='input-container'>
                        <label htmlFor="car-type">Select a Car Type</label>
                        <select name="car" id="car" value={carType} required onChange={(e)=> setCarType(e.target.value)}>
                            <option value="Select a Car Type">Select a Car Type</option>
                            <option value="Range Rover Evoque">Range Rover Evoque</option>
                            <option value="Audi RS6">Audi RS6</option>
                            <option value="Mercedes Classe C">Mercedes Classe C</option>
                            <option value="Ford Fiesta">Ford Fiesta</option>
                            <option value="Smart forFour">Smart forFour</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="car-type">Pick-up</label>
                        <select name="car" id="car" value={pickUp} required onChange={(e)=> setPickUp(e.target.value)}>
                            <option value="" disabled>Select a location</option>
                            <option value="Sydney">Sydney</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="Brisbane">Brisbane</option>
                            <option value="Perth">Perth</option>
                            <option value="Canberra">Canberra</option>
                            <option value="Adelaide">Adelaide</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="car-type">Drop-off</label>
                        <select name="car" id="car" value={dropOff} required onChange={(e)=> setDropOff(e.target.value)}>
                            <option value="" disabled>Select a location</option>
                            <option value="Sydney">Sydney</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="Brisbane">Brisbane</option>
                            <option value="Perth">Perth</option>
                            <option value="Canberra">Canberra</option>
                            <option value="Adelaide">Adelaide</option>
                        </select>
                    </div>
                    <div className='button-book'>
                        <input type="submit" value="Search" className='button2' onClick={handleClickOpen} />
                    </div>
                </form>
                <div className={`reservation-completed ${completedModal == true ? 'open-res' : ''}`}>
                    <h3>Booking made successfully!</h3>
                    <div className="hamb" onClick={handleClickClose}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`modal-window ${modalOpen ? 'open' : ''}`}>
                    <div className="head-comp">
                        <h2>Complete Reservation</h2>
                        <div className="hamb" onClick={handleClickClose}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="car-info-container">
                        <div className="car-info">
                            <h3>Location Info</h3>
                            <div className="car-location">
                                <h4>Type Car</h4>
                                <span className='type-car'>{carType}</span>
                            </div>
                            <div className="car-location">
                                <h4>Pick-Up</h4>
                                <span>{pickUp}</span>
                            </div>
                            <div className="car-location">
                                <h4>Drop-Off</h4>
                                <span>{dropOff}</span>
                            </div>
                        </div>
                        <div className="form-modal-container">
                            <h2>Personal Informations</h2>
                            <form onSubmit={handleCloseComplOpen}>
                                <div className="input-modal-container">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" autoComplete='off' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required placeholder='Enter your first name'/>
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id='last-name' autoComplete='off' value={lastName} onChange={(e)=> setLastName(e.target.value)} required placeholder='Enter your last name'/>
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="mail">E-mail</label>
                                    <input type="email" id="mail" autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='Enter your e-mail' />
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="number">Phone Number</label>
                                    <input type="number" id="number" autoComplete='off' value={telephone} onChange={(e)=> setTelephone(e.target.value)} required placeholder='Enter your phone number' />
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' autoComplete='off' value={address} onChange={(e)=> setAddress(e.target.value)} required placeholder='Enter your address'/>
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="city">City</label>
                                    <input type="text" id='city' autoComplete='off' value={city} onChange={(e)=> setCity(e.target.value)} required placeholder='Enter your city'/>
                                </div>
                                <div className="input-modal-container">
                                    <label htmlFor="zip-code">Zip Code</label>
                                    <input type="number" id="zip-code" autoComplete='off' value={zipCode} onChange={(e)=> setZipCode(e.target.value)} required placeholder='Enter your zip code' />
                                </div>
                                <input type="submit" value="Reserve" className='button2' onClick={scrollToBook} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Book;