export interface Navigation {
  name: string;
  path: string;
  children?: Navigation[]
}

export const MainNavigation: Navigation[] = [
  { name: 'home', path: '#', children: [
    { name: 'home', path: '/' },
    { name: 'home', path: '/' }
  ]},
  { name: 'profile', path: '/profile' }
];