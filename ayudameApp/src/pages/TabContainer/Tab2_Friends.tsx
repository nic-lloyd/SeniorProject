import React, { useState } from "react";
import Header from "../../components/Header";
import "./Tab2_Friends.css";
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
  IonModal,
  IonIcon,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import { clipboardOutline } from "ionicons/icons";

const sessionId = window.location.pathname.split("/").slice(-1)[0];

function copy() {
  navigator.clipboard.writeText(sessionId);
}

const Friends: React.FC = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <IonPage>
      <div>
        <div className="Header">
          <h1>
            Sh<em>are</em>
          </h1>
        </div>

        <div className="sub-header">
          <h1>Copy your session code to send to friends!</h1>
        </div>

        <IonAlert
          isOpen={showCode}
          onDidDismiss={() => setShowCode(false)}
          message="Session ID Copied to Clipboard"
          buttons={["Great!"]}
        />

        <div className="ion-text-center">
          <h1>
            <strong id="session">{sessionId}</strong>
          </h1>
          <IonButton
            color="success"
            onClick={() => {
              copy();
              setShowCode(true);
            }}
          >
            <IonIcon icon={clipboardOutline}></IonIcon>
          </IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default Friends;
