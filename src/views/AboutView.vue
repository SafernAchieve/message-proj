<template>
 <table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>john.doe@example.com</td>
      <td>
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <!-- More rows here -->
  </tbody>
</table>

</template>

<script>
export default {
  data() {
    return {
      emails: [],
      names: [],
    };
  },
  methods: {
    addEmailField() {
      this.emails.push('');
      this.names.push('');
    },
    deleteEmailField(index) {
      this.emails.splice(index, 1);
      this.names.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px; /* Adjust the max-width as needed */
}
.FormColor {
  background-color: burlywood;
}
.fields {
  background-color: rgb(241, 237, 221);
}
.button-style{
margin-left: 9px;
background-color: darkgray;
}


</style>
