import Vue from 'vue'
import App from './App.vue'
import MobileApp from './MobileApp.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import MobileDetect from 'mobile-detect'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// Vue.config.productionTip = false

import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVmwjR_Sxit8UnsLaMvK9QZYrgNETLDNE',
  authDomain: 't2cr-e1917.firebaseapp.com',
  projectId: 't2cr-e1917',
  storageBucket: 't2cr-e1917.appspot.com',
  messagingSenderId: '494602197841',
  appId: '1:494602197841:web:3e80272cb82d9210739170',
  measurementId: 'G-T837EDEMJK'
}

// Initialize Firebase
initializeApp(firebaseConfig)

var md = new MobileDetect(window.navigator.userAgent)

// Initialize Firebase Auth
const auth = getAuth()
onAuthStateChanged(auth, async (u) => {
  console.log('FireAuth : ', u)
  await store.dispatch('fetchUser', u)
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(md.mobile() ? MobileApp : App)

  }).$mount('#app')
})
