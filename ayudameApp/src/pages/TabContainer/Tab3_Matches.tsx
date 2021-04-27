import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonAvatar,
  IonThumbnail,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonInput,
  IonCheckbox,
  IonRange,
  IonItemDivider,
} from "@ionic/react";
import {
  closeCircle,
  home,
  star,
  navigate,
  informationCircle,
  checkmarkCircle,
  shuffle,
} from "ionicons/icons";

const Matches: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>Resturant 1</h2>
            <p>Votes:</p>
          </IonLabel>
          <IonButton
            onClick={() =>
              window.open("https://www.yelp.com/developers/", "_blank")
            }
            fill="outline"
            slot="end"
          >
            More Info
          </IonButton>
        </IonItem>

        <IonItemDivider></IonItemDivider>

        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>Resturant 2</h2>
            <p>Votes:</p>
          </IonLabel>
          <IonButton
            onClick={() =>
              window.open("https://www.yelp.com/developers/", "_blank")
            }
            fill="outline"
            slot="end"
          >
            More Info
          </IonButton>
        </IonItem>

        <IonItemDivider></IonItemDivider>

        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>Resturant 3</h2>
            <p>Votes:</p>
          </IonLabel>
          <IonButton
            onClick={() =>
              window.open("https://www.yelp.com/developers/", "_blank")
            }
            fill="outline"
            slot="end"
          >
            More Info
          </IonButton>
        </IonItem>

        <IonItemDivider></IonItemDivider>

        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>Resturant 4</h2>
            <p>Votes:</p>
          </IonLabel>
          <IonButton
            onClick={() =>
              window.open("https://www.yelp.com/developers/", "_blank")
            }
            fill="outline"
            slot="end"
          >
            More Info
          </IonButton>
        </IonItem>

        <IonItemDivider></IonItemDivider>
      </IonContent>
    </IonPage>
  );
};
export default Matches;
