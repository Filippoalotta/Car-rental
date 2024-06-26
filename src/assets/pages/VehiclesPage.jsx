import '../scss/VehiclesPage.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';
import EasyFastServices from '../components/EasyFastServices';
import Footer from '../components/Footer';

function VehiclesPage(){

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/cars.json')
        .then(response => {
            setData(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(`Error: ${error}`);
        });
    }, []);

    return(
        <>
            <Header></Header>
            <section className="vehicles-page">
                <div className="page-bg">
                    <h1>Our Vehicles</h1>
                </div>
                <div className='vehicles-container'>
                {data ? (
                        data.cars.map(car => (
                            <Card
                                key={car.id}
                                id={car.id}
                                brand={car.brand}
                                model={car.model}
                                year={car.year}
                                installments={car.installments}
                                image={car.image}
                            />
                        ))
                    ) : (
                        <p>The cars are loading...</p>
                    )}
                </div>
            </section>
            <EasyFastServices></EasyFastServices>
            <Footer></Footer>
        </>
    )
}

export default VehiclesPage;