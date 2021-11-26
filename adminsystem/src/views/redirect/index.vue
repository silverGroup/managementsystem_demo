<!--  
/**
 * @Description:重定向
 * @Author:LY
 * @Date:2021-11-05
 * @LastEditTime:
 */
 -->
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        onMounted(()=> {
            const { params, query } = useRoute()
            const { path } = params
            useRouter().replace({ path: '/' + path, query }).catch((err) => {
                console.warn(err)
            })
        })
    },
    //eslint-disable-next-line vue/require-render-return
    render(){
    // Avoid warning for missing template
    }
})
</script>