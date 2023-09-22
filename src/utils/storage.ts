const TOKEN: string = '--auth-token';

const localStore = {
    
  setAuthToken(token: string) {
    localStorage.setItem(TOKEN, token);
  },

  getAuthToken(): string | null {
    return localStorage.getItem(TOKEN);
  },

  removeAuthToken(): void {
    localStorage.removeItem(TOKEN);
  }
}

export default localStore;