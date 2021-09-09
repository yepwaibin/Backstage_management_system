<template>
  <div class="login-account">
    <!-- rules 绑定规则 -->
    <!-- model 把数据告诉 el-form  -->
    <el-form
      label-width="60px"
      :rules="LoginAccountRules"
      :model="account"
      ref="formRef"
    >
      <!-- prop 用于匹配对应规则 -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { LoginAccountRules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '../../../utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // Elform的类型
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      // formRef.value取到的是el-form表单，validate传入一个回调函数，验证表单是否通过，通过则valid为true，否则为false
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 开始登录验证，account默认是响应式对象，所以解构一下
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      LoginAccountRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
