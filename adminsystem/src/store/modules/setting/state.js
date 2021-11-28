import { LocalStorageService } from '@/utils/storage';
export const state = {
    language: LocalStorageService.get('language') || 'zh-cn',
};
//# sourceMappingURL=state.js.map