<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="secondary" @click="$router.push('/Signup')">SignUp</v-btn>
            <!-- <router-link to="/signup">SignUp</router-link> -->
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import router from 'vue-router'

export default {
  data: () => ({
    email: '',
    password: '',
    isSignin: false
  }),
  created: () => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        console.log(user)
      } else {
        // User is signed out
        // ...
      }
    })
  },
  methods: {
    signin () {
      console.log('signin', this.email, this.password)
      if (!this.email) {
        alert('전자우편을 입력하여 주십시오.')
        return
      }

      if (!this.password) {
        alert('암호를 입력하여 주십시오.')
        return
      }

      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
          console.log('User', user)
          this.$router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode && errorMessage) {
            alert(errorMessage)
          }
        })
    },
    signout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode && errorMessage) {
          alert(errorMessage)
        }
      })
    }
  }
}
</script>
