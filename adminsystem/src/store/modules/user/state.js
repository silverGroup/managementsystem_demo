import { LocalStorageService } from '@/utils/storage';
export const state = {
    token: LocalStorageService.get('systemtoken') || '',
    name: "",
    avatar: ""
};
//# sourceMappingURL=state.js.map