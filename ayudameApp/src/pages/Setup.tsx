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


const Setup: React.FC = () => {
  return (
    <IonPage color="page">
      {/* <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle className="ion-text-center">Ayudame</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <div className= "Header">
         <h1>Ay<span className="green">udame</span></h1>
      </div>
      <IonContent>
        <IonItem>
          <SetupInputs />
        </IonItem>
        <IonButton className="ion-float-right ion-margin" href="./Tabs">
          Find Restaurants
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setup;
