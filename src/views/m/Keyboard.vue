<template>
  <v-container keyboard>
    <v-row justify="center">
      <v-col
        align="center"
        @click="press(1)"
      >
        1
      </v-col>
      <v-col
        align="center"
        @click="press(2)"
      >
        2
      </v-col>
      <v-col
        align="center"
        @click="press(3)"
      >
        3
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        align="center"
        @click="press(4)"
      >
        4
      </v-col>
      <v-col
        align="center"
        @click="press(5)"
      >
        5
      </v-col>
      <v-col
        align="center"
        @click="press(6)"
      >
        6
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        align="center"
        @click="press(7)"
      >
        7
      </v-col>
      <v-col
        align="center"
        @click="press(8)"
      >
        8
      </v-col>
      <v-col
        align="center"
        @click="press(9)"
      >
        9
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        align="center"
        @click="press(0)"
      >
        0
      </v-col>
      <v-col align="center" />
      <v-col
        align="center"
        @click="press('back')"
      >
        <v-icon
          color="black"
        >
          mdi-arrow-left
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Keyboard',
  components: {

  },
  data: () => ({

  }),

  methods: {
    press (v) {
      this.$emit('keydown', v)
    }
  }
}
</script>

<style lang="scss" scoped>

.keyboard {
  max-width: 600px;
  min-width: 200px;

  .col {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 0.3px;
    max-height: 50px;

/* Black */

color: #000000;
  }
}
</style>
