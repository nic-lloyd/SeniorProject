import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonTitle, IonToolbar, IonHeader, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
//import './Tab2.css';

const Friends: React.FC = () => {
  return (
    <IonPage>
<IonHeader>
        <IonToolbar>
          <IonTitle>Session Info</IonTitle>
        </IonToolbar>
      </IonHeader>
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Session Member 1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Session Member 2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Session Member 3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Session Member 4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Session Member 5</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
</IonPage>
  );
};


export default Friends;