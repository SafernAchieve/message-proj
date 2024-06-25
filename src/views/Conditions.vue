<template>
    <div>
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(condition, index) in conditions" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>
              <input v-model="condition.name" type="text" class="form-control" />
            </td>
          
          
          </tr>
        </tbody>
      </table>
      <button @click.prevent="addRow" class="">Add</button>
      <button @click.prevent="deleteRow" class="">Delete</button>
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
      addRow() {
        this.conditions.push({ name: '', email: '' });
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
  