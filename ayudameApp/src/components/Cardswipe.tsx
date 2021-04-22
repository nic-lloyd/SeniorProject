import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import "./Cardswipe.css";
import axios from 'axios'
import { bus, business } from "ionicons/icons";

function Cardswipe() {
    const [businesses, setBusinesses] = useState<any[]>([]);

    useEffect(() => {
        axios.get('../data.json')
            .then(res => {
                console.log(res)
                setBusinesses(res.data)
            })
    }, []);


    return (
        <div >
            <div className="cardSwipe_cardContainer">
                {businesses.map(business => (
                    <div className="swipe">
                        <TinderCard key={business.name} preventSwipe={['up', 'down']} >
                            <div className="card_border">
                                <div
                                    style={{ backgroundImage: `url(${business.image_url})` }}
                                    className="card">
                                        <div className="card_info">
                                    <h3 className="restaraunt_name">{business.name}</h3>
                                    <p>{business.location?.address1}</p>
                                    <p className="location">{business.location?.city}, {business.location?.state}
                                        {business.location?.zip_code} </p></div>
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


/* return (
    <div>
        <h1>Restaurants</h1>
        <div className="cardSwipe_cardContainer">
            {businesses.map(business => (

                <div className="swipe">
                    <TinderCard
                        key={business.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${business.image_url})` }}
                            className="card"
                        >
                            <h3>{business.name}</h3>
                        </div>
                    </TinderCard>
                </div>

            ))}
        </div>
    </div>
);
}
export default TinderCards; */



/* {
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
} */