import {UserActionTypes} from './action-types'
// import {UserState} from './state'
// import {UserMutationTypes} from './mutation-types'
import {Mutations} from './mutations'

type AugumentActionContext={
    commit<K extends keyof Mutations>(
        key:K,
        pyload:Parameters<Mutations[K]>[1]
    ):ReturnType<Mutations[K]>
}
export interface Actions{
    [UserActionTypes.ACTION_LOGIN](
    { commit }: AugumentActionContext,
        userInfo: { username: string, password: string }
    ): void
}

export const actions ={
    // async [UserActionTypes.ACTION_LOGIN](
    //     { commit }:AugumentActionContext,
    //     userInfo:{
    //     username:string,password:string
    // }){
        // let {username,password}=userInfo
        // username = username.trim()
        // await loginRequest({ username, password }).then(async(res) => {
        // if (res?.code === 0 && res.data.accessToken) {
        //     setToken(res.data.accessToken)
        //     commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
        // }
        // }).catch((err) => {
        // console.log(err)
        // })
    // }
}