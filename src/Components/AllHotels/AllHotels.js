import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const AllHotels = () => {
    const hotels = useLoaderData();
    return (
        <div className='container'>
            <div className="row gy-2 gx-2">
                
                {
                    hotels.map(hotel=><Hotel key={hotel.hotel_id} hotel={hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default AllHotels;