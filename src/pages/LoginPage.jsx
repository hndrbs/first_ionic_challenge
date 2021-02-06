import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './LoginPage.css'
import { useHistory } from 'react-router-dom'

export default function LoginPage () {
  const [number, setNumber] = useState()
  const history = useHistory()

  const changeHandler = (e) => {
    setNumber(e.target.value)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    history.push('/user')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form id="login-form" onSubmit={loginHandler}>
          <IonInput
            type="number"
            value={number}
            placeholder="Enter your phone number"
            onIonChange={changeHandler}
            clearInput
          ></IonInput>
          <IonButton type="submit">Login</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};