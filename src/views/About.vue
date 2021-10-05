<template>
  <v-main v-if="show" class="card">
    <v-row class="text-center">
      <v-col cols="12"> </v-col>
      <v-col class="mb-4">
        <h1 class="text-center display-2 font-weight-bold mb-3">Sobre</h1>
        <v-divider></v-divider>
      </v-col>

      <v-col class="mb-5 text-left" cols="12">
        <p>
          O projeto <strong>DocsBRValidator</strong> tem como principal
          objetivo, facilitar a vida do desenvolvedor fornecendo ferramentas de
          validação para os principais documentos brasileiros.
        </p>
      </v-col>

      <v-col class="text-center mb-5" cols="12">
        <p>Quais são os próximos passos previstos?</p>
        <template>
          <v-col class="d-flex justify-center">
            <v-data-table
              :headers="headers"
              :items="comingSoon"
              hide-default-header
              hide-default-footer
              class="elevation-1"
            ></v-data-table>
          </v-col>
        </template>
      </v-col>
      <v-col class="mb-5 text-center" cols="12">
        <p class="display-5 font-weight-bold">
          Sujestões ou dúvidas, entre em contato com o <a href="mailto:otavio.rockenbach@outlook.com">DocsBRValidator </a>
        </p>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      headers: [
        {
          value: "title",
        },
      ],
      comingSoon: [
        {
          title: "Validação de RNE",
        },
        {
          title: "Validação de CTPS",
        },
        {
          title: "Mensagens personalizáveis, de erro e de sucesso",
        },
        {
          title: "Entre outros...",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin-left: 20px;
  padding-top: 15px !important;
}
</style>
