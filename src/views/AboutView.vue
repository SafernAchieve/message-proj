<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: this.$route.query.message || 'No message provided'
    };
  },
  watch: {
    '$route.query.message': function(newMessage) {
      this.message = newMessage;
    }
  }
};
</script>
