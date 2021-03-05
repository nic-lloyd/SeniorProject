//import React from "react";
//import * as React from 'react';
import { person } from "ionicons/icons";
import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import "./Cardswipe.css";


const Cardswipe: React.FC = () => {

    const [people, setPeople] = useState([
        {
        name:"restaraunt 1",
        url:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
        name:"restaraunt 2",
        url:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
        name:"restaraunt 3",
        url:"https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
        name:"restaraunt 4",
        url:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
        name:"restaraunt 5",
        url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
        },
    ]);

    return (
    <div >
        <h1>Test</h1>
        <div className="cardSwipe_cardContainer">
        {people.map(person => (
            <div className="swipe">
            <TinderCard
                key={person.name}
                preventSwipe={['up', 'down']}
            >
                <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className= "card">
                    
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            </div>
        ))}
        </div>
    </div>
    );
}
export default Cardswipe;