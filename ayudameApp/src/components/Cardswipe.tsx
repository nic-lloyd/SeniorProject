import { person, informationCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
import "./Cardswipe.css";
import { IonButton, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import axios from 'axios'


function Cardswipe() {

    const [businesses, setBusinesses] = useState<any[]>([]);

    useEffect(() => {
        axios.get('../testYelpData.json')
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
                        style={{ backgroundImage: `url(${business.image_url})`}}
                        className= "card">
                        
                        {/* <h3>{person.name}</h3> */}
                        
                    </div>


                    <div className="container">
                                <div className="info_button">
                                        <IonButton  fill="clear" onClick={() => ('Pressed')} color="light" href= {business.url} target="_blank">
                                            <IonIcon icon={informationCircleOutline}  size="medium" ></IonIcon>
                                        </IonButton>
                                </div>

                        <h3 className="restaraunt_name">{business.name}</h3>
                        <p>-------------------------</p>
                        <p>{business.location?.address1}</p>
                        <p className= "location">{business.location?.city}, {business.location?.state}
                        {business.location?.zip_code} </p>
                                
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