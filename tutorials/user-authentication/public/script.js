var app = new Vue({
  el: '#app',
  data: {
    showForm: false,
    user: null,
    username: '',
    password: '',
    error: '',
  },
  created() {
    this.getTickets();
  },
  methods: {
    toggleForm() {
      this.error = "";
      this.username = "";
      this.password = "";
      this.showForm = !this.showForm;
    },
    async register() {},
    async login() {},
    async logout() {},
    async getUser() {},

    async getTickets() {
      try {
        let response = await axios.get("/api/tickets");
        this.tickets = response.data;
      } catch (error) {
          console.log(error);
      }
    },

    async addTicket() {
      try {
        let response = await axios.post("/api/tickets", {
          name: this.addedName,
          problem: this.addedProblem
        });
        this.addedName = "";
        this.addedProblem = "";
        this.getTickets();
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTicket(ticket) {
      try {
        let response = await axios.delete("/api/tickets/" + ticket._id);
        this.getTickets();
      } catch (error) {
        console.log(error);
      }
    },

    async register() {
      this.error = "";
      try {
        let response = await axios.post("/api/users", {
          username: this.username,
          password: this.password
        });
        this.user = response.data;
        // close the dialog
        this.toggleForm();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },

  }
});