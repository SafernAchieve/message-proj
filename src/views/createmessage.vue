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


   





        
            








            <div class="col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label">Notification Desc:</label><br/>
              <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
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
              <select class="form-select fields" id="formSelectSm" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
          
            
          




            <div class="col-md-6">    
            
            </div>

          
       




            <!-- <div class="col-md-6">
          
              <div v-for="(condition, index) in conditions" :key="index">
                <input type="text" class="form-control fields input-field" id="exampleFormControlInput1" placeholder="Enter Condition" multiple> 
              </div>
              <button type="button" class=" button-style"  @click="addConditions">+</button>
              <button type="button" class=" button-style"  @click="deleteConditions(index)">-</button>
            </div> -->
            <hr class="hr hr-blurry" />
            <div class="row Component-style">
              <div class="col-md-6">
                <conditions/>
              </div>
              <div class="col-md-6">
                <addEmail/>
              </div>
            </div>

            <hr class="hr hr-blurry" />


<!-- 
            <div class="col-md-6">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" class="form-control fields" id="exampleFormControlInput1" placeholder="example name" multiple>
            </div>

            <div class="col-md-6">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control fields" id="exampleFormControlInput1" placeholder="name@example.com" multiple>
            </div> -->
<!-- 
            
            <div class="col-md-6">
              <div v-for="(name, index) in names" :key="index">
                <input type="text" class="form-control fields input-field" v-model="names[index]" placeholder="name@example" multiple>  
              </div>
            </div>



            <div class="col-md-6">
              <div v-for="(email, index) in emails" :key="index">
                <input type="email" class="form-control fields input-field" v-model="emails[index]" placeholder="name@example.com" multiple>  
              </div>
              <button type="button" class=" button-style"  @click="addEmailField">+</button>
              <button type="button" class=" button-style"  @click="deleteEmailField(index)">-</button>
            </div>
 -->


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
import addEmail from './addEmail.vue'
import Conditions from './Conditions.vue'

export default {
  name: 'createmessage',
  components:{
    addEmail,
    Conditions
  },
  data() {
    return {
      emails: [],
      names: [],
      conditions:[],
    };
  },
  methods: {
    addEmailField() {
    
      this.emails.splice(index + 1, 0, '');
      this.names.splice(index + 1, 0, '');
    },
    deleteEmailField(index) {
      this.emails.splice(index, 1);
      this.names.splice(index, 1);
    },
    addConditions() {
      this.conditions.push('');
      },
      deleteConditions(index) {
      this.conditions.splice(index, 1);
      
    },
  
  }
}
</script>

<style scoped>
.container {
  max-width: 1100px; /* Adjust the max-width as needed */
}
.FormColor {
  background-color: #deb887;
  color: #3A2F2F;
    
}
.fields {
  background-color: rgb(241, 237, 221);
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
}

.btn-add-input {
  background-color: rgb(127, 187, 255);
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
}
.button-style{

margin-left: 9px;
background-color: rgb(228, 217, 179);
}
.Component-style{
  margin-top: 35px;
}
</style>
