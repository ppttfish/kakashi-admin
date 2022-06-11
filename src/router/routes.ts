import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  // 登录页
  {
    path: '/login',
    name: 'login',
    meta: {
      hideInMenu: true
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login/index.vue')
  },
  // 首页
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'HomeFilled'
    },
    component: Layout
  },
  // 测试
  {
    path: '/text-manange',
    name: 'test-manange',
    meta: {
      title: '测试',
      icon: 'HomeFilled'
    },
    component: Layout,
    children: [
      {
        path: 'test',
        name: 'test',
        meta: {
          title: '测试',
          icon: 'HomeFilled'
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  }
]

export default routes
