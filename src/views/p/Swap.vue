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
            height="550"
            class="d-flex flex-column pa-8 pt-0 pb-3"
            :loading="processing"
            :disabled="processing"
          >
            <v-card-title class="justify-center header">
              Swap
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
            <img
              src="@/assets/p/swap_btn_down.png"
              class="swap_icon"
            >
            <v-card
              justify="center"
              align="center"
              class="box elevation-0 mb-1 rounded-card pa-1"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  class="ml-6"
                  align="center"
                  justify="center"
                >
                  <div class="badgeIcon">
                    <img
                      src="@/assets/p/icon_tiktok.png"
                      class="icon"
                    >
                    <div class="title mb-2">
                      TikTok
                    </div>
                  </div>
                  <div>
                    <span class="balance">
                      Balance: 6,000,000 P
                    </span>
                  </div>
                </v-col>

                <v-col
                  xs="6"
                  align="right"
                  class="pr-6"
                >
                  <span class="max mr-7">Max</span>
                  <v-text-field
                    v-model="exchange"
                    class="amount"
                    single-line
                    reverse
                    type="number"
                  />
                </v-col>
              </v-row>
            </v-card>

            <v-card
              justify="center"
              align="center"
              class="box elevation-0 pa-2 rounded-card"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  class="ml-6"
                  align="center"
                  justify="center"
                >
                  <div class="badgeIcon">
                    <img
                      src="@/assets/p/icon_fandom.png"
                      class="icon mr-2 mt-1"
                    >
                    <div class="title mb-1">
                      CRTR
                    </div>
                  </div>
                  <div>
                    <span class="balance">
                      Balance: 250 Fandom
                    </span>
                  </div>
                </v-col>

                <v-col
                  xs="6"
                  align="right"
                  class="pr-6"
                >
                  <span class="amount">{{ target.toLocaleString() }}</span>
                </v-col>
              </v-row>
            </v-card>

            <v-list class="contents">
              <v-list-item dense>
                <v-list-item-content class="th">
                  Price
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc">
                  <v-list-item-title>
                    {{ p1.toLocaleString() }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Incinerated TikTok Points
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ exchange.toLocaleString() }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Issued Fandom
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ target.toLocaleString() }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item dense>
                <v-list-item-content class="th">
                  Swap Fee
                </v-list-item-content>
                <v-list-item-content class="text-right align-self-start tc2">
                  <v-list-item-title>
                    {{ swap_fee }}%
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
                @click="doSwap"
              >
                Swap
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
    exchange: 250,
    tiktok_max: 6000000,
    fandom_balance: 250,
    processing: false,
    swap_fee: 1

  }),
  computed: {

    target: function () {
      return this.exchange / 3
    },
    p1: function () {
      return this.exchange * 10
    },
    p2: function () {
      return this.exchange * 3
    },
    p3: function () {
      return this.exchange * 1.2
    }
  },
  methods: {
    doSwap () {
      this.processing = true
      setTimeout(() => {
        this.$router.push({ name: 'SwapResult', params: { exchange: this.exchange, target: this.target } })
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

.v-list-item {
  height: 20px !important;
}

.badgeIcon {

  width: 130px;
  height: 35px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.02);
  border-radius: 100px;
   vertical-align: middle;

  .icon {
    vertical-align: middle;
  }

  .title {
    display: inline-block;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    text-align: right;

    color: #181818;
    vertical-align: middle;
  }

}

.swap_icon {
  display: block;
  position: relative;
  bottom: -125px;
   left:50%;
  transform:translateX(-50%);
  z-index: 9999;
  width: 42px;
  height: 32px;
}
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
    text-align: right;
    color: #1D1B23;
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
  padding-bottom: 0px;

}

.box {
  width: 416px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 20px;

}

</style>
