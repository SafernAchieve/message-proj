<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navcolor">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Achieve</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Messaging
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/ViewMessage" class="dropdown-item">View Message</router-link></li>
                <Transition name="fade">
                  <router-link to="/createmessage" class="dropdown-item">Create Message</router-link>
                </Transition>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu Item
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link to="/Message" class="dropdown-item">View Message</router-link></li>
                <li><router-link to="/About" class="dropdown-item">Create Message</router-link></li>
                <router-link to="/About" class="nav-link">Link</router-link>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu Item
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link to="/Message" class="dropdown-item">View Message</router-link></li>
                <li><router-link to="/createmessage" class="dropdown-item">Create Message</router-link></li>
                <router-link to="/About" class="nav-link">Link</router-link>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto px-0">
          <div id="sidebar" class="collapse collapse-horizontal show border-end sidebar-bg">
            <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" @click="viewMessage('Item1')" data-bs-parent="#sidebar"><i class="bi bi-envelope"></i> <span>View message</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" @click="createMessage('Item2')" data-bs-parent="#sidebar"><i class="bi bi-envelope"></i> <span>Create message</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-heart"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-bricks"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-clock"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-archive"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-gear"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-calendar"></i> <span>Item</span></a>
              <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate sidebar-bg" data-bs-parent="#sidebar"><i class="bi bi-envelope"></i> <span>Item</span></a>
            </div>
          </div>
        </div>
        <main class="col ps-md-2 pt-2">
          <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
          <div class="row">
            <div class="col-12">
              <transition name="fade">
                <router-view/>
              </transition>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    viewMessage(message) {
      this.$router.push({ path: '/about' });
    },
    viewMessage(item) {
      this.$router.push({ path: '/ViewMessage' });
    },
    createMessage(item) {
      this.$router.push({ path: '/createmessage' });
    },
  }
};
</script>

<style scoped>
/* Transition for fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Navbar background color */
.navcolor {
  background-color: #F5F5F5;
}

/* Form background color */
.formbg {
  background-color: rgb(241, 237, 221);
}

/* Sidebar background color */
.sidebar-bg {
  background-color: #FAFAFA;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Hover effect for sidebar */
#sidebar-nav .list-group-item:hover {
  background-color: #e0e0e0; /* Change to your desired hover color */
}

/* Hover effect for navbar */
.navbar-nav .nav-link:hover,
.navbar-nav .dropdown-item:hover {
  background-color: #e0e0e0; /* Change to your desired hover color */
}

/* Hover effect for navbar brand */
.navbar-brand:hover {
  background-color: #e0e0e0; /* Change to your desired hover color */
}

/* Hover effect for navbar toggler */
.navbar-toggler:hover {
  background-color: #e0e0e0; /* Change to your desired hover color */
}
</style>

