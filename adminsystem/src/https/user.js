import axiosRequest from './axios';
export const loginRequest = async (userInfo) => {
    let result = await axiosRequest.post({
        url: 'Login.login',
        data: userInfo
    });
    return result;
};
//# sourceMappingURL=user.js.map