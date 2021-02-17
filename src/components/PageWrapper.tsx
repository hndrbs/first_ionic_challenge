import React from 'react';
import { 
  IonHeader, 
  IonContent,
  IonToolbar,  
  IonTitle,
  IonButtons,
  IonBackButton,
  IonPage
} from '@ionic/react';

type pageProps =  {
  title: string,
  backHref?: string
}

const PageWrapper: React.FC<pageProps> = ({ children, title, backHref  }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            { backHref && 
              <IonBackButton defaultHref={backHref}></IonBackButton>
            }  
            <IonTitle>{title}</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/*-- Header without a border --*/}
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        { children }
      </IonContent>
    </IonPage>
  )
}

export default PageWrapper;