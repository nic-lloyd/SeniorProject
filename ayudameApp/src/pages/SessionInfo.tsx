import React from 'react';

import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

const SessionInfo: React.FC = () => {
  return (
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
  );
};
export default SessionInfo;