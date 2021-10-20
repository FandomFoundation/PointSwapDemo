<template>
  <div>
    <v-container
      fill-height
      fluid
      class="home"
    >
      <top-menu />
      <v-row align="center">
        <v-col align="center">
          <v-row align="center">
            <v-spacer />
            <v-col
              class="logo_container"
              align="center"
              xs="4"
              sm="3"
            >
              <img
                class="logo_1"
                src="@/assets/p/main_logo_1.png"
              >
            </v-col>

            <v-col
              class="logo_container"
              align="center"
              xs="4"
              sm="3"
              lg="2"
            >
              <img
                class="logo_2"
                src="@/assets/p/main_logo_2.png"
              >
            </v-col>

            <v-col
              class="logo_container"
              align="center"
              xs="4"
              sm="3"
            >
              <img
                class="logo_3"
                src="@/assets/p/main_logo_3.png"
              >
            </v-col>
            <v-spacer />
          </v-row>
          <v-row
            align="center"
          >
            <v-col align="center">
              <router-link
                to="/Authorization"
                custom
                class="logoLink"
                tag="button"
              >
                <v-btn
                  color="#FF004F"
                  dark
                  large
                  class="redBtn"
                >
                  <span>Swap TikTok point to get Fandom</span>
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopMenu from './HomeTopMenu.vue'

export default {
  name: 'Home',
  components: {
    TopMenu
  }
}
</script>

<style lang="scss" scoped>
  .home {
    background-image: url('~@/assets/p/main.png');
    background-size: cover;
    height: 100vh;
  }

  .redBtn {
    font-weight: bold;
  }

  .logo_1 {

    max-height: 50vh;
    max-width: 50vw;
    }

    .logo_2 {

      max-height: 7vh;
      max-width: 7vw;
    }

    .logo_3 {
      max-height: 50vh;
      max-width: 50vw;
    }
</style>
