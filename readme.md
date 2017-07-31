Totes not ready for prime-time yet.

This is a build system for building webcomponents that you can require in any application using Vue.js.

In your app's build system, just add
```javascript
const path = require('path');
const build = require('vue-component-library');

build(path.resolve('./components'))
  .to(path.resolve('./dist'))
  .with({
    prefix: '',
    production: true,
  })
  .then(() => console.log('all done'));
```
