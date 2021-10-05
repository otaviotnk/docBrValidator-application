<template>
  <v-container>
    <v-row class="text-center index">
      <v-col cols="12">
        <v-img
          :src="require('../assets/docicon.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bem-vindo ao DocsBRValidator
        </h1>

        <p class="subheading font-weight-regular">
          Um validador simples e efetivo dos principais documentos brasileiros.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn 
          rounded 
          color="primary" 
          dark 
          class="py-6"
          @click="changeGetttingStartedStatus(true)"
        >
          <v-icon class="pr-2">mdi-rocket-launch-outline</v-icon>
          Getting Started
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Index",

  data: () => ({
    
  }),
  methods: {
    changeGetttingStartedStatus(event) {
      console.log("EVENTO GET START", event);
      this.$store.commit("changeGettingStartedStatus", event);
    },
  }
};
</script>
<style lang="scss" scoped>
.index{
  padding-top: 150px;
  margin-left: 300px!important;
}
</style>
