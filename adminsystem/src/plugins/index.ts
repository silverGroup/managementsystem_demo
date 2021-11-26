import { createApp } from 'vue'
/**
 * 加载所有的插件plugins
 * @param {}
 */
export function loadAllPlugins(app:ReturnType<typeof createApp>){
    const files = require.context('.',true,/\.ts$/)
    files.keys().forEach(key=>{
        if(typeof files(key).default==='function'){
            if(key!=='./index.ts') files(key).default(app)
        }
    })
}