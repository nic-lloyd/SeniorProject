//import React from "react";
import * as React from 'react';
import { chatbubble, filter, close } from 'ionicons/icons';
import { IonButton, IonFabButton, IonIcon, IonTitle } from "@ionic/react";
import "./Header.css";



const Header: React.FC = () => {
    return (
    <div className= "Header">
        <div className= "header_icon">
            <IonFabButton onClick={() => ('Pressed')}>
                 <IonIcon icon={filter}  size="large" ></IonIcon>
            </IonFabButton>
        </div>
            <IonButton onClick={() => ('Pressed')}> 
                 <IonTitle>Ayudame</IonTitle>
            </IonButton>
        <div className= "header_icon"> 
            <IonFabButton onClick={() => ('Pressed')}> 
                 <IonIcon icon={chatbubble} className= "header_icon" size="large"></IonIcon>
            </IonFabButton>
        </div>
    </div>
    )
}
export default Header;