import React from 'react';
import Transportion from '../Transportation/Transportion';
import './Home.css'

const Home = () => {
   
    const vehicles = [
        {
            id:1,
            title: 'Bike',
            imgUrl: 'https://i.ibb.co/D8VQr3b/Frame.png' ,
            
        },
        {
            id:2,
            title: 'BUS',
            imgUrl: 'https://i.ibb.co/gDXBvGx/Frame-1.png',
           
        },
        {
           id:3,
            title: 'Train',
            imgUrl:'https://i.ibb.co/ScT5KW2/Group.png" alt="Group' ,
            
            
        },
        {
            id:4,
            title: 'Train',
            imgUrl:'https://i.ibb.co/xYRM5dB/Frame-2.png alt="Frame-2',
            

            
        }
    ]
    return (
        
            <div className="home">
            {vehicles.map(vehicle=><Transportion  vehicle={vehicle}></Transportion>)} 
           
        
           
              
               
        </div>
        
    );
};

export default Home;