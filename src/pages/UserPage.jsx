import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonContent } from '@ionic/react'
import { listCircleOutline, addCircleOutline } from 'ionicons/icons'
import { Route } from 'react-router-dom'
import AddVictim from '../components/AddVictim'
import VictimList from '../components/VictimList'


export default function UserPage () {
  return (
    <IonTabs>
    <IonRouterOutlet>
      <Route path="/user/victims" render={() => <VictimList />} exact={true} />
      <Route path="/user/add" render={() => <AddVictim />} exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="VictimList" href="/user/victims">
        <IonIcon icon={listCircleOutline} />
        <IonLabel>Victim List</IonLabel>
      </IonTabButton>
      <IonTabButton tab="AddVictim" href="/user/add">
        <IonIcon icon={addCircleOutline} />
        <IonLabel>Add Victim</IonLabel>
      </IonTabButton>
    </IonTabBar>
    </IonTabs>
  );
};
