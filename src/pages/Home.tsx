import React from 'react';
import styled from 'styled-components'
import { 
  IonHeader, 
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/react';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50%;
  text-align: center;
  width: 90%;
  margin-left: 5%;

  ion-input {
    margin-bottom: 5px;
    border-bottom: 1px solid #3880ff;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
const Home: React.FC = () => {

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/*-- Header without a border --*/}
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Item className="col">
          <h5>Please login first</h5>
          <IonInput 
            type="number"
            placeholder="Enter your phone number here"
          />
          <IonInput 
            type="password"
            placeholder="Enter your password here"
          />
          <div className="row">
            <IonButton>Login</IonButton>
          </div>
        </Item>
      </IonContent>
    </>
  )
}

export default Home;