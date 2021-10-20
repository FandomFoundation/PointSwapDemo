<template>
  <v-bottom-navigation
    app
    :value="value"
    absolute
    height="56"
    color="primary"
  >
    <v-btn @click="move('/')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn @click="move('/Swap')">
      <span>Swap</span>
      <v-icon>mdi-swap-horizontal-circle</v-icon>
    </v-btn>

    <v-btn @click="move('/')">
      <span>Signout</span>

      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BottomMenu',
  components: {

  },
  data: () => ({ value: 1 }),
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    move (u) {
      this.$router.push(u)
    }
  }
}
</script>

<style lang="scss" scoped>

.v-bottom-navigation {
  button {
    height: 56px !important;
    background-color: transparent !important;
  }
}
</style>
