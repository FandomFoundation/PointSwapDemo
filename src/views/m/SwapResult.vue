<template>
  <v-bottom-sheet
    v-model="sheet"
  >
    <v-sheet
      class="text-center roundedBox"
      height="85vh"
    >
      <v-card
        width="100%"
        height="100%"
        class="d-flex flex-column pa-8 pt-0 pb-3"
        :loading="processing"
        :disabled="processing"
      >
        <v-card-title class="justify-center header">
          Swap Detail
        </v-card-title>

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
        <v-spacer />
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
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>

export default {
  name: 'SwapResult',
  components: {

  },
  data: () => ({
    sheet: true,
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

    console.log(this.result)
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

.header {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #1D1B23;
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

.roundedBox,.v-sheet.v-card{
    border-radius:30px 30px 0px 0px !important;
}

</style>
