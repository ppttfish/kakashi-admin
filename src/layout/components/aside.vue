<script setup lang="ts">
import { useRouter } from 'vue-router'
import routes from '@/router/routes'
import type { RouteRecordRaw } from 'vue-router'

interface Menu {
  name: string
  title: string
  icon: string
  path: string
  children?: Menu[]
}

// 处理菜单数据
const formatRoutes = (routes: RouteRecordRaw[]): Menu[] => {
  const menus: Menu[] = []
  routes.forEach((route) => {
    // 只返回显示的路由
    if (!route.meta?.hideInMenu) {
      const menu: Menu = {
        name: route.name as string,
        title: route.meta?.title as string,
        icon: route.meta?.icon as string,
        path: route.path
      }

      if (route.children) {
        menu.children = formatRoutes(route.children)
      }

      menus.push(menu)
    }
  })

  console.log('menus', menus)
  return menus
}

const menus: Menu[] = formatRoutes(routes)

const router = useRouter()
const handleMenuItemClick = (menu: Menu) => {
  // 子级路由
  if (menu.children && menu.children.length > 0) {
    router.push({ path: `${menu.path}/${menu.children[0].path}` })
  } else {
    router.push(menu.path)
  }
}
</script>
<template>
  <div class="fixed top-0 bottom-0 w-52 border-r">
    <h5 class="mb-2 text-center">测试测试</h5>
    <el-menu class="h-full" default-active="/">
      <template v-for="menu in menus" :index="menu.path">
        <!-- 存在子级 -->
        <template v-if="menu.children && menu.children.length > 0">
          <!-- 假如子级只有一级 -->
          <template v-if="menu.children.length === 1">
            <el-menu-item
              @click="handleMenuItemClick(menu)"
              :index="menu.children[0].path"
            >
              <span>{{ menu.children[0].title }}</span>
            </el-menu-item>
          </template>
          <!-- 子级有多级 -->
          <template v-else>
            <el-sub-menu :index="menu.path">
              <span>{{ menu.title }}</span>
              <el-menu-item
                v-for="subMenu in menu.children"
                :index="subMenu.path"
                @click="handleMenuItemClick(subMenu)"
              >
                <span>{{ subMenu.title }}</span>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </template>
        <!-- 不存在子级 -->
        <el-menu-item
          v-else
          :index="menu.path"
          @click="handleMenuItemClick(menu)"
        >
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
