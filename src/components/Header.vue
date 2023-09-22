<script lang="ts" setup>
import IconMenu from './icons/IconMenu.vue';
import IconUser from './icons/IconUser.vue';
import IconNext from './icons/IconNext.vue';
import Locale from './Locale.vue';
import { MainNavigation } from '@/utils/menu';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { shortAccount } from '@/utils';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const active = computed<string>(() => (route.meta.active || '') as string);
const expanded = ref<boolean>(false);

const navTo = (path: string) => {
  router.push({ path: path });
}
</script>

<template>
  <header>
    <nav class="page flex-row">
      <RouterLink to="/">
        <img src="@/assets/images/logo.png" class="logo" alt="Site Template" />
      </RouterLink>
      <div class="navs" :class="{'show': expanded}" @click="expanded = false">
        <ul class="flex-row left-x" @click.stop>
          <li v-if="!userStore.user" class="mheader auth pc-hidden">
            <RouterLink to="/login">
              {{ $t('button.login') }}
            </RouterLink>
            <RouterLink to="/register" class="btn">
              {{ $t('button.register') }}
            </RouterLink>
          </li>
          <li v-else class="mheader user pc-hidden" @click="navTo('/user')">
            <div class="flex-row">
              <div class="avatar flex-col"><IconUser class="icon" /></div>
              <div class="info">
                <p>{{ userStore.user.username }}</p>
                <p>Ranking Name(etc.)</p>
              </div>
              <IconNext class="forward" />
            </div>
          </li>
          <li
            v-for="item in MainNavigation"
            :key="item.name"
            :class="{'active': active === item.name}"
            @click="navTo(item.path)"
          >
            {{ $t(`title.${item.name}`) }}
          </li>
          <li class="pc-hidden">
            <div class="language">
              <Locale position="nav" />
            </div>
          </li>
        </ul>
      </div>
      <Locale class="mobile-hidden" />
      <div class="actions mobile-hidden">
        <RouterLink v-if="!userStore.user" to="/login" class="btn">
          {{ $t('button.login') }}
        </RouterLink>
        <RouterLink v-else to="/user" class="btn plain rounded short">
          <div class="flex-row">
            <IconUser class="icon" />
            <span>{{ shortAccount(userStore.user.username) }}</span>
            <IconNext class="icon" />
          </div>          
        </RouterLink>
      </div>
      <span class="menu pc-hidden" @click="expanded = !expanded">
        <IconMenu class="icon" />
      </span>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--header-bg);
  color: var(--font-reverse);
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 10000;
  .logo {
    height: 2.2rem;
  }
  .navs {
    flex: 1;
    padding-left: 5vw;
    font-size: 1.1rem;
    li {
      padding: .3rem 1rem;
      cursor: pointer;
      &:hover, &.active {
        color: var(--primary-color);
      }
    }
    .mheader {
      padding-top: 2rem;
      padding-bottom: 2rem;
      .auth {
        text-align: center;
      }
      .btn {
        margin-top: 1rem;
      }
      &.user {
        background-color: var(--primary-color);
        line-height: 1.3;
        .avatar {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: #F0F0F0;
          color: #999;
          .icon {
            width: 50%;
            height: auto;
          }
        }
        .info {
          flex: 1;
          font-size: .9rem;
          padding-left: .5rem;
        }
        .forward {
          height: 1rem;
          width: 1rem;
        }
      }
    }
  }
  .menu .icon {
    width: 1.8rem;
    height: 1.8rem;
    display: block;
  }
  .actions {
    padding-left: 1rem;
  }
}
@media(max-width: 640px) {
  header {
    padding: 1.2rem 0;
    .logo {
      height: 1.8rem;
    }
    .navs {
      position: absolute;
      display: block;
      width: 100%;
      top: 0;
      left: 0;
      height: calc(var(--vh) * 100);
      background-color: rgba(0,0,0,.2);
      padding-left: 0;
      ul {
        height: 100%;
        width: 75%;
        max-width: 25rem;
        background-color: var(--menu-bg);
        top: 0;
        right: 0;
        display: block;
        position: absolute;
        transition: all .3s ease;
      }
      &:not(.show) {
        visibility: hidden;
        ul {
          right: -90%;
        }
      }
      li {
        padding: .8rem 1.5rem;
        &:not(:last-child) {
          border-bottom: 1px solid rgba(100,100,100,.4);
        }
      }
      .language {
        position: absolute;
        z-index: 10;
        bottom: 1rem;
        left: 1.5rem;
      }
    }
  }
}
</style>