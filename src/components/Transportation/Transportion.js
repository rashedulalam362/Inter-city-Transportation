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
       <div className="col-md-3 my-3">

      <Card   style={{ width: '17rem' }}>
           
           <Card.Img variant="top" src={imgUrl} />
   
           <Card.Body>
           <Button onClick={() => handleBook(id)} variant="contained" color="primary">click</Button>
           </Card.Body>
         </Card>
   

       </div>
       
    );
};

export default Transportion;