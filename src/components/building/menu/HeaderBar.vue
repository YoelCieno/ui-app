<script setup lang="ts">

const initialUserLetter = 'FR';

</script>
<template>
  <div class="header">
    <div class="header__logo" />
    <div class="header__options">
      <div
        class="header__user-icon"
        aria-hidden="true"
      >
        {{ initialUserLetter }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: $color-primary-blue;
  padding: 0.8rem;

  &__logo {
    > span {
      font-size: 3.5rem;
      color: $color-white;
    }
  }

  &__options {
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    color: $color-white;
    position: relative;
  }

  &__user-icon {
    background-color: $color-gray-15;
    color: $color-white;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 0;
    text-align: center;
    font-size: 24px;
    position: relative;
  }
}
</style>
