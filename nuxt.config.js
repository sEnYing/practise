module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      // 清楚nuxt默认生成的路由表
      routes.splice(0)
      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                path: '',
                name: 'home',
                component: resolve(__dirname, 'pages/home/'),
              },
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/profile/:username',
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/'),
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/'),
              },
              {
                path: '/edit',
                name: 'edit',
                component: resolve(__dirname, 'pages/edit/'),
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'pages/article/'),
              },
            ],
          },
        ],
      )
    },
    linkActiveClass:'active',
	server:{
		host:'0.0.0.0',
		port: 3000
	},
	plugins:[
		'~/plugins/request.js'
	]
  },
}