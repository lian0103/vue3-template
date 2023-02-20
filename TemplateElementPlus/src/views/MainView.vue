<script setup>
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue';
import { computed } from '@vue/runtime-core';
import Permission from '../stores/permission';

const Router = useRouter();

const menuFormat = computed(() => {
  return Permission.validRoutes.value;
});

const handleLogout = () => {
  Permission.reset();
  localStorage.removeItem(Permission.name);
  Router.push('/login');
};

const defaultActive = computed(() => {
  return '' + Router.currentRoute.value.path;
});
</script>

<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" :router="true" :default-active="defaultActive">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon> 路由
            </template>
            <el-menu-item v-for="(routeItem, idx) in menuFormat" :key="'menu-item' + idx" :index="routeItem.path">
              <el-icon><Setting /></el-icon> {{ routeItem.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <div class="flexBox">
          <img class="" src="../assets/images/gt-icon-with-text.svg" alt="" />
          <span class="title-text">GT Template x ElementPlus</span>
        </div>
        <div class="toolbar">
          <span class="logout-text" @click="handleLogout">登出</span>
        </div>
      </el-header>

      <el-main>
        <router-view name="mainView"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.logout-text {
  cursor: pointer;
}

.layout-container-demo .el-header {
  position: relative;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-main,
.el-aside {
  max-height: calc(100vh - 100px);
}

.el-aside {
  margin-top: 60px;
}

.el-header {
  display: flex;
  justify-content: space-between;
}
</style>
