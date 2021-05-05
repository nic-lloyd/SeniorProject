import React from "react";
import { IonButton, IonIcon, IonContent, IonPage } from '@ionic/react';
import { star } from 'ionicons/icons';

const Settings: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
        <IonButton color="success" expand="full">Change Display Name</IonButton>
        <IonButton color="success" expand="full">FAQ</IonButton>
        <IonButton color="success" expand="full">Filters</IonButton>
        <IonButton expand="full" color="danger">End Session</IonButton>

      </IonContent>
      </IonPage>
    )
  };
  
  export default Settings;