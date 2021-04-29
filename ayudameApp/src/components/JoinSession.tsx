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

const axios = require("axios");
let REST = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-type": "application/json" },
});

async function checkSession(sessionId: any) {
  if (sessionId === "" || sessionId === undefined) {
    console.log(`Session ID Undefined: ${sessionId}`);
    alert("Please enter a valid Session ID.");
    return;
  } else {
    const sessions = await REST.get(`/sessions/${sessionId}`);
    console.log(sessions);
    if (sessions.data === null) {
      console.log(`Invalid Session ID: ${sessionId}`);
      alert(`Invalid Session ID: ${sessionId}`);
    } else {
      let targetURL = `http://${window.location.host}/tabs/tab1/${sessionId}`;
      window.location.assign(targetURL);
    }
  }
}

const JoinSession: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [sessionId, setSessionId] = useState<string>();

  return (
    <div>
      <IonModal isOpen={showModal}>
        <IonCard>
          <IonItem className="ion-text-center ion-margin-top">
            <IonLabel position="floating">Session Code</IonLabel>
            <IonInput
              value={sessionId}
              onIonChange={(e) => setSessionId(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={() => checkSession(sessionId)}>
            Join Session
          </IonButton>
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
