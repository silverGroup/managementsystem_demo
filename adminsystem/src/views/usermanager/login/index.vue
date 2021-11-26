<template>
  <div class="login-page">
    <table></table>
    <el-card class="box-card">
    <template #header>
      <div class="card-header-box">
        <div class="card-header">
            <span>系统登录</span>
        </div>
       <language></language>
      </div>
    </template>
    <el-form label-position="left" label-width="100px" :model="ruleForm" :rules="loginRules" ref="ruleFormRef">
        <el-form-item prop="name" :label="$t('login.username')">
            <el-input :placeholder="$t('login.usernameholder')"  v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <el-form-item prop="password" :label="$t('login.password')">
            <el-input :placeholder="$t('login.passwordholder')"  show-password v-model="ruleForm.password" ></el-input>
        </el-form-item>
    </el-form>
    <div class="test-box">
        <h3>{{$t('login.testacu')}}</h3>
        <p>({{$t('login.username')+'/'+$t("login.password")}})：admin/admin</p>
        <p>({{$t('login.username')+'/'+$t("login.password")}})：editor/editor</p>
    </div>
    <div class="flex">
        <el-button type="primary" @click="handelLogin" class="btn">{{$t('common.login')}}</el-button>
        <el-button type="default" @click="resetForm" class="btn">{{$t('common.reset')}}</el-button>
    </div>
  </el-card>
  </div>
</template>

<script lang="ts"> 
import { reactive,toRefs,ref,unref} from "@vue/reactivity";
import { defineComponent} from "@vue/runtime-core";
import language from "@/components/switchlang/index.vue";
export default defineComponent({
    components: {
       language
    },
    setup() {
        const ruleFormRef=ref(null)
        const userNameRef=(rule:any, value:string, callback:Function) =>{
            if (value) {
                callback()
            } else {
                callback(new Error('Please input the UserName'))
            }
        }
        const passwordRef=(rule:any, value:string, callback:Function) =>{
            if (value) {
                callback()
            } else {
                callback(new Error('Please input the password'))
            }
        }
        const state = reactive({ 
            ruleForm:{ name: "", password: "" } ,
            loginRules:{
                name: [{ validator: userNameRef, message: 'Please input the UserName', trigger: 'blur' }],
                password:[{validator:passwordRef, message: 'Please input the Password',trigger: 'blur' }]
            },
            loading: false,
        })
        const methods=reactive({
            handelLogin:()=>{ 
                const form:any=unref(ruleFormRef)
                form.validate((valid:boolean)=>{
                    if(valid){
                        state.loading = true
                    }
                })
            },
            resetForm:()=>{
                const form:any=unref(ruleFormRef)
                form.resetFields()
            }
        })
        return {
            ruleFormRef,
            ...toRefs(state),
            ...toRefs(methods),
        }
    }
})
</script>
<style lang="scss" scoped>
.login-page{
    width:100%;
    height: 100vh;
    background:url('~@/assets/images/login/background.jpg') center no-repeat;
    background-size: 100% 100%;
    .box-card{
        width: 50%;
        margin:20vh auto 0;
        .card-header-box{
            display:flex;
            justify-content: space-between;
            width:100%;
            font-size: 20px;
        }
    }
    .flex{
        display:flex;
        .btn{ width: 40%; display: block; text-align: center; margin: 0 auto; }

    }
    
    .test-box{
        padding:10px 0;
        p{
            margin: 5px 0;
        }
    }
}
</style>
