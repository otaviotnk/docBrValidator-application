<template>
  <v-card class="mx-0 my-0">
    <v-navigation-drawer app permanent style="background-color:#F0F8FF">
      <v-list-item>
        <v-list-item-content>
          <v-img :src="require('@/assets/docicon.png')" height="50px" contain />
          <v-list-item-title class="text-h5">
            DocsBRValidator
          </v-list-item-title>
          <v-list-item-subtitle>
            Validação eficiente de documentos.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          link
          @click="changeGetttingStartedStatus(!showGettingStarted)"
        >
          <v-list-item-icon>
            <v-icon>mdi-rocket-launch-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="font-weight-medium">
            Getting started
          </v-list-item-title>
        </v-list-item>
        <v-list-group :value="true" prepend-icon="mdi-check">
          <template v-slot:activator>
            <v-list-item-title class="font-weight-medium">
              Validações
            </v-list-item-title>
          </template>
          <v-list-item
            @click="(item.show = !item.show), changeStatus(item)"
            v-for="item in items"
            :key="item.name"
            link
          >
            <v-list-item-icon class="pl-4">
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="text-subtitle-2"
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item 
          link
          @click="changeAboutStatus(!showAbout)"
        >
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="font-weight-medium">
            Sobre
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showGettingStarted: false,
      items: [
        {
          code: "cpf",
          title: "CPF",
          icon: "mdi-arrow-right"
        },
        {
          code: "rg",
          title: "RG",
          icon: "mdi-arrow-right"
        },
        {
          code: "cnh",
          title: "CNH",
          icon: "mdi-arrow-right"
        },
        {
          code: "tituloEleitor",
          title: "Titulo de Eleitor",
          icon: "mdi-arrow-right"
        },
        {
          code: "pis",
          title: "PIS/PASEP",
          icon: "mdi-arrow-right"
        },
        {
          code: "cnpj",
          title: "CNPJ",
          icon: "mdi-arrow-right"
        },
        {
          code: "ie",
          title: "Inscrição Estadual",
          icon: "mdi-arrow-right"
        },
      ]      
    };
  },
  methods: {
    changeGetttingStartedStatus(event) {      
      this.$store.commit("changeGettingStartedStatus", event);
    },
    changeAboutStatus(event) {      
      this.$store.commit("changeAboutStatus", event);
    },
    changeStatus({ code }) {
      switch (code) {
        case "cpf":
          this.$store.commit("changeCpfStatus", true);
          break;
        case "rg":
          this.$store.commit("changeRgStatus", true);
          break;
        case "cnh":
          this.$store.commit("changeCnhStatus", true);
          break;
        case "tituloEleitor":
          this.$store.commit("changeTituloEleitorStatus", true);
          break;
        case "pis":
          this.$store.commit("changePisStatus", true);
          break;
        case "cnpj":
          this.$store.commit("changeCnpjStatus", true);
          break;
        case "ie":
          this.$store.commit("changeIeStatus", true);
          break;

        default:
          break;
      }
    },
  },
};
</script>
