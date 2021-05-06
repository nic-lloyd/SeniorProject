import React from "react";
import { IonButton, IonIcon, IonContent, IonPage } from '@ionic/react';
import "./backgroundStyle.css"

const Settings: React.FC = () => {
    return (
      <IonPage color="light">
        <IonContent>
        <IonButton expand="full" color="dark">Change Display Name</IonButton>
        <IonButton expand="full" color="dark">FAQ</IonButton>
        <IonButton expand="full" color="dark">Filters</IonButton>
        <IonButton expand="full" color="danger">End Session</IonButton>

      </IonContent>
      </IonPage>
    )
  };
  
  export default Settings;