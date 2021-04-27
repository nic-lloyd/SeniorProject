import {
  IonList,
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  IonItemDivider,
  IonRange,
  IonRadio,
  IonListHeader,
  IonRadioGroup,
  IonRow,
  IonCol,
  IonButton,
  IonToast,
  IonCheckbox,
} from "@ionic/react";
import { useState } from "react";
import { SetupData } from "./types";

let inputs: SetupData;

const SetupInputs: React.FC = () => {
  const [location, setLocation] = useState<string>();
  const [rangeValue, setRangeValue] = useState(5);
  const [price, setPrice] = useState<string>();
  const [open_now, setOpen_now] = useState(false);

  //check for input errors
  //if none, send form inputs to submitInfo({inputs})
  function checkInfo(
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
    submitInfo({ location, price, range, open_now });
  }

  //return JSON object
  async function submitInfo(setupData: SetupData) {
    let rangeInMeters = parseInt(setupData.range) * 1609.34; //convert range from miles to meters
    setupData.range = rangeInMeters.toString();
    console.log(setupData);
  }

  return (
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
      {/*Button */}
      <IonButton
        onClick={() => {
          checkInfo(location, price, rangeValue.toString(), open_now);
        }}
        expand="block"
      >
        Save
      </IonButton>
    </IonCard>
  );
};

export default SetupInputs;
export { inputs };
