import React from 'react';
import styled from 'styled-components'
import { IonInput, IonButton } from '@ionic/react';
import PageWrapper from '../components/PageWrapper'

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
    <PageWrapper
      title="Login"
    >
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
    </PageWrapper>
  )
}

export default Home;