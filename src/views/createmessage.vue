<template>
  <div class="container mt-5">
    <div class="FormColor">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <form class="row g-3">
            <div class="col-12">
              <legend class="form-group-legend text-center header ">Notification Details</legend>
              <hr class="hr hr-blurry" />
            </div>

            <!-- Grouping the fields together and keeping the two-column layout -->
            <div class="col-12 notification-group">
              <div class="row">
                <div class="col-12">
                  <label class="form-label text-style">Notification Name:</label>
                  <input type="text" id="NotificationName" class="form-control fields" placeholder="Enter Notification Name">
                </div>
                <div class="col-md-6">
                  <label class="form-label text-style">Notification Desc:</label>
                  <input type="text" id="NotificationDesc" class="form-control fields" placeholder="Enter Notification">
                </div>
                <div class="col-md-6">
                  <label class="form-label text-style">Event  Name</label>
                  <input type="text" id="EventName" class="form-control fields" placeholder="Enter Event Name">
                </div>
                <div class="col-md-6">
                  <label class="form-label text-style">Is Active:</label>
                  <select class="form-select fields" id="IsActive" aria-label=".form-select-sm example">
                    <option selected>Open this select menu</option>
                    <option value="1">True</option>
                    <option value="2">False</option>
                  </select>
                </div>
              </div>
            </div>

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

            <div class="col-12">
              <label class="message-text-style" for="MessageSubject  ">Message Subject:</label>
              <input type="text" id="MessageSubject" class="form-control fields" value="Evolv Psychotherapy Test Notification">
            </div>
            <div class="col-12">
              <label for="MessageBody" class="form-label message-text-style">Message Body</label>
              <textarea class="form-control fields" id="MessageBody" rows="8"></textarea>
            </div>
            <div class="col-12">
              <button type="button" class="btn btn-success">Send</button>
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
  components: {
    addEmail,
    Conditions
  },
  data() {
    return {
      emails: [],
      names: [],
      conditions: [],
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
  background-color: #ECF0F1;
  color: #F2EEE8;
}
.fields {
  background-color: rgb(186, 182, 182);
}
.fields:hover {
  background-color: #e2dfb8;
}
.notification-group {
  background-color: #f5f5f5; /* Light gray background */
  border: 1px solid #ccc; /* Border to differentiate */
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
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
.button-style {
  margin-left: 9px;
  background-color: rgb(228, 217, 179);
}
.Component-style {
  margin-top: 35px;
}
.text-style{
  margin-top: 8px;
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
  color:#212121
}
.message-text-style{
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
}
.header{
  font-weight: bold;
}
</style>
