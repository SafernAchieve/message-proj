<template>
  <div>
    <table class="table table-bordered table-sm"> <!-- Adjusted class to table-sm for smaller size -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row" class="">{{ index + 1 }}</th>
          <td>
            <input v-model="user.name" type="text" class="form-control field-style" />
          </td>
          <td>
            <input v-model="user.email" type="email" class="form-control field-style" />
          </td>
          <td class="d-flex ">
            <button type="button" @click.prevent="addRow(index)" class="btn btn-outline-success me-2 bi bi-plus-square-fill"></button>
            <button type="button" @click.prevent="deleteEmailField(index)" class="btn btn-outline-danger bi bi-trash"></button>
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
      users: [
        { name: 'test1', email: 'test1@gmail.com' },
        { name: 'test2', email: 'test2@gmail.com' },
        { name: 'test3', email: 'test3@gmail.com' }
      ]
    };
  },
  methods: {
    addRow(index) {
      this.users.splice(index + 1, 0, { name: '', email: '' });
    },
    deleteEmailField(index) {
      this.users.splice(index, 1);
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
  background-color: #e2dfb8;;
}
</style>
