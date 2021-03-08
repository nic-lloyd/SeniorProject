import React, { useState } from "react";
import {
  IonContent,
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonCard,
} from "@ionic/react";

const JoinSession: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <IonModal isOpen={showModal}>
        <IonCard>
          <IonItem className="ion-text-center ion-margin-top">
            <IonLabel position="floating">Session Code</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton expand="block">Join Session</IonButton>
        </IonCard>
        <IonButton expand="block" onClick={() => setShowModal(false)}>
          Close
        </IonButton>
      </IonModal>
      <IonButton expand="block" onClick={() => setShowModal(true)}>
        Join Session
      </IonButton>
    </div>
  );
};

export default JoinSession;
