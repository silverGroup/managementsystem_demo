const UrlDist = {
    Login: {
        dologin: '/admin/get'
    }
};
const getUrl = (biz, UrlName) => {
    try {
        const bizKeys = Object.keys(UrlDist);
        if (bizKeys.indexOf(biz) < 0) {
            throw new Error('biz not in UrlDist');
        }
        let hostname = UrlDist[biz][UrlName];
        if (!hostname) {
            throw new Error('urlname not in UrlDist');
        }
        return hostname;
    }
    catch (error) {
        console.error(error);
        return '';
    }
};
export default getUrl;
//# sourceMappingURL=api.js.map