import axios from "axios";

export function request(config, success, failure){
    const instance1 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d2be2372abcfc5bf966fdfe/jmyp/",
        timeout: 10000
    });
    instance1(config).then(function (res) {
        success(res.data)
    }).catch(function (err) {
        failure(err)
    })
    const instance2 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d27ed6f9c978750370f4c14/logs/",
        timeout: 10000
    });
    instance2(config).then(function (res) {
        success(res.data)
    }).catch(function (err) {
        failure(err)
    })
}