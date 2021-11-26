import { LocalStorageService } from '@/utils/storage';
export interface SettingState {
    language:string
}

export const state: SettingState = {
    language:LocalStorageService.get('language')||'zh-cn',
}