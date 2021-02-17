import React from 'react';
import { IonList } from '@ionic/react'
import { PageWrapper, ListItem } from '../components'

const ViewData: React.FC = () => {
  return (
    <PageWrapper
      title="Covid19 Victims"
      backHref="/home"
    >
      <IonList>
        <ListItem
          name="hendri"
          age={29}
          location="Jakarta"
          photo="https://www.anime-planet.com/images/characters/dr-akutagawa-122615.jpg"
          address="Jakarta"
          gender="Male"
        />
        <ListItem
          name="hendri"
          age={29}
          location="Jakarta"
          photo="https://www.anime-planet.com/images/characters/dr-akutagawa-122615.jpg"
          address="Jakarta"
          gender="Male"
        />
      </IonList> 
    </PageWrapper>
  )
}

export default ViewData;