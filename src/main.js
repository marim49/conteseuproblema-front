import Vue from 'vue'
import App from './App.vue'
import { mapActions } from 'vuex'
import router from './router'
import store from './store'
import PNotify from 'pnotify/dist/es/PNotify'
import PageHeader from '@/components/controls/PageHeader'
import ControlWrapper from '@/components/controls/ControlWrapper'
import Select2 from '@/components/controls/Select2'
import moment from 'moment'
import ECharts from 'vue-echarts'
  
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return  moment(String(value)).locale('pt-br').format('DD/MM/YYYY')
  }
});

PNotify.defaults.styling = 'material'
PNotify.defaults.icons = 'material'

Vue.component('page-header', PageHeader)
Vue.component('control-wrapper', ControlWrapper)
Vue.component('select2', Select2)
Vue.component('v-chart', ECharts)

Vue.mixin({
  methods: mapActions(['showLoading', 'hideLoading'])
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
