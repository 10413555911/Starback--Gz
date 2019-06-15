import request from '../utils/request'

export default {
    //获取列表
    getList: (data) => request.get("/api/task/list", data),
    //登录接口
    userLogin: (data) => request.post("/api/login", data)
}
