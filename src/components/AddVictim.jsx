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

export default function AddVictim () {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/content/user" />
          </IonButtons>
          <IonTitle>Report another victim</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>addddddddddddd</h1>
      </IonContent>
    </IonPage>
  )
}