<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <!-- Navbar content -->
      </nav>
  
      <table class="table table-hover">
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="bg-light text-dark text-center" @click="viewMessage(item)">
              {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import router from '../router'
  export default {
    name: 'HelloWorld',
  
    methods: {
      viewMessage(item) {
        console.log('Item:', item);
        router.push({ path: '/createmessage', query: { message: item } });
      }
    },
    data() {
      return {
        items: ['message1', 'message2', 'message3', 'message4', 'message5'] // Example data, replace with your actual data
      };
    }
  };
  </script>
  