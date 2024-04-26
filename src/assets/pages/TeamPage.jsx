import '../scss/TeamPage.scss'
import Header from '../components/Header';
import e1 from '../images/employee1.jpg';
import e2 from '../images/employee2.jpg';
import e3 from '../images/employee3.jpg';
import e4 from '../images/employee4.jpg';
import e5 from '../images/employee5.jpg';
import e6 from '../images/employee6.jpg';
import Footer from '../components/Footer';

function TeamPage(){

    return(
        <>
            <Header></Header>
            <section className='team-page'>
                <div className="page-bg">
                    <h1>Our Team</h1>
                </div>
                <div className="team-container">
                    <div className="team-card">
                        <img src={e1} alt="first employer" />
                        <div className="team-content">
                            <h3>Receptionist</h3>
                            <span>Emily Smith</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={e2} alt="second employer" />
                        <div className="team-content">
                            <h3>Rental Agent</h3>
                            <span>Olivia Wilson</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={e3} alt="first employer" />
                        <div className="team-content">
                            <h3>Sales Manager</h3>
                            <span>Jack Jones</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={e4} alt="first employer" />
                        <div className="team-content">
                            <h3>Maintenance Supervisor</h3>
                            <span>Daniel Harris</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={e5} alt="first employer" />
                        <div className="team-content">
                            <h3>Human Resources Manager</h3>
                            <span>Charlotte Taylor</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={e6} alt="first employer" />
                        <div className="team-content">
                            <h3>Financial Manager</h3>
                            <span>David Walker</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default TeamPage;