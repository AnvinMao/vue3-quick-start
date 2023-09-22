import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ username: 'AnvinMao' });
  
  const login = () => {}

  const logout = () => {}

  return { user, login, logout }
})
