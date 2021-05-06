import React, { useState } from 'react';
import Header from "../../components/Header";
import './Tab2_Friends.css';
import {
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonToggle, 
  IonRadio, 
  IonCheckbox, 
  IonItemSliding, 
  IonItemOption, 
  IonItemOptions, 
  IonTitle, 
  IonToolbar, 
  IonHeader, 
  IonPage, 
  IonProgressBar, 
  IonContent, 
  IonButton,
  IonCard,
  IonAlert,
  IonModal } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

const sessionId = window.location.pathname.split("/").slice(-1)[0];

const Friends: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <IonPage>
      <div>
        <div className="Header">
          <h1>Fr<em>iends</em></h1>
        </div>

        <div className="sub-header">
          <h1>Want to Add a Friend? Click 'Share' for Session Code</h1>
        </div>

        <IonAlert
          isOpen={showCode}
          onDidDismiss={() => setShowCode(false)}
          header={'Use This Code To Join!'}
          message={sessionId}
          buttons={['Return']}
        />

        <div className="ion-text-center">
          <IonButton color="success" onClick={() => setShowCode(true)}>Share</IonButton>
        </div>
      </div>
    </IonPage>
  );
};


export default Friends;