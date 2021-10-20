<template>
  <v-card
    width="100%"
    height="100%"
    class="d-flex flex-column pa-8 pt-0 pb-3"
    :loading="processing"
    :disabled="processing"
  >
    <v-spacer class="mb-n1" />
    <v-row
      class="logo_row"
    >
      <v-col>
        <img
          src="@/assets/m/logo_tiktok.png"
          class="logo1"
          width="119"
          height="45"
        >
      </v-col>

      <v-col align="right">
        <img
          src="@/assets/m/logo_black.png"
          class="logo2"
          width="141"
          height="29"
        >
      </v-col>
    </v-row>
    <v-spacer />
    <v-card
      justify="center"
      align="center"
      class="box elevation-0 mb-1 rounded-card pa-1"
      bottom
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          xs="6"
          align="center"
        >
          <v-row
            justify="center"
            align="center"
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
            </v-col>
            <v-col class="pt-0 pr-3 pb-3 pl-3">
              <span class="balance">
                Balance: {{ tiktok_max.toLocaleString() }} P
              </span>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          xs="6"
          align="right"
          class="pr-6"
        >
          <v-row class="pt-3 pb-3">
            <v-col class="pt-0 pb-0 pl-5">
              <span
                v-if="isMax"
                class="max"
              >Max</span>
            </v-col>
            <v-col class="pt-0 pb-0">
              <span class="amount">{{ exchange != '' ? (exchange *1).toLocaleString() : 0 }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card
      justify="center"
      align="center"
      class="box elevation-0 mb-1 rounded-card pa-1"
      bottom
    >
      <img
        src="@/assets/p/swap_btn_down.png"
        class="swap_icon"
      >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          xs="6"
          align="center"
        >
          <v-row
            justify="center"
            align="center"
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
            </v-col>
            <v-col class="pt-0 pr-3 pb-3 pl-3">
              <span class="balance">
                Balance: {{ fandom_balance.toLocaleString() }} P
              </span>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          xs="6"
          align="right"
          class="pr-6"
        >
          <v-row class="pt-3 pb-3">
            <v-col class="pt-0 pb-0">
              <span class="amount">{{ target.toLocaleString() }}</span>
            </v-col>
          </v-row>
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
          Swap Fee
        </v-list-item-content>
        <v-list-item-content class="text-right align-self-start tc2">
          <v-list-item-title>
            {{ swap_fee }}%
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <keyboard @keydown="onKeypress" />
    <div>
&nbsp;
    </div>
    <v-card-actions class="justify-center">
      <v-btn
        color="#FF004F"

        large
        block
        class="bottom-btn white--text"
        :disabled="isValid"
        @click="doSwap"
      >
        Swap
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import Keyboard from './Keyboard.vue'

export default {
  name: 'Authorization',
  components: {
    Keyboard
  },
  data: () => ({
    exchange: '',
    tiktok_max: 6000000,
    fandom_balance: 250,
    processing: false,
    swap_fee: 1

  }),
  computed: {
    isMax: function () {
      return this.tiktok_max.toString() === this.exchange
    },
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
    },
    isValid: function () {
      return this.tiktok_max < this.exchange
    }
  },
  methods: {
    doSwap () {
      this.processing = true
      setTimeout(() => {
        this.$router.push({ name: 'SwapResult', params: { exchange: this.exchange, target: this.target } })
      }, 2000)
    },
    onKeypress (v) {
      console.log(`key pressed : ${v}`)
      // this.exchange = this.exchange.padEnd(v)
      if (v === 'back') {
        this.exchange = this.exchange.substring(0, this.exchange.length - 1)
      } else {
        if (this.exchange + v > this.tiktok_max) {
          this.exchange = this.tiktok_max.toString()
        } else {
          this.exchange += v
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

// button.v-btn[disabled] {
//   opacity: 0.6 !important;
//   background-color: #FF004F !important;
// }

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
  position: absolute;
  top: -20px;
  left:50%;
  transform:translateX(-50%);
  z-index: 9999;
  width: 42px;
  height: 32px;
}
.logo_row {
  display: flex;
  justify-content: center;
  align-items: center;

  img.logo1 {

    display:inline-block;
  }

  img.logo2 {
    align-self: center;
    display:inline-block;
  }
  img.swap {

    margin-right: 30px;
  }
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

}

.box {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E5E5E5 !important;
  box-sizing: border-box;
  border-radius: 20px;

}

</style>
