<script setup lang="ts">
import HeaderBar from '@/components/building/menu/HeaderBar.vue';
import SideBar from '@/components/building/menu/sidebar/SideBar.vue';

</script>
<template>
  <div class="application">
    <HeaderBar />
    <SideBar />
    <div class="application__main">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.application {
  display: inline;
  grid-template-rows: $header-height auto;
  height: 100%;
  &__main {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: $space-xxxxxl;
    padding: $space-xxs $space-xxs 0;
    &.bg-grey {
      background-color: $color-background;
    }
    &.bg-blue {
      background-color: $color-background-2;
      height: calc(100% - 134px);
      margin-top: 7.25rem;
      padding: $space-xxs 0;
    }
  }
}
</style>
