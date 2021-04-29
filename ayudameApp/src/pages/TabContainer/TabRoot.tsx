import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { ellipse, settings, heart, people, home } from "ionicons/icons";
import Main_page from "./Tab1_Main_page";
import Friends from "./Tab2_Friends";
import Matches from "./Tab3_Matches";
import Settings from "./Tab4_Settings";
import "./TabRoot.css";

const sessionId = window.location.pathname.split("/").slice(-1)[0];
console.log(sessionId);

const TabRoot: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path={`/tabs/tab1/${sessionId}`}
          component={Main_page}
          exact={false}
        />
        <Route
          path={`/tabs/tab2/${sessionId}`}
          component={Friends}
          exact={false}
        />
        <Route
          path={`/tabs/tab3/${sessionId}`}
          component={Matches}
          exact={false}
        />
        <Route
          path={`/tabs/tab4/${sessionId}`}
          component={Settings}
          exact={false}
        />
        {/* <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/tab1" />}
          exact={false}
        /> */}
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="dark">
        <IonTabButton tab="tab1" href={`/tabs/tab1/${sessionId}`}>
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={`/tabs/tab2/${sessionId}`}>
          <IonIcon icon={people} />
          <IonLabel>Friends</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href={`/tabs/tab3/${sessionId}`}>
          <IonIcon icon={heart} />
          <IonLabel>Matches</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href={`/tabs/tab4/${sessionId}`}>
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRoot;
