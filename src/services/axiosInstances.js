import axios from 'axios';

// const token = localStorage.getItem('token'); //!Not recommended 

const withTokenInstance = axios.create({
    baseURL: 'https://localhost:5500',
    // headers: {                               //!Not recommended
    //     Authorization: `Bearer ${token}`   //!Not recommended
    //   }                                      //!Not recommended
});


//!!BEST PRACTICE
withTokenInstance.interceptors.request.use(
    request => {
        const token = localStorage.getItem('token') || '';
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    error => Promise.reject(error)

);

export default withTokenInstance;
