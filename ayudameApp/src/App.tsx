import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Main_page from "./pages/TabContainer/Tab1_Main_page";
import Land from "./pages/Landing page/Landing page";
import Matches from "./pages/Matches";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import TabRoot from "./pages/TabContainer/TabRoot";
import Testing from './pages/Testing';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" component={TabRoot} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/setup">
          <Setup />
        </Route>
        <Route exact path="/land">
          <Land />
        </Route>
        <Route exact path="/testing">
          <Testing />
        </Route>
        <Route exact path="/matches">
          <Matches />
        </Route>
        {/* <Route path="/" render={() => <Redirect to="/tabs" />} exact={true} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
