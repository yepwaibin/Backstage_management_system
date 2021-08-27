<template>
  <div class="login-phone">
    <el-form
      label-width="70px"
      :rules="phoneRules"
      :model="phoneAccount"
      ref="formRef"
    >
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phoneAccount.phoneNumber" />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <div class="get-code">
          <el-input v-model="phoneAccount.verificationCode" />
          <el-button size="mini" type="primary" class="getCode"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { phoneRules } from '../config/account-config'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const phoneAccount = reactive({
      phoneNumber: localCache.getCache('phoneNumber') ?? '',
      verificationCode: localCache.getCache('verificationCode') ?? ''
    })
    const store = useStore()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setCache('phoneNumber', phoneAccount.phoneNumber)
            localCache.setCache(
              'verificationCode',
              phoneAccount.verificationCode
            )
          } else {
            localCache.deleteCache('phoneNumber')
            localCache.deleteCache('verificationCode')
          }

          store.dispatch('login/phoneLoginAction', { ...phoneAccount })
        }
      })
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    return {
      phoneAccount,
      phoneRules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped land="less">
.get-code {
  display: flex;
}
.getCode {
  margin-left: 8px;
}
</style>
