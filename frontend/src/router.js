import Vue from 'vue'
import VueRouter from 'vue-router'

//ルート用のcomponent
import Home from '@/views/Home.vue'
import ModeOptions from '@/views/ModeOptions.vue'
import FuncOptions from '@/views/FuncOptions.vue'
import ParamOptions from '@/views/ParamOptions.vue'
import RecommendedFuncOptions from '@/views/RecommendedFuncOptions.vue'
import Result from '@/views/result.vue'

//プラグインとして登録
Vue.use(VueRouter);

//VueRouterインスタンスを生成
const router = new VueRouter({
  //#を消す
  mode: 'history',
  //ルーティングの定義
  routes: [
    { path: '/', component: Home },
    { path: '/mode_options', component: ModeOptions },
    { path: '/func_options', component: FuncOptions },
    { path: '/param_options', component: ParamOptions },
    { path: '/recommended_func_options', component: RecommendedFuncOptions },
    { path: '/result', component: Result }
  ]
})

const app = new Vue({
    router
}).$mount('#app')

export default router

