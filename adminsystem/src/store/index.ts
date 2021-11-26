import { createStore ,createLogger} from 'vuex'
import {store as user,UserState,UserStore} from '@/store/modules/user'
import {store as setting,SettingState,SettingStore} from '@/store/modules/setting'
export interface RootState {
    setting: SettingState
    user: UserState
}
export type Store=UserStore<Pick<RootState,'user'>> 
& SettingStore<Pick<RootState,'setting'>>
export const store = createStore({
    plugins:process.env.NODE_ENV !== 'production'?[createLogger({})] : [],
    modules:{
        user,
        setting
    }
})
export function useStore():Store {
  return store as Store
}
