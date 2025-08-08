
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/movie-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/movie-site/home",
    "route": "/movie-site"
  },
  {
    "renderMode": 2,
    "route": "/movie-site/home"
  },
  {
    "renderMode": 2,
    "route": "/movie-site/dcpage"
  },
  {
    "renderMode": 2,
    "redirectTo": "/movie-site/home",
    "route": "/movie-site/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5038, hash: '6f5a6cff91987b842879ce3ddd7dfeabf6748517be6e65a9e9f0c69379991faa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: 'd5c81fd914ec353ed5fdbe625a9fd094f4b493e8ee64b584bbc73afbc71559e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19488, hash: '6fa18a4a3876a4a72049b411e93cab1d8b68f4f934630cdc0d6b1b27be0b12ce', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dcpage/index.html': {size: 21577, hash: '95edbc108ed57b85ed55224721c08436b9d1580ee852152fae62d2c24065632f', text: () => import('./assets-chunks/dcpage_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
