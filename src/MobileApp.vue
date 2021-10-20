<template>
  <v-app class="font">
    <v-main
      fill-height
      fluid
    >
      <router-view />
    </v-main>
    <bottom-menu v-if="isBottomMenu" />
  </v-app>
</template>

<script>

import BottomMenu from './views/m/BottomMenu.vue'

export default {
  name: 'App',
  components: {
    BottomMenu
  },
  data: () =>
    ({

    }),
  computed: {
    isBottomMenu: function () {
      return !this.$route.name ? false : this.$route.name !== 'Home'
    }
  },
  created () {
    console.log('######### Mobile ###########')
  }

}
</script>

<style lang="scss" scoped>

.font {
   font-family: 'Poppins' !important;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

}

</style>

<style lang="scss">

.bottom-btn {
  span {
    font-weight: bold;
    font-size: 16px !important;
    line-height: 24px !important;
    text-transform: none;
  }

}

div.root {
  //height: 100%;
}
</style>
