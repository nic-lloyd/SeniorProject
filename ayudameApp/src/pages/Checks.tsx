import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

const checkboxList = [
  { val: '$', isChecked: true },
  { val: '$$', isChecked: false },
  { val: '$$$', isChecked: false }
];

export const Checks: React.FC = () => {

  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Start your session!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>First question</IonItemDivider>
          <IonItem>
            <IonLabel>Question Here: {JSON.stringify(checked)}</IonLabel>
            <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>
          <IonItemDivider>Price</IonItemDivider>

          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Checks;