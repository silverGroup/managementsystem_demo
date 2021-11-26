import { createI18n } from 'vue-i18n'
import elementEnLocal from 'element-plus/lib/locale/lang/en'
import elementZhLocal from 'element-plus/lib/locale/lang/zh-cn'

import enLocal from './en'
import zhLocal from './zh-cn'


const messages={
    'en':{
        ...enLocal,
        elementEnLocal
    },
    'zh-cn':{
        ...zhLocal,
        elementZhLocal
    }
}

const i18n = createI18n({
    locale:sessionStorage.getItem('LanguageLocal')||'zh-cn',
    messages:messages
})

export default i18n