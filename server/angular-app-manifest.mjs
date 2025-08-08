
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/movie_site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/movie_site/home",
    "route": "/movie_site"
  },
  {
    "renderMode": 2,
    "route": "/movie_site/home"
  },
  {
    "renderMode": 2,
    "route": "/movie_site/dcpage"
  },
  {
    "renderMode": 2,
    "redirectTo": "/movie_site/home",
    "route": "/movie_site/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5038, hash: '96a1952e741fd947acd81cd1641a9684717f814f2ce3697dfbeded1261d48e60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '52a14735327cce917e37ad5454faaea7d3f7d9485993a65cadda808b0e811dfb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19488, hash: '897b869f259635bf237dc7722ceb086ae8850eb3a60bfe028f74bf0a63148a04', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dcpage/index.html': {size: 21577, hash: '3d0e0c953cd646fb0b9c6ddd56eac102d5226852e89e18ded9c080f6cce40ba6', text: () => import('./assets-chunks/dcpage_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
