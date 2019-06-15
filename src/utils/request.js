import axios from 'axios'
import router from '../router/index'
//把axios换成一个新的 继续封装
const request = axios.create(
    {
        // baseURL: 'http://10.1.9.178:3000'
    }
);
// 访问之前的拦截器
request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem('token')
        }
    }
}, (error) => {
    return Promise.reject(error)
})
//
request.interceptors.response.use((response) => {
    return response
}, (error) => {
    const response = error.response;
    const status = response.status
    if (status > 400) {
        switch (status) {
            case 401://未登录
                router.push('/login');
                break;
        }
    }
    return Promise.reject(error)
}
)
//抛出get 和post
export default {
    get(url, data) {
        return request.get(url, {
            params: data
        })
    },
    post(url, data) {
        return request.post(url, data)
    }
}

