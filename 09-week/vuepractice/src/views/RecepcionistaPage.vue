<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Recepcionistas</h1>

    <!-- Formulario para agregar/modificar recepcionistas -->
    <form @submit.prevent="modoEdicion ? modificarRecepcionista() : agregarRecepcionista()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold mb-1">Nombre:</label>
          <input v-model="nuevoRecepcionista.nombre" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Apellido:</label>
          <input v-model="nuevoRecepcionista.apellido" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Correo:</label>
          <input v-model="nuevoRecepcionista.correo" type="email" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Documento:</label>
          <input v-model="nuevoRecepcionista.documento" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Horario Laboral:</label>
          <input v-model="nuevoRecepcionista.horarioLaboral" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Extensión Telefónica:</label>
          <input v-model="nuevoRecepcionista.extensionTelefonica" type="text" class="w-full border p-2 rounded" required />
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        {{ modoEdicion ? 'Modificar Recepcionista' : 'Agregar Recepcionista' }}
      </button>
      <button type="button" @click="cancelarEdicion" v-if="modoEdicion" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancelar
      </button>
    </form>

    <!-- Tabla para mostrar recepcionistas -->
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Horario Laboral</th>
          <th class="border p-2">Extensión Telefónica</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recepcionista, index) in recepcionistas" :key="recepcionista.documento" class="border">
          <td class="border p-2">{{ recepcionista.nombre }}</td>
          <td class="border p-2">{{ recepcionista.apellido }}</td>
          <td class="border p-2">{{ recepcionista.correo }}</td>
          <td class="border p-2">{{ recepcionista.horarioLaboral }}</td>
          <td class="border p-2">{{ recepcionista.extensionTelefonica }}</td>
          <td class="border p-2">
            <button @click="editarRecepcionista(index)" class="bg-yellow-500 text-white px-2 py-1 rounded">Modificar</button>
            <button @click="eliminarRecepcionista(index)" class="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseData from '@/components/BaseData.vue';

export default {
  data() {
    return {
      recepcionistas: BaseData.data().recepcionistas,
      nuevoRecepcionista: {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        horarioLaboral: '',
        extensionTelefonica: ''
      },
      modoEdicion: false,
      indiceEdicion: null
    };
  },
  methods: {
    agregarRecepcionista() {
      this.recepcionistas.push({ ...this.nuevoRecepcionista });
      this.limpiarFormulario();
    },
    editarRecepcionista(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoRecepcionista = { ...this.recepcionistas[index] };
    },
    modificarRecepcionista() {
      this.recepcionistas.splice(this.indiceEdicion, 1, { ...this.nuevoRecepcionista });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarRecepcionista(index) {
      this.recepcionistas.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoRecepcionista = {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        horarioLaboral: '',
        extensionTelefonica: ''
      };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: rgb(7, 26, 196);
  border-radius: 8px;
}
</style>