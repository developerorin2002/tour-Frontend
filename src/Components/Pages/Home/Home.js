import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHotel from '../../HomeHotel/HomeHotel';
import './Home.css'
const Home = () => {
    const hotels = useLoaderData();
    return (
        <div className='home py-4'>
            <div className="container">
                <div className="row py-4 d-flex align-items-center">
                    <div className="col-lg-3 py-4">
                        <h1 className='text-white py-4'>TRAVEL THE WORLD</h1>
                        <p className='text-white py-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className='btn btn-outline-warning'>Booking</button>
                    </div>
                    <div className="col-lg-9 py-4">
                        <div className="container">
                            <div className="row">
                                {
                                    hotels.map(hotel=><HomeHotel key={hotel.category_id} hotel={hotel}></HomeHotel>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;