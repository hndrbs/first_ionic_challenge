import React from 'react'
import { 
  IonBackButton, 
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonItemGroup,
  IonRow,
  IonCol
} from '@ionic/react';
import './AddVictim.css'

const color = "transparent"

export default function AddVictim () {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/user/add" />
          </IonButtons>
          <IonTitle>Report another victim</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItemGroup color={color} className="add-form">
          <IonItem color={color}>
            <IonLabel>Name</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          
          <IonItem color={color}>
            <IonLabel>Age</IonLabel>
            <IonInput type="number"></IonInput>
          </IonItem>
          
          <IonItem color={color}>
            <IonLabel>Address</IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>
          
          <IonItem color={color}>
            <IonLabel>Photo</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>

          <IonItem color={color}>
            <IonLabel>Location</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          
          <IonItem color={color}>
            <IonLabel>Gender</IonLabel>
            <IonRadioGroup>
              <IonRow className="ion-justify-content-start">
                <IonCol>
                  <IonItem color={color}>
                    <IonRadio value="male" className="ion-margin-end" />
                    <IonLabel>Male</IonLabel>
                </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem color={color}>
                    <IonRadio value="female" className="ion-margin-end" />
                    <IonLabel>Female</IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>          
            </IonRadioGroup>
          </IonItem>          
          <IonButton expand="full">Add</IonButton>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  )
}