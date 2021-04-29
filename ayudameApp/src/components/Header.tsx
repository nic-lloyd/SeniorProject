//import React from "react";
import * as React from 'react';
import { chatbubble, filter, close } from 'ionicons/icons';
import { IonButton, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import "./Header.css";



const Header: React.FC = () => {
    return (
    <div className= "Header">
        {/* <div className= "header_icon">
            <IonFabButton onClick={() => ('Pressed')}>
                 <IonIcon icon={filter}  size="large" ></IonIcon>
            </IonFabButton>
            
        </div> */}
            
                {/* <IonTitle size="large" color="light">Ay</IonTitle> */}
         
            
                <h1>Ay<em>udame</em></h1>
        
    
    </div>
    )
}
export default Header;