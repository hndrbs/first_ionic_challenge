import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react'
import { documentTextOutline, personCircleOutline } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'
import AddVictim from '../components/VictimCard'
import VictimList from '../components/VictimList'


export default function UserPage () {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/user" to="/user/victims" />
        <Route path="/user/victims" render={() => <VictimList />} exact={true} />
        <Route path="/user/add" render={() => <AddVictim />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="VictimList" href="/user/victims">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Victim List</IonLabel>
        </IonTabButton>
        <IonTabButton tab="AddVictim" href="/user/add">
          <IonIcon icon={documentTextOutline} />
          <IonLabel>Add Victim</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
