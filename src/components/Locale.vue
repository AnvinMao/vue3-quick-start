<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Langs, currentLanguage, type Language } from '@/locales';
import { computed, onMounted, ref } from 'vue';
import IconLocale from './icons/IconLocale.vue';

withDefaults(defineProps<{
  position?: 'header' | 'nav'
}>(), {
  position: 'header'
});

const { locale } = useI18n();
const dropDown = ref<boolean>(false);
const currentLang = computed<Language>(() => currentLanguage());

const changeLang = (_locale: string) => {
  localStorage.setItem('locale', _locale);
  locale.value = _locale;
  dropDown.value = false;
}

onMounted(() => {
  document.addEventListener('click', () => dropDown.value = false);
})
</script>

<template>
  <div :class="`locale ${position}`">
    <div class="lang flex-row" @click.stop="dropDown = !dropDown">
      <IconLocale class="icon" />
      <span>{{ currentLang.name }}</span>
    </div>
    <ul v-if="dropDown" class="dropdown" @mouseleave="dropDown = false">
      <li v-for="item in Langs" class="options" :key="item.locale" @click="changeLang(item.locale)">
      {{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.locale {
  position: relative;
  font-size: 1rem;
  .lang {
    cursor: pointer;
    .icon {
      height: 1.3rem;
      width: 1.3rem;
    }
    span {
      padding-left: .3rem;
      text-transform: uppercase;
    }
  }
  .dropdown {
    position: absolute;
    background-color: var(--main-bg);
    color: var(--font-color);
    padding: 1rem;
    border-radius: .6rem;
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    min-width: 9rem;
    text-align: center;
    li {
      cursor: pointer;
      padding: .2rem 0;
      border-radius: .3rem;
      &:hover {
        background-color: var(--primary-color);
        color: var(--font-reverse);
      }
    }
  }
  &.header .dropdown {
    top: 4rem;
    left: 0;
  }
  &.nav .dropdown {
    left: 0;
    top: -8px;
    transform: translateY(-100%);
  }
}
</style>