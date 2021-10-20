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
            <v-toolbar-title>Sign-out Success</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-actions>
            <v-btn
              color="primary"
              @click="$router.push('/')"
            >
              Go Main
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { getAuth, signOut } from 'firebase/auth'

export default {
  created () {
    this.signout()
  },
  methods: {
    signout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        this.$router.push('/')
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
