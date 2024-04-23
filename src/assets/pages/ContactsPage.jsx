import '../scss/ContactsPage.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactsPage(){

    return(
        <>
            <Header></Header>
            <section className="contacts-page">
                <div className="page-bg">
                    <h2>Contacts</h2>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default ContactsPage;