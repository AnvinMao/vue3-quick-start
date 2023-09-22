import type { LoginRequest } from '@/types';
import { http } from '@/utils/request';

export function login(data: LoginRequest) {
  return http.post<string>('/user/login', data);
}