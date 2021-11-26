import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import {state} from './state'
import type { SettingState } from './state'
import {Mutations, mutations} from './mutations'
import {actions,Actions} from './actions'

export { SettingState }
export type SettingStore<S = SettingState>=Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
& {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
}& {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
};
export const store={
    state,
    mutations,
    actions
}
