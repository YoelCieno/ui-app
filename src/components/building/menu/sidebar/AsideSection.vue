<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  iconClass: string;
  routeToPath: string;
}>();
const icon = computed(() => `icon-${props.iconClass}`);

</script>
<template>
  <div class="sub-section">
    <router-link
      class="sub-section-item text text-paragraph-m text-paragraph-m--medium"
      :to="{ name: routeToPath }"
    >
      <span
        :class="icon"
        aria-hidden="true"
      />
      <!-- {{ $t(title) }} -->
      <p class="sub-section-item__item-name">Título</p>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.section {
  font-size: 1.4rem;
  width: 21.2rem;
}
.router-link-active.sub-section-item {
  background-color: $color-primary-green-active;
  color: $color-white;
  &:hover {
    background-color: $color-primary-green-hover;
    transition: background-color 0.2s linear;
    color: $color-white;
  }
}
.sub-section-item {
  display: flex;
  align-items: center;
  padding: 1.2rem 1.2rem;
  text-decoration: none;
  background-color: $color-primary-blue;
  color: $color-white;

  > span {
    font-size: 2.4rem;
  }

  &__item-name {
    flex-grow: 1;
    margin: 0 1.2rem;
    height: 0;
  }

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s linear;
  }
}
</style>
