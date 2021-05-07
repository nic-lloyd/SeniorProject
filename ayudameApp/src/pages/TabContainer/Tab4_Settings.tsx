import React from "react";
import { IonButton, IonIcon, IonContent, IonPage } from "@ionic/react";
import "./backgroundStyle.css";

const Settings: React.FC = () => {
  return (
    <IonPage color="light">
      <IonContent>
        <IonButton
          expand="full"
          color="dark"
          onClick={() => alert("Stretch goal")}
        >
          Change Display Name
        </IonButton>
        <IonButton
          expand="full"
          color="dark"
          onClick={() => alert("Stretch goal")}
        >
          FAQ
        </IonButton>
        <IonButton
          expand="full"
          color="dark"
          onClick={() => alert("Stretch goal")}
        >
          Filters
        </IonButton>
        <IonButton
          expand="full"
          color="primary"
          onClick={() => {
            let r = window.confirm("Leave Session?");
            if (r) {
              window.location.replace(window.location.origin);
            }
          }}
        >
          Leave Session
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
