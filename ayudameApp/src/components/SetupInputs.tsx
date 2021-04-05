import { IonList, IonCard, IonItem, IonLabel, IonInput, IonItemDivider, IonRange, IonRadio, IonListHeader, IonRadioGroup, IonRow, IonCol, IonButton, IonToast } from "@ionic/react";
import { useState } from "react";
import { SetupData, PriceOptions } from "./types";

const SetupInputs: React.FC = () => {

  const [location, setLocation] = useState<string>();
  const [rangeValue, setRangeValue] = useState(0);
  const [price, setPrice] = useState<PriceOptions>();

  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);


  function checkInfo(location: string | undefined, price: PriceOptions | undefined, range: number | undefined) {
    if (location === undefined || location === '' || price === undefined || range === undefined) {
      console.log('error');
      return;
    }
    submitInfo({ location, price, range })
  }

  async function submitInfo(setupData: SetupData) {

    console.log(setupData);
  }

  return (
    <IonCard>
      <IonItemDivider>Search Area</IonItemDivider>
      <IonItem>
        <IonInput value={location} placeholder="Enter Location" onIonChange={e => setLocation(e.detail.value!)}></IonInput>
      </IonItem>

      <IonItemDivider>Range: {rangeValue}</IonItemDivider>
      <IonItem>
        <IonRange min={5} max={25} pin={true} value={rangeValue} onIonChange={e => setRangeValue(e.detail.value as number)} />
      </IonItem>

      <IonList>
        <IonRadioGroup value={price} onIonChange={e => setPrice(e.detail.value)}>
          <IonListHeader>
            <IonLabel>
              Max Price: {price}
            </IonLabel>
          </IonListHeader>
          <IonRow>

            <IonItem>
              <IonLabel>$</IonLabel>
              <IonRadio value="$" />
            </IonItem>

            <IonItem>
              <IonLabel>$$</IonLabel>
              <IonRadio value="$$" />
            </IonItem>

            <IonItem>
              <IonLabel>$$$</IonLabel>
              <IonRadio value="$$$" />
            </IonItem>
          </IonRow>
        </IonRadioGroup>
      </IonList>

      <IonButton onClick={() => setShowToast1(true)} expand="block">Get new code</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Code Generated"
        duration={1000}
      />
      <IonButton onClick={() => checkInfo(location, price, rangeValue)} expand="block">Save</IonButton>

    </IonCard>
  );
};



export default SetupInputs;
