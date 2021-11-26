import {settingActionTypes} from './action-types'
// import {SettingState} from './state'
import {SettingMutationTypes} from './mutation-types'
// import {mutations} from './mutations'
import type {Mutations} from './mutations'
import { LocalStorageService } from '@/utils/storage';


type AugumentActionContext={
    commit<K extends keyof Mutations>(
        key:K,
        pyload:Parameters<Mutations[K]>[1]
    ):ReturnType<Mutations[K]>
}

export interface Actions{
    [settingActionTypes.ACTION_LANGUAGE](
    { commit }: AugumentActionContext,
    language:string
    ): void
}


export const actions={
    async [settingActionTypes.ACTION_LANGUAGE](
        { commit }:AugumentActionContext,
        language:string){
        LocalStorageService.set('language',language)
        commit(SettingMutationTypes.SET_LANGUAGE, language)
    }
}