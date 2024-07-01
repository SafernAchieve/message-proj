<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <!-- Navbar content -->
    </nav>

    <div class="wider-container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="mb-3">
            <h5 class="card-title">
              <!-- Title goes here -->
            </h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
            <div>
              <!-- Additional elements can go here -->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table class="table project-list-table table-nowrap align-middle table-borderless">
              <thead>
                <tr>
                  <th scope="col" class="ps-4">
                    <div class="form-check font-size-16">
                      <input type="checkbox" class="form-check-input" id="contact-user-check" />
                      <label class="form-check-label" for="contact-user-check"></label>
                    </div>
                  </th>
                  <th scope="col">Recipients</th>
                  <th scope="col">Message</th>
                  <th scope="col">Date Sent</th>
                  <th scope="col" class="actions-column">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                  <td class="ps-4 item-hover">
                    <div class="form-check font-size-16">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        :id="'contact-check-' + contact.id"
                      />
                      <label :for="'contact-check-' + contact.id" class="form-check-label"></label>
                    </div>
                  </td>
                  <td class="item-hover">
                    <a>{{ contact.name }}</a>
                  </td>
                  <td class="item-hover">
                    <a>{{ contact.message }}</a>
                  </td>
                  <td>
                    <a>{{ contact.date }}</a>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <a href="javascript:void(0);" @click="viewMessage(contact.message)" data-bs-toggle="tooltip" data-bs-placement="top" title="View" class="px-2 text-primary"><i class="bx bx-pencil font-size-18"></i></a>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:void(0);" @click="deleteEmailField(index)" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" class="px-2 text-danger"><i class="bx bx-trash-alt font-size-18"></i></a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Pagination section -->
      <div class="row">
        <div class="col-sm-6">
          <div>
            <ul class="pagination mb-sm-0">
              <li class="page-item disabled">
                <a href="#/" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
              </li>
              <li class="page-item active"><a href="#/" class="page-link">1</a></li>
              <li class="page-item"><a href="#/" class="page-link">2</a></li>
              <li class="page-item"><a href="#/" class="page-link">3</a></li>
              <li class="page-item"><a href="#/" class="page-link">4</a></li>
              <li class="page-item"><a href="#/" class="page-link">5</a></li>
              <li class="page-item">
                <a href="#/" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'HelloWorld',
  
  methods: {
    viewMessage(message) {
      console.log('Message:', message);
      router.push({ path: '/createmessage', query: { message } });
    },
    deleteEmailField(index) {
      this.contacts.splice(index, 1);
    }
  },
  
  data() {
    return {
      contacts: [
        { id: 1, name: 'Simon Ryles', email: 'simon@example.com', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2024-06-01' },
        { id: 2, name: 'Marion Walker', email: 'marion@example.com', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', date: '2024-06-02' },
        { id: 3, name: 'John Doe', email: 'john@example.com', message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', date: '2024-06-03' },
        { id: 4, name: 'Jane Smith', email: 'jane@example.com', message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', date: '2024-06-04' },
        // Add more contacts as needed
      ]
    };
  }
};
</script>

<style scoped>
body {
  margin-top: 20px;
  background-color: #eee;
}
.wider-container {
  max-width: 100%; /* Set the max-width to 100% to take full width of the screen */
  padding: 0 30px; /* Add some padding to the sides */
}
.project-list-table {
  border-collapse: separate;
  border-spacing: 0 8px; /* Decrease the space between rows */
  width: 100%; /* Ensure the table takes up the full width of the container */
}
.project-list-table tr {
  background-color: #fff;
}
.table-nowrap td, .table-nowrap th {
  white-space: nowrap;
}
.table-borderless>:not(caption)>*>* {
  border-bottom-width: 0;
}
.table>:not(caption)>*>* {
  padding: 0.5rem 1rem; /* Decrease padding for smaller rows */
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.me-2 {
  margin-right: 0.5rem!important;
}
a {
  color: #3b76e1;
  text-decoration: none;
}
.badge-soft-danger {
  color: #f56e6e !important;
  background-color: rgba(245, 110, 110, 0.1);
}
.badge-soft-success {
  color: #63ad6f !important;
  background-color: rgba(99, 173, 111, 0.1);
}
.badge-soft-primary {
  color: #3b76e1 !important;
  background-color: rgba(59, 118, 225, 0.1);
}
.badge-soft-info {
  color: #57c9eb !important;
  background-color: rgba(87, 201, 235, 0.1);
}
.avatar-title {
  align-items: center;
  background-color: #3b76e1;
  color: #fff;
  display: flex;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  width: 100%;
}
.bg-soft-primary {
  background-color: rgba(59, 118, 225, 0.25)!important;
}
.pagination {
  justify-content: flex-start; /* Align pagination links to the left */
}
.item-hover:hover{
  background-color: #e0e0e0;
}
</style>
