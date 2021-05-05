import React from 'react';

import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonTitle, IonToolbar, IonHeader, IonPage, IonProgressBar, IonContent, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import "./backgroundStyle.css"

const Friends: React.FC = () => {
  return (
    <IonPage className="background2">
      <div>
            <div className= "Header">
              <h1>Fr<em>iends</em></h1>
            </div>
        
        <IonContent>
          <IonHeader>Want to Add a Friend? Click 'Share' for Session Code</IonHeader>
          <IonButton expand="full">Share</IonButton>
        </IonContent>
      </div>
    </IonPage>
  );
};


export default Friends;