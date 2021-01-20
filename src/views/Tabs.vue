<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <!-- <ion-icon :icon="triangle" /> -->
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="communaute" href="/communaute">
          <ion-label>Communauté</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoris" href="/favoris">
          <ion-label>Mes Favoris</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profil" href="/myprofil">
          <ion-label>Mon Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    }
  }
}
</script>