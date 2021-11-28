import { UserMutationTypes } from './mutation-types';
export const mutations = {
    [UserMutationTypes.SET_TOKEN](state, token) {
        state.token = token;
    },
    [UserMutationTypes.SET_NAME](state, name) {
        state.name = name;
    },
    [UserMutationTypes.SET_AVATAR](state, avatar) {
        state.avatar = avatar;
    }
};
//# sourceMappingURL=mutations.js.map