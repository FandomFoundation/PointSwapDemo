
<template>
  <v-card
    width="100%"
    height="100%"
    class="d-flex flex-column pa-8 pt-0 pb-3"
    :loading="processing"
    :disabled="processing"
  >
    <!-- <v-card-title class="justify-center title1">
      Authorization Fandom?
    </v-card-title> -->

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
            src="@/assets/m/logo_tiktok.png"
            class="logo1"
            width="119"
            height="45"
          >
          <img
            src="@/assets/m/logo_black.png"
            class="logo2"
            width="141"
            height="29"
          >
        </div>
      </v-col>
    </v-row>

    <div class="sub1">
      Link Account
    </div>
    <div class="sub2">
      <span cl>
        Sync your TikTok registered account information
      </span>
    </div>
    <v-spacer />
    <v-spacer />
    <v-spacer />
    <div class="term">
      <span>
        By submitting this application you confirm that you are authorized to share this information and agree with our <span class="term-red">Term and Conditions</span>
      </span>
    </div>

    <v-spacer />
    <v-card-actions class="justify-center">
      <v-btn
        color="#FF004F"
        dark
        large
        class="bottom-btn"
        @click="doAuthorization"
      >
        Authorize
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'Authorization',
  components: {

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

.bottom-btn {
  position: absolute;
  bottom: 20px;
  width: 90%;
}

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
  text-align: center;
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

  .term-red {
    color:red;
  }
}
.v-btn {
  text-transform:none !important;
}

</style>
