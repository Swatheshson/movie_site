
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
    "route": "/movie_site/dc"
  },
  {
    "renderMode": 2,
    "redirectTo": "/movie_site/home",
    "route": "/movie_site/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5038, hash: '55a0d921d4c9c294147862f44299f6b1558975d0613c137734e2fc88b3881e23', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '840de867e2dc8e1f1852d05190282d93658c40ae0ebc182a39da70f085b3c987', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19488, hash: '55467de54e9b990f640234eaa3c2459c11f177714c76c92c94a369872d4c1c11', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dc/index.html': {size: 21577, hash: '576eb06656153999c1b881397522e51b3a67da1e3b9b6dee4cc66944432cc547', text: () => import('./assets-chunks/dc_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
