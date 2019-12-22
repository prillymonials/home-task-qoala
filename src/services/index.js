import axios from 'axios';

class ApiService {
  getUserList() {
    return axios
      .get('https://randomuser.me/api/?results=10')
      .then(response => response.data.results);
  }
}

export default new ApiService();