import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faChevronDown, faHeart, faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faCartShopping, faChevronDown, faMagnifyingGlass, faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon, )


Vue.config.productionTip = false

import "@fontsource/ibm-plex-sans"


new Vue({
  render: h => h(App),
}).$mount('#app')

