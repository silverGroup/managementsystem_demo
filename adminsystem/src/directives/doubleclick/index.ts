import { Directive } from "vue" 
export const doubleclick:Directive ={
    mounted(el: any,binding: any) {
        el.addEventListener('click',()=>{
            if(!el.disabled){
                el.disabled=true
                setTimeout(()=>{
                    el.disabled = false
                },binding.value||1000)
            }
        })
    }
}