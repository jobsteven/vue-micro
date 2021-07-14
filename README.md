# vue-micro

A tiny library to split large vue applications.

![vue-micro](https://raw.githubusercontent.com/jobsteven/vue-micro/master/public/vue-micro-demo.gif)

## features

- Accessible for vue ecosystem. `vue 3.x` and `vue-router 4.x` are required.
- Can be used based on central esm registry or customized location.
- Base url supported, easy to mount and integrate with current application,
- A very tiny library (~2kb)

## install & usage

```javascript
npm install vue-micro -S

//vue-router
import router from './router';

// import micro library
import micro from './micro';

```

## load esm dynamically

```javascript
// from central registry
micro(router, 'https://registry.npm.js/libs');

// from customized url
micro(router, {
  micro_app_1_0_3: 'http://registry.npm.js/libs/micro_app1.0.3.esm.js,
  micro_app_other: 'http://registry.npm.js/libs/micro_app.other.esm.js'
  micro_app_module3: 'http://registry.npm.js/libs/micro_app.module3.esm.js'
  // ...
  // ...
})
```

## mounting point, default: `/micro/`

```javascript
micro(router, {}, '/another_mounting_point/');
```

## Micro application Conventions

```javascript
import app_routes from './application.routes.js';

export default {
  id: 'applicationId', // application Id
  routes: app_routes // application routes
};
```
