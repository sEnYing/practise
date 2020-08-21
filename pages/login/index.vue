<template>
   <div class="auth-page">
      <div class="container page">
         <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
               <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
               <p class="text-xs-center">
                  <nuxt-link v-if="isLogin"
                       to="/register">Need an account?</nuxt-link link>
                  <nuxt-link v-else
                       to="/login">Have an account?</nuxt-link>
                 </p>
               <ul class="error-messages">
            <template v-for="(v,k) in errors">
                     <li v-for="(val,key) in v"
                  :key="key">
                {{k}} {{val}}
              </li>
            </template>
                 </ul>
               <form @submit.prevent="onSubmit">
                  <fieldset v-if="!isLogin"
                      class="form-group">
                     <input class="form-control form-control-lg"
                     v-model="user.username"
                     type="text"
                     placeholder="Your Name">
                    </fieldset>
                  <fieldset class="form-group">
                     <input class="form-control form-control-lg"
                     type="email"
                     v-model="user.email"
                     placeholder="Email">
                    </fieldset>
                  <fieldset class="form-group">
                     <input class="form-control form-control-lg"
                     type="password"
                     v-model="user.password"
                     placeholder="Password">
                    </fieldset>
                  <button class="btn btn-lg btn-primary pull-xs-right">
                    {{ isLogin ? 'Sign in' : 'Sign up' }}
                    </button>
                 </form>
              </div>
           </div>
        </div>
     </div>
</template>
<script>
import  api from '@/api/index'
const Cookie = process.client ? require('js-cookie'):undefined
export default {
 middleware:'notAuthenticated',
 name: 'LoginIndex',
 asyncData () {
},
 data () {
  return {
  user:{
    username:'',
    email:'',
    password:''
  },
  errors:{}
}
 },
 computed: {
  isLogin () {
   return this.$route.path === '/login'
  }
 },
 methods:{
   async onSubmit() {
     try {
       const { data } = this.isLogin?await api.login({user:this.user}):await api.registration({user:this.user})
       this.$store.commit('setUser',data.user)
       Cookie.set('user',data.user)
       this.$router.push('/')
     } catch (err) {
       this.errors = err.response.data.errors
     }
   },
 }
}
</script>
<style>
</style>