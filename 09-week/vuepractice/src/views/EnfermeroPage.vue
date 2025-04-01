<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Enfermeros</h1>

    <!-- Formulario para agregar/modificar enfermeros -->
    <form @submit.prevent="modoEdicion ? modificarEnfermero() : agregarEnfermero()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold mb-1">Nombre:</label>
          <input v-model="nuevoEnfermero.nombre" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Apellido:</label>
          <input v-model="nuevoEnfermero.apellido" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Correo:</label>
          <input v-model="nuevoEnfermero.correo" type="email" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Documento:</label>
          <input v-model="nuevoEnfermero.documento" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Turno Asignado:</label>
          <input v-model="nuevoEnfermero.turnoAsignado" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block font-bold mb-1">Área de Atención:</label>
          <input v-model="nuevoEnfermero.areaAtencion" type="text" class="w-full border p-2 rounded" required />
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        {{ modoEdicion ? 'Modificar Enfermero' : 'Agregar Enfermero' }}
      </button>
      <button type="button" @click="cancelarEdicion" v-if="modoEdicion" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancelar
      </button>
    </form>

    <!-- Tabla para mostrar enfermeros -->
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Turno Asignado</th>
          <th class="border p-2">Área de Atención</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(enfermero, index) in enfermeros" :key="enfermero.documento" class="border">
          <td class="border p-2">{{ enfermero.nombre }}</td>
          <td class="border p-2">{{ enfermero.apellido }}</td>
          <td class="border p-2">{{ enfermero.correo }}</td>
          <td class="border p-2">{{ enfermero.turnoAsignado }}</td>
          <td class="border p-2">{{ enfermero.areaAtencion }}</td>
          <td class="border p-2">
            <button @click="editarEnfermero(index)" class="bg-yellow-500 text-white px-2 py-1 rounded">Modificar</button>
            <button @click="eliminarEnfermero(index)" class="bg-red-500 text-white px-2 py-1 rounded ml-2">Eliminar</button>
            <button @click="consultarEnfermero(index)" class="bg-green-500 text-white px-2 py-1 rounded ml-2">Consultar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal para consultar enfermero -->
    <div v-if="mostrarConsulta" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">Detalles del Enfermero</h2>
        <p><strong>Nombre:</strong> {{ enfermeroSeleccionado.nombre }}</p>
        <p><strong>Apellido:</strong> {{ enfermeroSeleccionado.apellido }}</p>
        <p><strong>Correo:</strong> {{ enfermeroSeleccionado.correo }}</p>
        <p><strong>Documento:</strong> {{ enfermeroSeleccionado.documento }}</p>
        <p><strong>Turno Asignado:</strong> {{ enfermeroSeleccionado.turnoAsignado }}</p>
        <p><strong>Área de Atención:</strong> {{ enfermeroSeleccionado.areaAtencion }}</p>
        <button @click="cerrarConsulta" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseData from '@/components/BaseData.vue';

export default {
  data() {
    return {
      enfermeros: BaseData.data().enfermeros,
      nuevoEnfermero: {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        turnoAsignado: '',
        areaAtencion: ''
      },
      modoEdicion: false,
      indiceEdicion: null,
      mostrarConsulta: false,
      enfermeroSeleccionado: {}
    };
  },
  methods: {
    agregarEnfermero() {
      this.enfermeros.push({ ...this.nuevoEnfermero });
      this.limpiarFormulario();
    },
    editarEnfermero(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoEnfermero = { ...this.enfermeros[index] };
    },
    modificarEnfermero() {
      this.enfermeros.splice(this.indiceEdicion, 1, { ...this.nuevoEnfermero });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarEnfermero(index) {
      this.enfermeros.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoEnfermero = {
        nombre: '',
        apellido: '',
        correo: '',
        documento: '',
        turnoAsignado: '',
        areaAtencion: ''
      };
    },
    consultarEnfermero(index) {
      this.enfermeroSeleccionado = { ...this.enfermeros[index] };
      this.mostrarConsulta = true;
    },
    cerrarConsulta() {
      this.mostrarConsulta = false;
      this.enfermeroSeleccionado = {};
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

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>