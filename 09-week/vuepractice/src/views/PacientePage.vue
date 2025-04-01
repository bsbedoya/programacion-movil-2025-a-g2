<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Pacientes</h1>

    <!-- Formulario para agregar/modificar pacientes -->
    <form @submit.prevent="modoEdicion ? modificarPaciente() : agregarPaciente()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold mb-1">Nombre:</label>
          <input v-model="nuevoPaciente.nombre" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Apellido:</label>
          <input v-model="nuevoPaciente.apellido" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Correo:</label>
          <input v-model="nuevoPaciente.correo" type="email" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Documento:</label>
          <input v-model="nuevoPaciente.documento" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Número de Historia Clínica:</label>
          <input v-model="nuevoPaciente.numeroHistoriaClinica" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Tipo de Afiliación:</label>
          <input v-model="nuevoPaciente.tipoAfiliacion" type="text" class="w-full border p-2 rounded" required />
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        {{ modoEdicion ? 'Modificar Paciente' : 'Agregar Paciente' }}
      </button>
      <button type="button" @click="cancelarEdicion" v-if="modoEdicion" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancelar
      </button>
    </form>

    <!-- Tabla para mostrar pacientes -->
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Número de Historia Clínica</th>
          <th class="border p-2">Tipo de Afiliación</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(paciente, index) in pacientes" :key="paciente.documento" class="border">
          <td class="border p-2">{{ paciente.nombre }}</td>
          <td class="border p-2">{{ paciente.apellido }}</td>
          <td class="border p-2">{{ paciente.correo }}</td>
          <td class="border p-2">{{ paciente.numeroHistoriaClinica }}</td>
          <td class="border p-2">{{ paciente.tipoAfiliacion }}</td>
          <td class="border p-2">
            <button @click="editarPaciente(index)" class="bg-yellow-500 text-white px-2 py-1 rounded">Modificar</button>
            <button @click="eliminarPaciente(index)" class="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
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
      pacientes: BaseData.data().pacientes,
      nuevoPaciente: {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        numeroHistoriaClinica: '',
        tipoAfiliacion: ''
      },
      modoEdicion: false,
      indiceEdicion: null
    };
  },
  methods: {
    agregarPaciente() {
      this.pacientes.push({ ...this.nuevoPaciente });
      this.limpiarFormulario();
    },
    editarPaciente(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoPaciente = { ...this.pacientes[index] };
    },
    modificarPaciente() {
      this.pacientes.splice(this.indiceEdicion, 1, { ...this.nuevoPaciente });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarPaciente(index) {
      this.pacientes.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoPaciente = {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        numeroHistoriaClinica: '',
        tipoAfiliacion: ''
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