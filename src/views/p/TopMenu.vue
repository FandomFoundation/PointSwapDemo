<template>
  <v-toolbar
    class="elevation-0"
  >
    <router-link
      to="/"
      custom
      class="logoLink"
    >
      <img
        src="@/assets/p/logo_black.png"
        class="logo"
      >
    </router-link>
    <v-spacer />
    <v-btn
      rounded
      color="black"
      dark
      large
    >
      <img
        src="@/assets/p/tiktok_small_white.png"
        class="btnImg"
      >
      <span>TikTok ID :</span><span class="contents">{{ user.loggedIn ? user.data.email : '111' }}</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TopMenu',
  components: {

  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style lang="scss" scoped>

  .logoLink {
    height: 40px !important;
    margin-left: 40px;

    .logo {
      width: 192px;
      height: 40px;
    }
  }

  .v-btn {
    text-transform:none;
    padding-left: 50px !important;
    padding-right: 50px !important;
    margin-right: 40px;

    .btnImg {
      height: 25px;
      width: 20px;
      margin-right: 20px;
    }
  }

</style>
