<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu principal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page d'accueil</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="search_book">
        <input type="text" v-model="search" placeholder="Rechercher..."/>
            <label>Rechercher un livre:</label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Accueil',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
<style>

.search_book{
  display: flex;
  flex-direction: column-reverse;
}

</style>