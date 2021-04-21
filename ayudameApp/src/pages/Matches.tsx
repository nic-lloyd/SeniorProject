import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Matches.css';



const Matches: React.FC = () => {
  return (
<IonPage>
  <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Card</IonTitle>
      </IonToolbar>
    </IonHeader>,
    <IonContent>
      <IonCard href="/home" mode="ios">
        <img className="img" width="50" height="50" src="https://img.mobiscroll.com/demos/card_3.png" />
        
        <IonCardHeader>
          <IonCardTitle>Join Session</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <img className="img" width="50" height="50" src="https://img.mobiscroll.com/demos/card_3.png" />
        
        <IonCardHeader>
          <IonCardTitle>Join Session</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      




  

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>

      
    </IonPage>
    
  );
};
export default Matches;