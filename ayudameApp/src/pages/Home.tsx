import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonModal,
  IonInput,
  IonLabel,
  IonItem,
  IonCard,
} from "@ionic/react";
import JoinSession from "../components/JoinSession";
import "./Home.css";



// back end for jthe JOIN SESSION BUTTON
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



const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [sessionId, setSessionId] = useState<string>();

  return (
    // logo at top left
    <div className="wrap">
    <header>
      <div className="logo">Ay<span className="green">udame</span></div>
    </header>

    {/* logo at the center of page and buttons */}
    <div className="content">
        <h1>Welcome to</h1>
        <p>Ay<span className="green">udame</span></p>
        <div className="btn-group">
          <a href="/setup" className="color1">Create Session</a>
          <a onClick={() => setShowModal(true)} className="color2">Join Session</a>  
        </div>
    </div>



    {/* join session pop up card  */}
    <IonModal isOpen={showModal}>
        <IonCard color="medium">
          <IonItem className="ion-text-center ion-margin-top">
            <IonLabel color="dark" position="floating">Session Code</IonLabel>
            <IonInput
              value={sessionId}
              onIonChange={(e) => setSessionId(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton color="dark" expand="block" onClick={() => checkSession(sessionId)}>
            Join Session
          </IonButton>
        </IonCard>
        <IonButton color="dark" expand="block" onClick={() => setShowModal(false)}>
          Close
        </IonButton>
      </IonModal>


  </div>

  );
};

export default Home;


