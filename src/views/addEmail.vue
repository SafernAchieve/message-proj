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
    <button @click.prevent="addRow" class="">Add</button>
    <button @click.prevent="deleteEmailField" class="">Delete</button>
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
    addRow() {
      this.users.push({ name: '', email: '' });
    },
    deleteEmailField(index) {
      this.users.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
