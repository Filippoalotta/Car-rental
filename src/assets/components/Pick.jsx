import { useState, useEffect } from 'react'
import Card from './Card';
import '../scss/Pick.scss'
//import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pick(){

    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch('../src/assets/json/cars.json')
        .then((response)=> response.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch((error) => {
            console.error('Errore durante il caricamento dei dati:', error);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 835,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
        ]
      };

    return(
        <>
        <section className="pick-container">
            <h3>Vehicle Models</h3>
            <h2>Most Popular Vehicles</h2>
            <div className="pick-content">
                <Slider className="custom-slider" {...settings}>
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
                        <p>Loading...</p>
                    )}
                </Slider>
            </div>
        </section>
        </>
    )
}

export default Pick;