<template>
  <v-app>
    <NavDrawer />
    <Home v-if="showHome" />
    <GettingStarted :show="showGettingStarted" />
    <CPFValidation :show="showCpf" />
    <RGValidation :show="showRg" />
    <CNHValidation :show="showCnh" />
    <TituloEleitorValidation :show="showTituloEleitor" />
    <PISValidation :show="showPis" />
    <CNPJValidation :show="showCnpj" />
    <IEValidation :show="showIe" />
    <About :show="showAbout" />
    <v-footer fixed padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>DocsBRValidator</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>


<script>
import Home from "./views/Home.vue";
import NavDrawer from "./components/Navigation/NavDrawer.vue";
import GettingStarted from "./components/GettingStarted.vue";
import CPFValidation from "./components/Validations/CPFValidation.vue";
import RGValidation from "./components/Validations/RGValidation.vue";
import CNHValidation from "./components/Validations/CNHValidation.vue";
import TituloEleitorValidation from "./components/Validations/TituloEleitorValidation.vue";
import PISValidation from "./components/Validations/PISValidation.vue";
import CNPJValidation from "./components/Validations/CNPJValidation.vue";
import IEValidation from "./components/Validations/IEValidation.vue";
import About from "./views/About.vue";

export default {
  components: {
    Home,
    NavDrawer,
    GettingStarted,
    CPFValidation,
    RGValidation,
    CNHValidation,
    TituloEleitorValidation,
    PISValidation,
    CNPJValidation,
    IEValidation,
    About,
  },
  name: "App",

  data: () => ({
    showItem: false,
  }),
  computed: {
    showHome() {
      return this.$store.getters.getShowHome;
    },
    showAbout() {
      return this.$store.getters.getShowAbout;
    },
    showGettingStarted() {
      return this.$store.getters.getShowGettingStarted;
    },
    showCpf() {
      return this.$store.getters.getShowCpf;
    },
    showRg() {
      return this.$store.getters.getShowRg;
    },
    showCnh() {
      return this.$store.getters.getShowCnh;
    },
    showTituloEleitor() {
      return this.$store.getters.getShowTituloEleitor;
    },
    showPis() {
      return this.$store.getters.getShowPis;
    },
    showCnpj() {
      return this.$store.getters.getShowCnpj;
    },
    showIe() {
      return this.$store.getters.getShowIe;
    },
  },
};
</script>
