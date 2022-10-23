import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './BookinHotel.css'
import { AuthenticationContext } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';
const BookingHotel = () => {
    const navigate = useNavigate()
   const hotel = useLoaderData();
   const {user} = useContext(AuthenticationContext);
   const {hotel_name ,introduction , image , sit , duration , totalexpense} = hotel;

    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        console.log(event.target);
        const booking = form.booking.value;
        const duration = form.duration.value;
        const time = form.time.value;
        console.log(booking,duration,time);
        

        if(user&&booking&&duration&&time){
            navigate('/thankyou')
        }else{
            toast.error('Please Pick your Date')
        }

        
    }








    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <Card>
                        <Card.Img style={{height:'200px'}} className="w-100" variant="top" src={image}/>
                        <Card.Body>
                            <Card.Title>{hotel_name}</Card.Title>
                            <Card.Text>
                            {introduction}
                            </Card.Text>
                            <Card.Text>
                                <p>Total Sit : {sit}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Total Duration : {duration}</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Total Expense : {totalexpense}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6">
                <Stack className='date-picker' onSubmit={handleBooking} component="form" noValidate spacing={3}>
                    <TextField
                    className='w-100'
                        id="date"
                        name='booking'
                        label="Booking Date"
                        type="date"
                        
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        className='w-100'
                        id="time"
                        label="Time"
                        type="time"
                       
                        name='time'
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                    />
                    <TextField
                        className='w-100'
                        name='duration'
                        id="datetime-local"
                        label="Duration"
                        type="datetime-local"
                       
                        sx={{ width: 250 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                     <button type='submit' className='w-100 picker-btn'>Start Booking</button>
                    </Stack>
                   
                </div>
            </div>
        </div>
    );
};

export default BookingHotel;