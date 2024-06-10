<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <!-- Navbar content -->
    </nav>

    <table class="table table-hover">
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="bg-light text-dark" @click="viewMessage">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from '../router'; // Make sure to import the router

export default {
  name: 'HelloWorld',
  methods: {
    viewMessage() {
      console.log('rrr');
      router.push({ path: '/about' });
    }
  },
  data() {
    return {
      items: ['message1', 'message2', 'message3', 'message4', 'message5'] // Example data, replace with your actual data
    };
  }
};
</script>
