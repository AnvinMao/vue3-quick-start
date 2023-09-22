interface Navigation {
  name: string;
  path: string;
}

const MainNavigation: Navigation[] = [
  { name: 'home', path: '/' },
  { name: 'profile', path: '/profile' }
];

export {
  MainNavigation
}