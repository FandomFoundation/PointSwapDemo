<template>
  <v-toolbar
    class="elevation-0 top"
  >
    <router-link
      to="/"
      custom
      class="logoLink"
    >
      <img
        src="@/assets/p/logo_white.png"
        class="logo"
      >
    </router-link>
    <v-spacer />
    <router-link
      to="/Authorization"
      custom
    >
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
        <span>Login with Tik Tok</span>
      </v-btn>
    </router-link>
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

  header.top {
    position: absolute !important;
    top: 0 !important;
    width: 100vw;
    left: 0;
    background: rgba(255, 255, 255, 0.2) !important;
    background: rgba(255, 255, 255, 0.2) !important;
  }

</style>
