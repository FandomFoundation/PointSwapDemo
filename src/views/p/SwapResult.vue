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
              Swap Detail
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
            <v-row
              align="center"
              justify="center"
            >
              <v-col align="center">
                <img
                  src="@/assets/p/success_icon.png"
                  max-height="90"
                  max-width="90"
                >
              </v-col>
            </v-row>
            <v-list class="contents">
              <v-list-item dense>
                <v-list-item-content class="th">
                  Date
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start">
                  <v-list-item-title>
                    {{ result.DT }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Incinerated TikTok Points
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ result.ITP.toLocaleString() }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Issued Fandom
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ result.IF.toLocaleString() }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Swap Price
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ result.SP }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Swap Fee
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ swap_fee }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item dense>
                <v-list-item-content class="th_st">
                  Status
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc_st">
                  <v-list-item-title>
                    {{ result.ST }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-spacer />
            <v-card-actions class="justify-center">
              <v-btn
                color="#FF004F"
                dark
                large
                block
                class="bottom-btn"
                @click="finish"
              >
                Finish
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

    processing: false,
    result: {
      DT: null,
      ITP: null,
      IF: null,
      SP: '1Fandom≈19,800KRW',
      ST: 'Success'
    }

  }),
  computed: {

    swap_fee: function () {
      return this.result.ITP ? this.result.ITP * 0.01 : null
    }

  },
  created () {
    console.log(this.$route)
    this.result.ITP = this.$route.params.exchange
    this.result.IF = this.$route.params.target
    this.result.DT = new Date()

    if (!this.result.ITP) {
      this.$router.push('/')
    }
  },
  methods: {
    finish () {
      this.processing = true
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    }

  }
}
</script>

<style lang="scss" scoped>

.contents {

  .th {
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: left;

  color: #A9AAB2;
  }

  .th_st {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */

    letter-spacing: 0.03em;

    /* Black */

    color: #1D1B23;

  }

  .tc {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;

    color: #A9AAB2;

  }

  .tc2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;

    /* Black */

    color: #1D1B23;
  }

  .tc_st {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;

    color: #00C9A7;

  }
}

.rounded-card{
    border-radius:20px !important;
}
span.balance {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #A9AAB2;

  }

  .amount {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    /* identical to box height */

    text-align: right;

    color: #181818;
    vertical-align: middle;
  }

  span.max {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    text-align: center;
    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #FF004F;
    vertical-align: middle;
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

.box {
  width: 416px;

  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 20px;
}

</style>
