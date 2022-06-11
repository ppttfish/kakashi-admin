<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const handleLogoutClick = () => {
  userStore.logout()
}
</script>
<template>
  <div class="fixed left-52 right-0 px-4 h-14 flex justify-end items-center border-b">
    <div class="h-full flex items-center cursor-pointer">
      <el-dropdown trigger="click">
        <div class="w-full flex items-center">
          <el-avatar size="small" icon="UserFilled" />
          <span class="ml-1 block text-sm text-zinc-900">{{
            userStore.nickname
          }}
          </span>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="w-24">
            <el-dropdown-item @click="handleLogoutClick"><div class="w-[100px] text-center">退出系统</div></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
