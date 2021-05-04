import React from 'react';
import Header from "../../components/Header";
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonTitle, IonToolbar, IonHeader, IonPage, IonProgressBar, IonContent, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
//import './Tab2.css';

const Friends: React.FC = () => {
  return (
    <IonPage>
      <div>
        <Header />
        <IonContent>
          <IonHeader>Want to Add a Friend? Click 'Share' for Session Code</IonHeader>
          <IonButton expand="full">Share</IonButton>
        </IonContent>
      </div>
    </IonPage>
  );
};


export default Friends;