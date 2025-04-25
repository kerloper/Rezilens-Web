<script lang="ts" setup>
const isLogin = useCookie('is_login')
</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <AccountPanelHeaderComponent v-if="isLogin"/>
    <slot/>
  </div>
</template>

<style scoped></style>
