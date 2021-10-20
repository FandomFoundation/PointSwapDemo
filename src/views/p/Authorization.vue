<template>
  <div class="root">
    <top-menu />
    <v-container
      fill-height
      fluid
    >
      <v-row
        justify="center"
        align="center"
        class="mb-16"
      >
        <v-col
          align="center"
        >
          <v-card
            width="464"
            height="500"
            class="d-flex flex-column pa-8 pt-0 pb-3"
            :loading="processing"
            :disabled="processing"
          >
            <v-card-title class="justify-center header">
              Authorization
            </v-card-title>
            <v-btn
              plain
              dark
              small
              absolute
              top
              right
            >
              <router-link
                to="/"
                tag="button"
              >
                <v-icon color="#5F6B7B">
                  mdi-close
                </v-icon>
              </router-link>
            </v-btn>
            <v-spacer class="pa-0" />
            <!-- <div class="title1">
              Authorization Fandom?
            </div> -->
            <v-spacer class="pb-1" />
            <v-row
              justify="center"
            >
              <v-col
                xs="4"
                align="center"
              >
                <div class="logo_row">
                  <img
                    src="@/assets/p/logo_tiktok.png"
                    class="logo1"
                    width="119"
                    height="45"
                  >
                  <img
                    src="@/assets/p/logo_black.png"
                    class="logo2"
                    width="141"
                    height="29"
                  >
                </div>
              </v-col>
            </v-row>
            <v-spacer />
            <div class="sub1">
              Link Account
            </div>
            <div class="sub2">
              <span cl>
                Sync your TikTok registered account information
              </span>
            </div>
            <v-spacer />
            <div class="term">
              <span>
                By submitting this application you confirm that you are authorized to share this information and agree with our Term and Conditions
              </span>
            </div>

            <v-spacer />
            <v-card-actions class="justify-center">
              <v-btn
                color="#FF004F"
                dark
                large
                block
                class="bottom-btn"
                @click="doAuthorization"
              >
                Authorize
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopMenu from './TopMenu.vue'

export default {
  name: 'Authorization',
  components: {
    TopMenu

  },
  data: () => ({
    processing: false
  }),
  methods: {
    doAuthorization () {
      this.processing = true
      setTimeout(() => {
        this.$router.push('/Swap')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

.logo_row {
  display: flex;
  justify-content: center;
  align-items: center;
  img.logo1 {
    margin-right: 30px;
    display:inline-block;
  }

  img.logo2 {

    display:inline-block;
  }
}

 div.modalTop {
    position: relative;

    height: 80px;
    left: 0px;
    top: 0px;
    height: 30px;

  }

span.modalTitle {

  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #5F6B7B;

}

.header {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #5F6B7B;

}

.title1 {

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
}

.sub1 {

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  /* Grey-900 */

  color: #293345;

}

.sub2 {

  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  /* Grey-600 */

  color: #717E95;
}

.term {

  font-size: 12px;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.3px;

  color: #717E95;
}

</style>
