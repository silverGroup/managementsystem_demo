<!--
 * @Author: your name
 * @Date: 2021-11-16 14:09:59
 * @LastEditTime: 2021-11-26 12:27:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /adminsystem-demo/src/components/switchlang/index.vue
-->
<!-- /*
 * @Author: LY
 * @Date: 2021-11-24 17:37:22 
 * @Last Modified by:  LY
 * @Last Modified time: 2021-11-24 17:37:22 
 */
 -->
<template>
    <div>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <img src="@/assets/images/language.svg" class="card-icon">
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in language" :key="item.value" :command="item.value" :class="locallang===item.value?'active':''" >{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { reactive,toRefs, computed} from '@vue/reactivity'
import { useI18n } from 'vue-i18n'
import {useStore} from '@/store'
import {settingActionTypes} from '@/store/modules/setting/action-types'
type Language = {
    name: string
    value: string
}
export default defineComponent({
    setup() {
        const { locale } = useI18n()
        const store =useStore()
        const state = reactive({
            language:[{ name: 'Enghish', value: 'en' }, { name: '中文', value: 'zh-cn' }] as Array<Language>,
            handleCommand:(command:string)=>{
                console.log(`click on item ${command}`)
                // locallang.value = command
                locale.value = command
                store.dispatch(settingActionTypes.ACTION_LANGUAGE,command)
            }
        })
        const locallang=computed(()=>{
            locale.value = store.state.setting.language
            return store.state.setting.language
        })
        return {
            locallang,
            ...toRefs(state),
        }
    }
})
</script>
<style lang="scss" scoped>
.card-icon{
    width:25px;
    height: 25px;
}
:deep(.active){
    color: red;
}
</style>