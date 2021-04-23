import { IonList, IonCard, IonItem, IonLabel, IonInput, IonItemDivider, IonRange, IonRadio, IonListHeader, IonRadioGroup, IonRow, IonCol, IonButton, IonToast, IonCheckbox } from "@ionic/react";
import { useState } from "react";
import { SetupData} from "./types";

const SetupInputs: React.FC = () => {

  const [location, setLocation] = useState<string>();
  const [rangeValue, setRangeValue] = useState(0);
  const [price, setPrice] = useState<string>();
  const [checked, setChecked] = useState(false);

  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);




  //check for input errors
  //if none, send form inputs to submitInfo({inputs})
  function checkInfo(location: string | undefined, price: string | undefined, range: number | undefined, openNow: boolean) {
    if (location === undefined || location === '' || price === undefined || range === undefined) {
      console.log('input error');
      return;
    }
    submitInfo({ location, price, range, openNow})
  }

  //return JSON object 
  async function submitInfo(setupData: SetupData) {

    console.log(setupData);
  }

  return (


    <IonCard>

      {/*Location input */}
      <IonItemDivider>Search Area</IonItemDivider>
      <IonItem>
        <IonInput value={location} placeholder="Enter Location" onIonChange={e => setLocation(e.detail.value!)}></IonInput>
      </IonItem>

      {/*Range input */}
      <IonItemDivider>Range: {rangeValue}</IonItemDivider>
      <IonItem>
        <IonRange min={5} max={25} pin={true} value={rangeValue} onIonChange={e => setRangeValue(e.detail.value as number)} />
      </IonItem>

      <IonItem>
        <IonLabel>Is Open Now: </IonLabel>
        <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
      </IonItem>

      {/*Price input */}
      <IonList>
        <IonRadioGroup value={price} onIonChange={e => setPrice(e.detail.value)}>
          <IonListHeader>
            <IonLabel>
              Max Price:
            </IonLabel>
          </IonListHeader>
          <IonRow>

            {/*Price Radio Buttons */}
            <IonItem>
              <IonLabel>$</IonLabel>
              <IonRadio value="1" />
            </IonItem>
            <IonItem>
              <IonLabel>$$</IonLabel>
              <IonRadio value="2" />
            </IonItem>
            <IonItem>
              <IonLabel>$$$</IonLabel>
              <IonRadio value="3" />
            </IonItem>
            <IonItem>
              <IonLabel>$$$$</IonLabel>
              <IonRadio value="4" />
            </IonItem>
          </IonRow>
        </IonRadioGroup>
      </IonList>


      {/*New Code button*/}
      <IonButton onClick={() => setShowToast1(true)} expand="block">Get new code</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Code Generated"
        duration={1000}
      />
      {/*Button */}
      <IonButton onClick={() => checkInfo(location, price, rangeValue, checked)} expand="block">Save</IonButton>

    </IonCard>
  );
};



export default SetupInputs;