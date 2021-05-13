import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=10';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployees: function() {
    return axios.get(BASEURL);
  }
};

