import router from '@/router'
import { useUserStore } from '@/store/user'

const whiteList = ['/login', '/404']

// 前置守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // 用户已登录 不能进去登录页
  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登录 只允许进去登录页 或者白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
