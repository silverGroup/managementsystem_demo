/**
 * 请求生成实例调用
 */
import AxiosAbstract from "./axios";
class Basic extends AxiosAbstract {
    /**
     * get
     */
    get({ url, params }) {
        return this.getReq({ url, params });
    }
    /**
     * post
     */
    post({ url, data }) {
        return this.postReq({ url, data });
    }
}
let instance;
export default (() => {
    if (instance)
        return instance;
    instance = new Basic();
    return instance;
})();
//# sourceMappingURL=index.js.map