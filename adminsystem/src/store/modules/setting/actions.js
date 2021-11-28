import { settingActionTypes } from './action-types';
// import {SettingState} from './state'
import { SettingMutationTypes } from './mutation-types';
import { LocalStorageService } from '@/utils/storage';
export const actions = {
    async [settingActionTypes.ACTION_LANGUAGE]({ commit }, language) {
        LocalStorageService.set('language', language);
        commit(SettingMutationTypes.SET_LANGUAGE, language);
    }
};
//# sourceMappingURL=actions.js.map