import React from 'react';
//import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
//import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
//import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';
import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
/*const Menubar: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

export default Menubar;*/




export const ToolbarExample: React.FC = () => (
  <div>
  <IonToolbar>
    <IonTitle>Title Only</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>Back Button</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonTitle size="small">Small Title above a Default Title</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Default Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="solid">
        <IonIcon slot="start" icon={personCircle} />
        Contact
      </IonButton>
    </IonButtons>
    <IonTitle>Solid Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton fill="solid" color="secondary">
        Help
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="outline">
        <IonIcon slot="start" icon={star} />
        Star
      </IonButton>
    </IonButtons>
    <IonTitle>Outline Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton color="danger" fill="outline">
        Edit
        <IonIcon slot="end" icon={create} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>Account</IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">Edit</IonButton>
    </IonButtons>
    <IonTitle>Text Only Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Left side menu toggle</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Right side menu toggle</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="Search Favorites" />
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton slot="center" href="/home">
        All
      </IonButton>
      <IonButton slot="secondary" href="/setup">
        Favorites
    </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Secondary Toolbar</IonTitle>
  </IonToolbar>

  <IonToolbar color="dark">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Dark Toolbar</IonTitle>
  </IonToolbar>
  </div>
);

/*import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';
import Friends from "../pages/Friends";
import Matches from "../pages/Matches";
import Settings from "../pages/Settings";

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Friends}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Matches}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;*/