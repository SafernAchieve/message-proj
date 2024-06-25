<template>
  <div>
    <table class="table table-bordered border-primary">
  
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <input v-model="user.name" type="text" class="form-control" />
          </td>
          <td>
            <input v-model="user.email" type="email" class="form-control" />
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow" class="btn btn-primary">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'test1', email: 'test1@gmail.com' },
        { name: 'test2', email: 'test2@gmail.com' },
        { name: 'test3', email: 'test3@gmail.com' },
        { name: 'test4', email: 'Smith' }
      ]
    };
  },
  methods: {
    addRow() {
      this.users.push({ name: '', email: '' });
    }
  }
};
</script>

<style scoped>
.formColor {
  background-color: rgb(163, 150, 129);
  border-radius: 7px;
  margin-top: 29px;
}
.feildColor {
  background-color: rgb(230, 225, 216);
}
</style>
