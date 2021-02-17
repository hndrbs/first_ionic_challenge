import React from 'react'
import { ellipsisVertical } from 'ionicons/icons'
import { IonLabel, IonItem, IonIcon as Icon, IonGrid, IonRow, IonCol } from '@ionic/react'
import styled from 'styled-components'

type ListItemProps = {
  name: string,
  age: number,
  address: string,
  photo: string,
  gender: string,
  location: string
}

const MyItem = styled(IonItem)`
  display: flex;
  justify-content: space-between;
  width: 106vw;
  margin-top: 1px;
  padding-right: 20px;
  border-width: 10px;
  
  ion-col > ion-label {
    margin-bottom: 5px;
    align-items: center;
  }
`
const ImgItem = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 4px;
  margin-left: -8px;
`
const IonIcon = styled(Icon)`
  position: absolute;
  right: 3px;
`

const ListItem: React.FC<ListItemProps> = ({name, age, photo, gender, location, address}) => {
  return (
    <MyItem 
      color="dark"
    >
    <IonGrid>
      <IonRow>
      <ImgItem src={photo} alt={name + " picture"}/>
      <IonCol>
        <IonLabel>{name}</IonLabel>
        <IonLabel>{age}</IonLabel>
        <IonLabel>{gender}</IonLabel>
      </IonCol>
      <IonCol>
        <IonLabel>{address}</IonLabel>
        <IonLabel>{location}</IonLabel>
      </IonCol>
      </IonRow>
    </IonGrid>
      {/* icon action option */}
      <IonIcon
        icon={ellipsisVertical}
      ></IonIcon>
    </MyItem>
  )
}

export default ListItem