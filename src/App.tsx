import { Redirect, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonHeader, IonContent, IonToolbar, IonTitle, IonGrid, IonRow, IonItem, IonCol, IonLabel, IonInput, IonButton, IonIcon, IonRange, IonItemDivider, IonDatetime, IonToggle, IonSearchbar} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import { calculatorOutline, refreshOutline, checkmarkOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');

  const confirm = () => {};

  const resetInputs = () => {};

  const [checked, setChecked] = useState(false);

  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  const [searchText, setSearchText] = useState('');

  return (<IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Setup/Test</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>

          <IonItem>
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
            </IonItem>
            
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            
            <IonItem>
              <IonLabel position="floating">email</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            
            <IonItem>
              <IonLabel position="floating"><b>Distance</b></IonLabel>
            </IonItem>
            <IonItem>
              <IonRange min={1} max={20} color="secondary">
                <IonLabel slot="start">1mi.</IonLabel>
                <IonLabel slot="end">20mi.</IonLabel>
              </IonRange>
             </IonItem>
            <IonItem>
              <IonLabel>Time</IonLabel>
              <IonDatetime displayFormat="h:mm A" minuteValues="0,15,30,45" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>

            <IonItemDivider>Allow Group Invites</IonItemDivider>
            <IonItem>
              <IonLabel> {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>

          <IonCol>
            <IonButton onClick={resetInputs}>
              <IonIcon slot="start" icon={refreshOutline} />
              Back
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={confirm}>
              <IonIcon slot="start" icon={checkmarkOutline} />
              Confirm
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>

          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>);
};

export default App;
