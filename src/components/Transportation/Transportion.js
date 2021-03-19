import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Transportion = (props) => {
    console.log(props);
    const {imgUrl,id}=props.vehicle;
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/vehicle/${id}`);
    }
    return (
        // <div>
        //     {/* <h1>this is transportion {vehicle.imgUrl}</h1> */}
        //     <img src={imgUrl} alt=""/>
        //     {props.title}
        // </div>
        <Card   style={{ width: '18rem' }}>
           
        <Card.Img variant="top" src={imgUrl} />

        <Card.Body>
        <Button onClick={() => handleBook(id)} variant="contained" color="primary">click</Button>
        </Card.Body>
      </Card>

    );
};

export default Transportion;