<template>
    <div>
      <table class="table table-bordered table-sm"> <!-- Adjusted class to table-sm for smaller size -->
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(condition, index) in conditions" :key="index">
            <th scope="row" class="">{{ index + 1 }}</th>
            <td>
              <input v-model="condition.name" type="text" class="form-control field-style" />
            </td>
            <td>
              <button type="button" @click.prevent="addRow(index)" class="btn btn-outline-success me-2 bi bi-plus-square-fill"></button>
              <button type="button" @click.prevent="deleteRow(index)" class="btn btn-outline-danger bi bi-trash"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        conditions: [
          { name: 'condition1' },
          { name: 'condition2' },
          { name: 'condition3' }
        ]
      };
    },
    methods: {
      addRow(index) {
        this.conditions.splice(index + 1, 0, { name: '' });
      },
      deleteRow(index) {
        this.conditions.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Adjusted style for more compact container */
  .table {
    margin-bottom: 0; /* Remove default margin */
  }
  .field-style{
    background-color: rgb(241, 237, 221);
}
.field-style:hover{
    background-color: #e2dfb8;
}
  </style>
  