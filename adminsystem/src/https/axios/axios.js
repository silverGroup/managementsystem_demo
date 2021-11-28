/**
 * axios请求封装
 */
import getUrl from './api';
import instance from './intercept';
class AxiosAbstract {
    baseURL = process.env.Vue_APP_BaseUrl;
    headers = {
        ContentType: 'application/json;charset=UTF-8'
    };
    /**
     * 请求封装
     * @param param0
     * @returns Promise
     */
    apiAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }) {
        //url传入：举例：Login.dologin
        const _url = url.split('.');
        url = getUrl(_url[0], _url[1]);
        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method, url, params, data, responseType
            }).then((res) => {
                if (res.status === 200) {
                    if (res.data.success) {
                        resolve({ status: true, message: 'success', data: res.data?.data, origin: res.data });
                    }
                    else {
                        resolve({ status: false, message: res.data?.errorMessage || (url + '请求失败'), data: res.data?.data, origin: res.data });
                    }
                }
            }).catch((error) => {
                const message = error?.data?.message || error?.message || (url + '请求失败');
                reject({ status: false, message, data: null });
            });
        });
    }
    /**
     * GET请求
     */
    getReq({ baseURL, headers, url, params, data, responseType }) {
        return this.apiAxios({
            baseURL, headers, method: "GET", url, data, params, responseType
        });
    }
    /**
     * POST请求
     * @param param0
     * @returns
     */
    postReq({ baseURL, headers, url, params, data, responseType }) {
        return this.apiAxios({
            baseURL, headers, method: "POST", url, data, params, responseType
        });
    }
    /**
     * PUT请求
     */
    putReq({ baseURL, headers, url, params, data, responseType }) {
        return this.apiAxios({
            baseURL, headers, method: "PUT", url, data, params, responseType
        });
    }
    /**
     * DELETE请求
     */
    DELETEReq({ baseURL, headers, url, params, data, responseType }) {
        return this.apiAxios({
            baseURL, headers, method: "DELETE", url, data, params, responseType
        });
    }
}
export default AxiosAbstract;
//# sourceMappingURL=axios.js.map