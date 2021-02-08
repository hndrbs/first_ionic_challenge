import React from 'react'
import { 
  IonBackButton, 
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem
} from '@ionic/react';

export default function VictimList () {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/user/victims" />
          </IonButtons>
          <IonTitle>Reported Victims by Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>gassssssss</h1>
      </IonContent>
    </IonPage>
  )
}