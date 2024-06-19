<template>
  <div class="container mt-5">
    <div class="FormColor">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <form class="row g-3">
            <div class="col-12">
            </div>
            <div class="col-12">
              <label class="form-label">Notification Name:</label>
              <select class="form-select bac fields" id="formSelectSm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">Evolv Notificatio</option>
                <option value="2">Evolv Psycotherapy Test Notification</option>
              </select>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlTextarea1" class="form-label">Notification Desc:</label><br/>
              <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">Evolv Notificatio</option>
                <option value="2">Evolv Psycotherapy Test Notification</option>
              </select>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlTextarea1" class="form-label">Event Name:</label><br/>
              <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">Psychotherapy</option>
                <option value="2">Psychotherapy</option>
              </select>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlTextarea1" class="form-label">Is Active:</label><br/>
              <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control fields" id="exampleFormControlInput1" placeholder="name@example.com" multiple>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="email" class="form-control fields" id="exampleFormControlInput1" placeholder="example name" multiple>
            </div>
            <div class="col-md-5">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control fields" id="exampleFormControlInput1" placeholder="name@example.com" multiple>
            </div>

            
            <div class="col-md-5">
              <div v-for="(name, index) in names" :key="index">
                <input type="text" class="form-control fields input-field" v-model="names[index]" placeholder="name@example" multiple>  
              
                
              </div>
            
            </div>



            <div class="col-md-5">
              <div v-for="(email, index) in emails" :key="index">
                <input type="email" class="form-control fields input-field" v-model="emails[index]" placeholder="name@example.com" multiple>  
          
            

              </div>
              <button type="button" class=" button-style"  @click="addEmailField">+</button>
              <button type="button" class=" button-style"  @click="deleteEmailField(index)">-</button>
            </div>





           

            <div class="col-12">
              <label for="Subject">Message Subject:</label><br />
              <input type="text" id="Subject" class="form-control fields" value="Evolv Psychotherapy Test Notification">
            </div>
            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label">Message Body</label>
              <textarea class="form-control fields" id="exampleFormControlTextarea1" rows="8"></textarea>
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
