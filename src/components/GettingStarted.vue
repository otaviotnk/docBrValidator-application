<template>
  <v-container v-if="show">
    <v-row class="text-center pages">
      <v-col cols="12"> </v-col>
      <v-col class="mb-4">
        <h1 class="text-center display-2 font-weight-bold mb-3">
          Getting Started
        </h1>
        <v-divider></v-divider>

        <v-col class="text-left pt-8" cols="12">
          <h2 class="">Introdução</h2>
        </v-col>
      </v-col>

      <v-col class="mb-5 text-left" cols="12">
        <p>Como utilizar o <strong>DocsBRValidator</strong>?</p>
      </v-col>
      <v-col class="text-left mb-5" cols="12">
        <p>
          Para utilizar os recursos do <strong>DocsBRValidator</strong> é muito
          simples, basta instalar o pacote no seu projeto, isto pode ser feito
          de duas formas:
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p>Usando o Package Manager do VS:</p>
        <p>
          Utilizando o comando <code>Install-Package DocsBRValidator</code>,
          como abaixo:
        </p>
        <v-img
          :src="require('@/assets/validation/nuget_install.png')"
          height="80px"
          contain
        />
      </v-col>

      <v-col class="mb-15" cols="12">
        <p>Usando o .NET CLI:</p>
        <p>
          Utilizando o comando <code>dotnet add package DocsBRValidator</code>,
          como abaixo:
        </p>

        <v-img
          :src="require('@/assets/validation/cli_install.png')"
          height="80px"
          contain
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="mb-5" cols="12">
        <p>
          Após isso, basta importar o <strong>DocumentValidator</strong> na
          nossa classe e implementar o método que precisamos:
        </p>
        <v-img
          :src="require('@/assets/validation/implement.png')"
          height="250px"
          contain
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GettingStarted",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.pages {
  margin-left: 250px !important;
  margin-bottom: 150px;
}
</style>
