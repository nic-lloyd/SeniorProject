import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonTitle, IonToolbar, IonHeader, IonPage, IonProgressBar, IonContent } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
//import './Tab2.css';

const Friends: React.FC = () => {
  return (
    <IonPage>
<IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Session Member 1</IonLabel>
      </IonItem>
      <IonProgressBar value={0.5}></IonProgressBar><br />
      <IonItem>
        <IonLabel>Session Member 2</IonLabel>
      </IonItem>
      <IonProgressBar value={0.5}></IonProgressBar><br />
      <IonItem>
        <IonLabel>Session Member 3</IonLabel>
      </IonItem>
      <IonProgressBar value={0.5}></IonProgressBar><br />
      <IonItem>
        <IonLabel>Session Member 4</IonLabel>
      </IonItem>
      <IonProgressBar value={0.5}></IonProgressBar><br />
      <IonItem>
        <IonLabel>Session Member 5</IonLabel>
      </IonItem>
      <IonProgressBar value={0.5}></IonProgressBar><br />

    </IonList>
  </IonContent>
</IonPage>
  );
};


export default Friends;