import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonItem,
  IonInput,
  IonCard,
  IonList,
  IonLabel,
  IonButton,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import SetupInputs from "../components/SetupInputs";

import "../theme/variables.css";
import Main_page from "./Main_page";

const Setup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle className="ion-text-center">Ayudame</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <SetupInputs />
        </IonItem>
        <IonButton className="ion-float-right ion-margin" href="./Main_page">
          Find Restaurants
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setup;
