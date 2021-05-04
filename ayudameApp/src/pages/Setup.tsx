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
  IonItemDivider,
  IonRange,
  IonRadio,
  IonListHeader,
  IonRadioGroup,
  IonRow,
  IonCheckbox,
} from "@ionic/react";
import SetupInputs from "../components/SetupInputs";
import { useState } from "react";
import "../theme/variables.css";
import { SetupData } from "../components/types";
const axios = require("axios");

let REST = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Content-type": "application/json" },
});

let sessionId: string;
let inputs: SetupData;

const Setup: React.FC = () => {
  const [location, setLocation] = useState<string>();
  const [rangeValue, setRangeValue] = useState(5);
  const [price, setPrice] = useState<string>();
  const [open_now, setOpen_now] = useState(false);

  sessionId = makeId(7);

  //check for input errors
  //if none, send form inputs to submitInfo({inputs})
  async function checkInfo(
    location: string | undefined,
    price: string | undefined,
    range: string | undefined,
    open_now: boolean
  ) {
    if (location === undefined || location === "") {
      console.log("Invalid Location");
      return false;
    }
    if (price === undefined) {
      price = "1,2,3,4";
    }
    if (range === undefined || parseInt(range) === 0) {
      range = "20000";
    }

    inputs = { location, price, range, open_now };
    await submitInfo({ location, price, range, open_now });
    await findRestaurants();
  }

  //return JSON object
  async function submitInfo(setupData: SetupData) {
    let rangeInMeters = parseInt(setupData.range) * 1609.34; //convert range from miles to meters
    setupData.range = rangeInMeters.toString();
    console.log(setupData);
  }

  async function findRestaurants() {
    inputs.range = milesToMeters(inputs.range); //convert range to meters
    console.log(inputs.range);
    console.log(sessionId);

    let yelpSearch = await REST.get(`/yelp`, {
      params: {
        location: inputs.location,
        range: inputs.range,
        price: inputs.price,
        open_now: inputs.open_now,
      },
    });

    console.log(yelpSearch);
    //make call to /addSession endpoint
    await REST.post(`/addSession?sessionId=${sessionId}`);

    //make call to /:sessionId/addRestaurant iteratively based on result from /yelp
    for (let i = 0; i < yelpSearch.data.businesses.length; i++) {
      try {
        await REST.post(`/${sessionId}/addRestaurant`, {
          data: {
            restaurantId: yelpSearch.data.businesses[i].id,
          },
        });
      } catch (e) {
        console.log(e);
      }
      console.log(yelpSearch.data.businesses[i].id);
    }
  }

  function milesToMeters(range: string): string {
    return (parseInt(range) * 1609.34).toString();
  }

  function makeId(length: number): string {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

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
          <IonCard>
            {/*Location input */}
            <IonItemDivider>Search Area</IonItemDivider>
            <IonItem>
              <IonInput
                value={location}
                placeholder="City, State OR zip code"
                onIonChange={(e) => setLocation(e.detail.value!)}
              ></IonInput>
            </IonItem>

            {/*Range input */}
            <IonItemDivider>Range(miles): {rangeValue}</IonItemDivider>
            <IonItem>
              <IonRange
                min={5}
                max={25}
                pin={true}
                value={rangeValue}
                onIonChange={(e) => setRangeValue(e.detail.value as number)}
              />
            </IonItem>
            <IonItem>
              <IonCheckbox
                checked={open_now}
                onIonChange={(e) => setOpen_now(e.detail.checked)}
              />
              <IonLabel>Open Now</IonLabel>
            </IonItem>

            {/*Price input */}
            <IonList>
              <IonRadioGroup
                value={price}
                onIonChange={(e) => setPrice(e.detail.value)}
              >
                <IonListHeader>
                  <IonLabel>Max Price: {price}</IonLabel>
                </IonListHeader>
                <IonRow>
                  {/*Price Radio Buttons */}
                  <IonItem>
                    <IonLabel>$</IonLabel>
                    <IonRadio value="1" />
                  </IonItem>
                  <IonItem>
                    <IonLabel>$$</IonLabel>
                    <IonRadio value="1,2" />
                  </IonItem>
                  <IonItem>
                    <IonLabel>$$$</IonLabel>
                    <IonRadio value="1,2,3" />
                  </IonItem>
                  <IonItem>
                    <IonLabel>$$$$</IonLabel>
                    <IonRadio value="1,2,3,4" />
                  </IonItem>
                </IonRow>
              </IonRadioGroup>
            </IonList>
          </IonCard>
        </IonItem>
        <IonButton
          className="ion-float-left ion-margin"
          onClick={async () => {
            await checkInfo(location, price, rangeValue.toString(), open_now);
          }}
        >
          Confirm
        </IonButton>
        <IonButton
          className="ion-float-right ion-margin"
          href={`/tabs/tab1/${sessionId}`}
        >
          Find Restaurants
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setup;
export { sessionId };
