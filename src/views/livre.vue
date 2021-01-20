<template>
<!-- http://localhost:8100/home/livre pour acceder à cette page (pour le moment tant que home n'est pas fait) -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-title>Livre {{'nom.livre'}}</ion-title> -->
        <ion-title>Livre</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- <ion-title size="large">Livre {{'nom.livre'}}</ion-title> -->
          <ion-title>Livre</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="book page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Livre',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>