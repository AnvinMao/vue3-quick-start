<script setup lang="ts">
import { ref } from 'vue';
import type { Navigation } from '@/utils/menu';
import IconNext from '../icons/IconNext.vue';

defineProps<{
  menu: Navigation,
  active: boolean
}>();

const emits = defineEmits<{
  onClick: [ path: string]
}>();

const submenu = ref<boolean>(false);

const clickHandler = (menu: Navigation) => {
  if (menu.children) {
    submenu.value = !submenu.value;
    return;
  }
  submenu.value = false;
  emits('onClick', menu.path);
}
</script>

<template>
  <div class="menu" :class="{'active': active}" @click.stop="clickHandler(menu)">
    <div class="flex-row name">
      <span>{{ $t(`title.${menu.name}`) }}</span>
      <IconNext v-if="menu.children" class="arrow" :class="{'up': submenu}" />
    </div>
    <ul v-if="menu.children" class="dropdown" :class="{'show': submenu}" @mouseleave="submenu = false">
      <li v-for="item in menu.children" :key="item.name" @click.stop="clickHandler(item)">
        {{ $t(`title.${item.name}`) }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  padding: .3rem 1rem;
  cursor: pointer;
  position: relative;
  &:hover, &.active {
    color: var(--primary-color);
  }
  .dropdown {
    position: absolute;
    background-color: var(--main-bg);
    color: var(--font-color);
    border-radius: .6rem;
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    min-width: 12rem;
    top: 4.5rem;
    padding: .8rem;
    display: none;
    li {
      cursor: pointer;
      padding: .8rem;
      border-radius: .3rem;
      line-height: 1;
      &:hover {
        background-color: var(--primary-color);
        color: var(--font-reverse);
      }
    }
    &.show {
      display: block;
    }
  }
  .arrow {
    height: .8rem;
    width: 1.5rem;
    transform: rotate(90deg);
    transition: all .3s ease;
    &.up {
      transform: rotate(-90deg);
    }
  }
}
@media(max-width: 640px) {
  .menu {
    padding: 0;
    border-bottom: 1px solid rgba(100,100,100,.4);
    .name {
      padding: 1rem 1.3rem;
    }
    .dropdown {
      position: static;
      border-radius: 0;
      background-color: var(--submenu-bg);
      color: var(--font-reverse);
      padding: 0;
      li {
        padding: .8rem 1.3rem;
        &:hover {
          background-color: transparent;
          color: inherit;
        }
      }
    }
  }
}
</style>