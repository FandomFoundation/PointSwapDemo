<template>
  <v-container
    class="home"
    fill-height
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col align="center">
        <v-img
          src="@/assets/m/logo_white.png"
          max-height="50"
          max-width="240"
        />
      </v-col>
    </v-row>

    <div
      v-if="user.loggedIn === false"
      class="bottom"
    >
      <router-link to="/Authorization">
        <v-btn
          rounded
          color="black"
          dark
          block
          large
        >
          <img
            src="@/assets/m/tiktok_small_white.png"
            class="btnImg"
          >
          Login with TikTok
        </v-btn>
      </router-link>
    </div>
    <div
      v-if="user.loggedIn"
      class="bottom"
    >
      <router-link to="/Authorization">
        <v-btn
          rounded
          color="black"
          dark
          block
          large
        >
          <img
            src="@/assets/m/tiktok_small_white.png"
            class="btnImg"
          >
          Hi, {{ user.data.email }}
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  data () {
    return {

    }
  },

  computed: {

    ...mapGetters({
      user: 'user'
    })
  }

}
</script>

<style lang="scss" scoped>
  .home {
    background-image: url('~@/assets/m/main.png') ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100% !important;
    height: 100% !important;
  }

.v-btn {
  text-transform:none !important;

   .btnImg {
      height: 25px;
      width: 20px;
      margin-right: 20px;
    }
}

div.bottom {
  position: absolute !important;
  bottom: 40px !important;
  width: 100vw;
  text-align: center !important;
  padding: 0px 40px;
}
</style>
