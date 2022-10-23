import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import './HomeHotel.css'
const HomeHotel = ({hotel}) => {
    const {category_name,place_img} = hotel;
    return (
        <div  className="col-lg-4">
            <Card>
                <Card.Img style={{height:"200px"}} variant="top" src={place_img} />
                <Card.Body>
                    <Card.Title>{category_name}</Card.Title>
                </Card.Body>
                <Card.Body>
                     <Link to={`/allhotels/${category_name}`} className='hotel-link btn btn-primary'> Book Hotel In {category_name}</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeHotel;