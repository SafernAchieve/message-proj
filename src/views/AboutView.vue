<template>
  <div class="about">
  
 

    <div class="container mt-5">
      <div class="FormColor">
      <div class="row justify-content-center ">
  
        <div class="col-md-11">
          <form class="row g-3">
  
            <div class="col-12">
            
            </div>
        
  
            <div class="col-12 ">
              <label class="form-label">Notification Name:</label>
              <select class="form-select bac fields " id="formSelectSm" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">Evolv Notificatio</option>
                  <option value="2">Evolv Psycotherapy Test Notification</option>
             </select>
            </div>
        
  
            <div class="col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label">Notification Desc:</label><br/>
                <select class="form-select fields " id="formSelectSm" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">Evolv Notificatio</option>
                  <option value="2">Evolv Psycotherapy Test Notification</option>
             </select>
            </div>
  
  
            <div class="col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label">Event Name:</label><br/>
                <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">Psychotherapy</option>
                  <option value="2">Psychotherapy</option>
             </select>
            </div>
  
  
  
            <div class="col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label">Is Active:</label><br/>
                <select class="form-select  fields" id="formSelectSm" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">True</option>
                  <option value="2">False</option>
             </select>
            </div>
  
            <div class="col-md-6">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control fields" id="exampleFormControlInput1" placeholder="name@example.com" multiple>
            </div>
  
  
            <div class="col-12">
              <label for="Subject">Message Subject:</label><br />
      <input type="text" id="Subject" class="form-control fields" value="Evolv Psychotherapy Test Notification">
            </div>
  
            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label">Message Body</label>
                <textarea class="form-control fields" :value="message" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
  
          
           
  
            <div class="col-12">
              <button type="button" class="btn btn-success">Send</button>
            </div>
            <div class="col-12">
            
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>











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
