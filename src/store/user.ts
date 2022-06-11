import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import router from '@/router/index'
import { Encrypt } from '@/utils/crypto'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    nickname: '',
    token: ''
  }),

  actions: {
    // 登录请求动作
    async login(username: string, password: string, code: number) {
      return new Promise((resolve, reject) => {
        login({
          username,
          password: Encrypt(password),
          code
        })
          .then((res) => {
            this.token = res.data.token
            this.nickname = res.data.nickname
            router.push('/')
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 登出
    logout() {
      this.token = ''
      localStorage.removeItem('user')
      router.push('/login')
    }
  },
  persist: true
})
