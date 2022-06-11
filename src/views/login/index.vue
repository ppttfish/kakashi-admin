<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/store/user'

const ruleFormRef = ref<FormInstance>()

// 是否显示密码
const isShowPassword = ref(false)

// 表单数据
const formData = reactive({
  name: '',
  password: '',
  code: ''
})

// 暂时先这么写，回头把baseUrl拿过来
// 验证码相关
const codeImg = ref(`/api/cq/auth/code?${Math.random()}`)

const handleCodeClick = () => {
  codeImg.value = `/api/cq/auth/code?${Math.random()}`
}

// 校验规则
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

// 处理登录
const userStore = useUserStore()
const loading = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        await userStore.login(
          formData.name,
          formData.password,
          parseInt(formData.code)
        )
        ElMessage.success('登录成功')
        loading.value = false
      } catch (error) {
        console.log('error', error)
        loading.value = false
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="h-[100vh] bg-[#368bff]">
    <el-form
      class="w-[400px] h-[300px] m-auto absolute left-0 right-0 bottom-0 top-0 bg-white p-3 rounded-md text-sm"
      label-position="right"
      :model="formData"
      :rules="rules"
      ref="ruleFormRef"
    >
      <h2 class="mb-8 text-lg">欢迎登录</h2>
      <el-form-item label="" prop="name">
        <el-input
          v-model="formData.name"
          clearable
          prefix-icon="User"
          placeholder="请输入用户名"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          v-model="formData.password"
          clearable
          :type="isShowPassword ? 'text' : 'password'"
          prefix-icon="Lock"
          placeholder="请输入密码"
        >
          <template v-if="isShowPassword" #suffix>
            <el-icon
              @click="isShowPassword = false"
              class="el-input__icon cursor-pointer"
              ><View
            /></el-icon>
          </template>
          <template v-else #suffix>
            <el-icon
              @click="isShowPassword = true"
              class="el-input__icon cursor-pointer"
              ><Hide
            /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="code">
        <div class="flex justify-between w-[100%] ml-2">
          <img
            class="w-[121px] h-[44px]"
            @click="handleCodeClick"
            :src="codeImg"
            alt=""
          />
          <el-input
            class="!w-32"
            v-model="formData.code"
            clearable
            placeholder="请输入验证码"
          >
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="w-[100%] mt-6"
          type="primary"
          :loading="loading"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
