import axios from 'axios';

const api = axios.create({
    // IP Servidor
    baseURL: 'http://189.126.106.36:7000'
    // Localhost
    //baseURL: 'http://192.168.3.26:7000'

})

export default api;
