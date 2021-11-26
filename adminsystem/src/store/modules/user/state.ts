import { LocalStorageService } from '@/utils/storage'
export interface UserState{
    token:string
    name:string
    avatar:string
}


export const state:UserState={
    token:LocalStorageService.get('systemtoken')||'',
    name:"",
    avatar:""
}