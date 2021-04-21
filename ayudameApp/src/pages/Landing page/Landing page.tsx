import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './landing files/LandingHeader';
import PlaceToVisit from './landing files/PlaceToVisit';
import { IonPage } from '@ionic/react';
import "./Landingpage.css";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/land.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
const Land: React.FC = () => { 
  const classes = useStyles();
  return (
    <IonPage>
    <div className={classes.root}>
      
      <CssBaseline />
      <Header />
      <PlaceToVisit /><div className = "row">

        <div className ="create_session">
        <img src="https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png" width="100%"></img>

        </div>

        <div className = "join_session">
        <img src="https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png" width="100%"></img>
        

        </div>
      </div>
      
    </div>
    </IonPage>
  )
  };
export default Land;