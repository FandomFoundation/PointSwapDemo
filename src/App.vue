<template>
  <v-app class="font">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({

  }),
  created () {
    console.log('######### PC ###########')
  }
}
</script>

<style lang="scss" scoped>

.font {
  font-family: 'Poppins' !important;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

}

</style>

<style lang="scss">

.bottom-btn {
  span {
    font-weight: bold;
    font-size: 16px !important;
    line-height: 24px !important;
    text-transform: none;
  }

}

div.root {
  height: 100%;
}
</style>
