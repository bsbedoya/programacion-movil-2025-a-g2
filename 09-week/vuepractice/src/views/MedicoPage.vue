<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Médicos</h1>

    <!-- Formulario para agregar/modificar médicos -->
    <form @submit.prevent="modoEdicion ? modificarMedico() : agregarMedico()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold mb-1">Nombre:</label>
          <input v-model="nuevoMedico.nombre" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Apellido:</label>
          <input v-model="nuevoMedico.apellido" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Correo:</label>
          <input v-model="nuevoMedico.correo" type="email" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Documento:</label>
          <input v-model="nuevoMedico.documento" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Especialidad:</label>
          <input v-model="nuevoMedico.especialidad" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Número de Licencia:</label>
          <input v-model="nuevoMedico.numeroLicencia" type="text" class="w-full border p-2 rounded" required />
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        {{ modoEdicion ? 'Modificar Médico' : 'Agregar Médico' }}
      </button>
      <button type="button" @click="cancelarEdicion" v-if="modoEdicion" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancelar
      </button>
    </form>

    <!-- Tabla para mostrar médicos -->
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Especialidad</th>
          <th class="border p-2">Número de Licencia</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(medico, index) in medicos" :key="medico.documento" class="border">
          <td class="border p-2">{{ medico.nombre }}</td>
          <td class="border p-2">{{ medico.apellido }}</td>
          <td class="border p-2">{{ medico.correo }}</td>
          <td class="border p-2">{{ medico.especialidad }}</td>
          <td class="border p-2">{{ medico.numeroLicencia }}</td>
          <td class="border p-2">
            <button @click="editarMedico(index)" class="bg-yellow-500 text-white px-2 py-1 rounded">Modificar</button>
            <button @click="eliminarMedico(index)" class="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
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
      medicos: BaseData.data().medicos,
      nuevoMedico: {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        especialidad: '',
        numeroLicencia: ''
      },
      modoEdicion: false,
      indiceEdicion: null
    };
  },
  methods: {
    agregarMedico() {
      this.medicos.push({ ...this.nuevoMedico });
      this.limpiarFormulario();
    },
    editarMedico(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoMedico = { ...this.medicos[index] };
    },
    modificarMedico() {
      this.medicos.splice(this.indiceEdicion, 1, { ...this.nuevoMedico });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarMedico(index) {
      this.medicos.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoMedico = {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        especialidad: '',
        numeroLicencia: ''
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