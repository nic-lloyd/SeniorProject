//import React from "react";
//import * as React from 'react';
import { person } from "ionicons/icons";
import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import "./Cardswipe.css";
import {businesses} from "../testYelpData.json";
import {useFetch} from "./hooks";


const Cardswipe: React.FC = () => {

    const [people, setPeople] = useState([
        {
        name:"restaraunt 1",
        image_url:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        // {
        // name:"restaraunt 2",
        // image_url:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        // name:"restaraunt 3",
        // image_url:"https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        // name:"restaraunt 4",
        // image_url:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        // },
        // {
        // name:"restaraunt 5",
        // image_url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
        // },
        {
            "id": "IgbdOtvMhL_wl659vHIZ9A",
            "alias": "lascalas-fire-glassboro-glassboro",
            "name": "LaScala's Fire Glassboro",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/sO6H3P0RuQg5t6xJ1F0ynQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lascalas-fire-glassboro-glassboro?adjust_creative=Pq3NdUG3IeRFkg6TRDI3dA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Pq3NdUG3IeRFkg6TRDI3dA",
            "review_count": 76,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 39.7044130934797,
                "longitude": -75.1131760159391
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "112 Rowan Blvd",
                "address2": null,
                "address3": "",
                "city": "Glassboro",
                "zip_code": "08028",
                "country": "US",
                "state": "NJ",
                "display_address": [
                    "112 Rowan Blvd",
                    "Glassboro, NJ 08028"
                ]
            },
            "phone": "+18568635500",
            "display_phone": "(856) 863-5500",
            "distance": 665.5980031904336
        },
        {
            "id": "AYx_fO1tdHWIqy6jtVXWaA",
            "alias": "el-mariachi-glassboro",
            "name": "El Mariachi",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EXpxysRk4eOdT1tCmLfBUA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/el-mariachi-glassboro?adjust_creative=Pq3NdUG3IeRFkg6TRDI3dA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Pq3NdUG3IeRFkg6TRDI3dA",
            "review_count": 105,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 39.7143885,
                "longitude": -75.1119134
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "512 Delsea Dr N",
                "address2": "",
                "address3": "",
                "city": "Glassboro",
                "zip_code": "08028",
                "country": "US",
                "state": "NJ",
                "display_address": [
                    "512 Delsea Dr N",
                    "Glassboro, NJ 08028"
                ]
            },
            "phone": "+18562435902",
            "display_phone": "(856) 243-5902",
            "distance": 505.7820787201137
        },
        
    
   
    ]);

    return (
    <div >
        <div className="cardSwipe_cardContainer">
        {people.map(person => (
            <div className="swipe">
            <TinderCard key={person.name} preventSwipe={['up', 'down']} >
                
                <div className="card_border">
                    <div 
                        style={{ backgroundImage: `url(${person.image_url})`}}
                        className= "card">
                        
                        {/* <h3>{person.name}</h3> */}
                        
                    </div>


                    <div className="container">
                        <h3 className="restaraunt_name">{person.name}</h3>
                        <p>-------------------------</p>
                        <p>{person.location?.address1}</p>
                        <p className= "location">{person.location?.city}, {person.location?.state}
                        {person.location?.zip_code} </p>
                    </div>
                </div>

            </TinderCard>
            </div>
        ))}
        </div>
    </div>
    );
}
export default Cardswipe;