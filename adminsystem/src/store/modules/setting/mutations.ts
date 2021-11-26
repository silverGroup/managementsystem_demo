import { SettingState } from './state'
import {SettingMutationTypes} from './mutation-types'
import {MutationTree} from 'vuex'

export type Mutations<S = SettingState > ={
    [SettingMutationTypes.SET_LANGUAGE](state:S,language:string):void
}

export const mutations:MutationTree<SettingState>={
    [SettingMutationTypes.SET_LANGUAGE](state:SettingState,language:string){
        state.language=language
    }
}