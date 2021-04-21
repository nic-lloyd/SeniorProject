import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { ellipse, settings, heart, people, home } from 'ionicons/icons';
import Main_page from './Tab1_Main_page';
import Friends from './Tab2_Friends';
import Matches from './Tab3_Matches';
import Settings from './Tab4_Settings';
import './TabRoot.css';




const TabRoot: React.FC = () => (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/tab1" component={Main_page} exact={true} />
        <Route path="/tabs/tab2" component={Friends} exact={true}/>
        <Route path="/tabs/tab3" component={Matches} exact={true}/>
        <Route path="/tabs/tab4" component={Settings}exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/tab1" />} exact={true} />
        {/* <Route path="/" render={() => <Redirect to="/tabs/tab1" />} exact={true} /> */}
      </IonRouterOutlet>
      <IonTabBar  slot="bottom" color="dark">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={people} />
          <IonLabel>Friends</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={heart} />
          <IonLabel>Matches</IonLabel>
        </IonTabButton>
        <IonTabButton  tab="tab4" href="/tabs/tab4">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
);

export default TabRoot;