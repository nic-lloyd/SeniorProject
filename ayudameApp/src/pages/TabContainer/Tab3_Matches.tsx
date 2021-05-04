import React, { useState, useEffect } from "react";
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
  informationCircleOutline,
  checkmarkCircle,
  shuffle,
} from "ionicons/icons";

const axios = require("axios");
const sessionId = window.location.pathname.split("/").slice(-1)[0];

//Create base configuration for API calls
let REST = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-type": "application/json" },
});

const Matches: React.FC = () => {
  const [checked, setChecked] = useState(false);
  let [matchesData, setMatchesData] = useState<any[]>([]);

  useEffect(() => {
    async function getMatchesData(sessionId: any) {
      let result;
      try {
        result = await REST.get(`/${sessionId}/matches`);
        // result = result.data
        //   .filter((x: any) => x.data !== "")
        //   .map((x: any) => x.data);
        setMatchesData(
          result.data.sort((a: any, b: any) => (b.votes > a.votes ? 1 : -1))
        );
      } catch (e) {
        console.log("ERROR");
        console.log(e);
      }
    }

    getMatchesData(sessionId);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Matches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {matchesData.map((match: any) => {
          return (
            <div>
              <IonItem>
                <IonThumbnail slot="start">
                  <img src={match.image_url} />
                </IonThumbnail>
                <IonLabel>
                  <h2>{match.name}</h2>
                  <p>Votes: {match.votes}</p>
                </IonLabel>
                <IonButton
                  onClick={() => window.open(match.url, "_blank")}
                  slot="end"
                >
                  <IonIcon
                    icon={informationCircleOutline}
                    size="small"
                  ></IonIcon>
                </IonButton>
              </IonItem>

              <IonItemDivider></IonItemDivider>
            </div>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default Matches;
