<script setup></script>

<template>

    <div class="flex">
        <img class="w-32" src="../assets/images/gt-icon-with-text.svg" alt="" />
        <span class="text ml-2">GT Template</span>
    </div>

    <p class="text">ElementPlus</p>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>

    <p class="text">fontawesome</p>
    <div class="flex gap-4">
        <i class="text-green-600 fas fa-vote-yea"></i>
        <i class="text-purple-600 fas fa-wifi"></i>
        <i class="text-green-600 fas fa-user-check"></i>
        <i class="text-purple-600 fas fa-train"></i>
    </div>


</template>

<style lang="scss">
@import url('element-plus/dist/index.css');
.text {
    padding: 12px 0;
    @apply font-bold text-2xl tracking-wide ;
}

</style>
