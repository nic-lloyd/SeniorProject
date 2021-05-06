import React from "react";
import Header from "../../components/Header";
import Cardswipe from "../../components/Cardswipe";
import { IonPage } from "@ionic/react";


const Main_page: React.FC = () => {
    return (
    <IonPage className="background">
      <div>
          <Header />
          <Cardswipe />
      </div>
    </IonPage>
    );
};
export default Main_page;