import React from "react";
import { IonButton, IonIcon, IonContent, IonPage } from '@ionic/react';
import { star } from 'ionicons/icons';

const Settings: React.FC = () => {
    return (
      <IonPage>
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