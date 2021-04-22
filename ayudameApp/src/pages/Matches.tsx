import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Matches.css';



const Matches: React.FC = () => {
  return (

  <div className="wrap">
    <header>
      <div className="logo">Ayudame</div>
      <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </div>

    </header>

    <div className="content">
        <h1>Welcome to</h1>
        <p>Ayudame</p>
        <div className="btn-group">
          <a href="#" className="color1">Book Now </a>
          <a href="#">Learn more</a>
        </div>
    </div>

    {/* wave */}
    <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#273036" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,106.7C672,96,768,128,864,165.3C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>


  </div>

      

    
  );
};
export default Matches;