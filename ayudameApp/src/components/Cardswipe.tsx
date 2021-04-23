import { informationCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import "./Cardswipe.css";
import { IonButton, IonIcon } from "@ionic/react";
import axios from 'axios'


const Cardswipe: React.FC = () => {

    const [rightSwipe] = useState<any[]>([]);

    const [businesses, setBusinesses] = useState<any[]>([]);

    const swiped = (direction: any, name: any) => {
        console.log("removing: " + name + " " + direction);
        if (direction == "right") {
            rightSwipe.push(name);
            console.log(rightSwipe);
        }
    };

    useEffect(() => {
        axios.get('../data.json')
            .then(res => {
                if (res.status != 200) {
                    console.error("No data")
                }
                console.log(res)
                setBusinesses(res.data.businesses)
            })
    }, []);

    return (
        <div >
            <div className="cardSwipe_cardContainer">
                {businesses.map(business => (
                    <div className="swipe">
                        <TinderCard key={business.name} preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, business.name)}
                        >

                            <div className="card_border">
                                <div
                                    style={{ backgroundImage: `url(${business.image_url})` }}
                                    className="card">
                                </div>
                                <div className="container">
                                    <div className="info_button">
                                        <IonButton fill="clear" onClick={() => ('Pressed')} color="light" href={business.url} target="_blank">
                                            <IonIcon icon={informationCircleOutline} size="medium" ></IonIcon>
                                        </IonButton>
                                    </div>
                                    <h3 className="restaraunt_name">{business.name}</h3>
                                    <hr/>
                                    <p>{business.location?.address1}</p>
                                    <p className="location">{business.location?.city}, {business.location?.state} {business.location?.zip_code}</p>
                                    <p className="open">{business.is_open}</p>
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