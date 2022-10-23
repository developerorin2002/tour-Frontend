import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Hotel = ({hotel}) => {
    const {hotel_id,image,hotel_name,totalexpense,introduction,sit,duration} = hotel;

    return (
        <div className='col-lg-4'>
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
                    <Link className="hotel-link btn btn-primary" to={`/booking/${hotel_id}`}>Book Hotel</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Hotel;