import { Redirect, Route } from "react-router-dom";
import { IonApp, IonContent, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Main_page from "./pages/TabContainer/Tab1_Main_page";
import Land from "./pages/Landing page/Landing page"

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
import { home } from "ionicons/icons";
import TabRoot from "./pages/TabContainer/TabRoot";
//import App from './App';

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonContent>
//         <IonPage id="mainpage">
//           <IonTabs>
//             <IonRouterOutlet>
//               <Route path="/main_page" component={Main_page} exact />
//               <Route path="/matches" component={Matches} exact />
//               {/* <Redirect from="/" to="/main_page" /> */}
//             </IonRouterOutlet>
//             <IonTabBar slot="bottom">
//               <IonTabButton tab="matches" href="/matches">
//                 <IonLabel>Matches</IonLabel>
//               </IonTabButton>
//               {/* <IonTabButton tab="matches" href="/matches">
//                 <IonLabel>Settings</IonLabel>
//               </IonTabButton> */}
//             </IonTabBar>
//           </IonTabs>
//         </IonPage>
//         </IonContent>
//     </IonReactRouter>
//     <IonReactRouter>
//       <IonRouterOutlet>
//         <Route exact path="/home">
//           <Home />
//         </Route>
//         {/* <Route exact path="/">
//           <Redirect to="/home" />
//         </Route> */}
//         <Route exact path="/setup">
//           <Setup />
//         </Route>
//         {/* <Route exact path="/main_page">
//           <Main_page />
//         </Route> */}
//         {/* <Route exact path="/matches">
//           <Matches />
//         </Route> */}
//         <Route exact path="/land">
//           <Land />
//         </Route>
//       </IonRouterOutlet>
//     </IonReactRouter>
//   </IonApp>
// );

// export default App;

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
      {/* <Route path="/" render={() => <Redirect to="/tabs" />} exact={true} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;