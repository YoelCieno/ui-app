<script setup lang="ts">
import { reactive } from 'vue';
import AsideSection from '@/components/building/menu/sidebar/AsideSection.vue';

const sections: Record<string, any>[] = [
  {
    title: 'sideBar.dashboard',
    iconClass: 'dashboard',
    routeToPath: '',
  },
];

const asideSections = reactive<Record<string, any>[]>(sections);
</script>
<template>
  <div class="side-bar-container">
    <aside class="side-bar-container__aside">
      <AsideSection
        v-for="(section, index) in asideSections"
        :key="index"
        :title="section.title"
        :iconClass="section.iconClass"
        :routeToPath="section.routeToPath"
      />
    </aside>
  </div>
</template>
<style lang="scss" scoped>
.side-bar-container {
  z-index: $z-index-sidebar;

  &__aside {
    background-color: $color-primary-blue;
    position: fixed;
    left: 0;
    top: 6rem;
    bottom: 0;
    width: 4.5rem;
    overflow-x: hidden;
    z-index: $z-index-sidebar;
  }
}
</style>
