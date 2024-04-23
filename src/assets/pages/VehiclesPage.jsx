import '../scss/VehiclesPage.scss'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import EasyFastServices from '../components/EasyFastServices';
import Footer from '../components/Footer';

function VehiclesPage(){

    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch('/cars.json')
        .then((response)=> response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
    }, [])

    return(
        <>
            <Header></Header>
            <section className="vehicles-page">
                <div className="page-bg">
                    <h2>Our Vehicles</h2>
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