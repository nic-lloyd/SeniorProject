import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './landing files/LandingHeader';
import PlaceToVisit from './landing files/PlaceToVisit';
import { IonPage } from '@ionic/react';


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
      <PlaceToVisit />
    </div>
    </IonPage>
  )
  };
export default Land;