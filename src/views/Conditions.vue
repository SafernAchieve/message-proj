<template>
    <div>
      <table class="table table-bordered border-primarysm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(condition, index) in conditions" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <input v-model="condition.name" type="text" class="form-control" />
            </td>
          
          
            <td>
                <button type="button" @click.prevent="addRow(index)"  class=" btn btn-outline-success me-2 bi bi-plus-square-fill"></button>
        <button type="button" @click.prevent="deleteRow(index)" class=" btn btn-outline-danger bi bi-trash"></button>
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
          { name: 'condition1', email: '' },
          { name: 'condition2', email: '' },
          { name: 'condition3', email: '' }
        ]
      };
    },
    methods: {
      addRow(index) {
        this.conditions.splice(index + 1, 0, { name: '', email: '' });
      },
      deleteRow(index) {
        this.conditions.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .mt-3 {
    margin-top: 1rem;
  }
  </style>
  