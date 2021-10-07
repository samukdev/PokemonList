const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/pokemon',
    component: () => import('layouts/PokemonLayout.vue'),
    children: [
      {
        path: ':id',
        name: 'pokemon-details',
        component: () => import('pages/PokemonDetails.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
