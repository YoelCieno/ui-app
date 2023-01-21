<script setup lang="ts">
import HeaderBar from '@/components/building/menu/HeaderBar.vue';
import SideBar from '@/components/building/menu/sidebar/SideBar.vue';

</script>
<template>
  <HeaderBar />
  <SideBar />
  <router-view />
</template>
<style lang="scss" scoped></style>
