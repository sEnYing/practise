import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ffdeba28 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _27d1a521 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _5ac97132 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _720dda27 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _60ed7b65 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _27d01e4c = () => interopDefault(import('..\\pages\\edit' /* webpackChunkName: "" */))
const _58d81d74 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _ffdeba28,
    children: [{
      path: "",
      component: _27d1a521,
      name: "home"
    }, {
      path: "/login",
      component: _5ac97132,
      name: "login"
    }, {
      path: "/register",
      component: _5ac97132,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _720dda27,
      name: "profile"
    }, {
      path: "/settings",
      component: _60ed7b65,
      name: "settings"
    }, {
      path: "/edit",
      component: _27d01e4c,
      name: "edit"
    }, {
      path: "/article/:slug",
      component: _58d81d74,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
