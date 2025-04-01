<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inicio</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 class="text-3xl font-bold mb-6">Bienvenido</h1>
        <p class="text-lg mb-6">Selecciona una opción para continuar:</p>
        <div class="grid grid-cols-1 gap-4">
          <ion-button expand="block" color="primary" @click="irA('/enfermero')">Enfermeros</ion-button>
          <ion-button expand="block" color="secondary" @click="irA('/medico')">Médicos</ion-button>
          <ion-button expand="block" color="tertiary" @click="irA('/paciente')">Pacientes</ion-button>
          <ion-button expand="block" color="success" @click="irA('/recepcionista')">Recepcionistas</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function irA(ruta: string) {
  router.push(ruta);
}
</script>

<style scoped>
#container {
  text-align: center;
  padding: 20px;
  margin-top: 50px;
}

h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 18px;
  color: #666;
}

.grid {
  display: grid;
  gap: 16px;
}
</style>