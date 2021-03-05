import React from "react";

import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star } from 'ionicons/icons';

const Settings: React.FC = () => {
    return (
        <IonContent>
        <IonButton expand="full">Profile</IonButton>
        <IonButton expand="full">FAQ</IonButton>
        <IonButton expand="full">Filters</IonButton>
        <IonButton expand="full">Log Out</IonButton>

      </IonContent>
    )
  };
  
  export default Settings;