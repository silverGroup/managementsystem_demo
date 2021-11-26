import { UserState } from './state'
import {UserMutationTypes} from './mutation-types'
import {MutationTree} from 'vuex'

export type Mutations<S = UserState > ={
    [UserMutationTypes.SET_TOKEN](state:S,token:string):void
    [UserMutationTypes.SET_NAME](state:S,name:string):void
    [UserMutationTypes.SET_AVATAR](state:S,avatar:string):void
}

export const mutations:MutationTree<UserState>={
    [UserMutationTypes.SET_TOKEN](state:UserState,token:string){
        state.token=token
    },
    [UserMutationTypes.SET_NAME](state:UserState,name:string){
        state.name=name
    },
    [UserMutationTypes.SET_AVATAR](state:UserState,avatar:string){
        state.avatar=avatar
    }
}