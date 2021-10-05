<template>
  <v-main v-if="show" class="card">
    <v-col cols="12">
      <h1>Validação de PIS/PASEP</h1>
      <v-divider></v-divider>
      <p class="pt-8">
        Como validar números do PIS/PASEP utilizando o
        <strong>DocsBRValidator</strong>?
      </p>
      <v-spacer></v-spacer>

      <p class="py-8">
        Para a validação do PIS/PASEP, o processo é bem simples:
      </p>

      <p style="text-align: center">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O método utilizado para a validação do PIS/PASEP é o
        <code>PisValidation.Validate()</code>
      </p>
      <v-img
        :src="require('@/assets/validation/PISimplement.png')"
        height="250px"
        contain
      />

      <p class="steps">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        Devemos passar como parâmetro o número do PIS/PASEP, pode ser com
        máscara ou não, por exemplo, uma <code>string</code> com o CPF no
        formato <code>279.64230.13-7</code>, <code>279.64.230/137</code> ou
        <code>27964230137</code> <br />será validado corretamente. O método
        ficará semelhante ao exemplo abaixo:
      </p>
      <v-img
        :src="require('@/assets/validation/PISvalidation.png')"
        height="250px"
        contain
      />

      <p class="steps">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O retorno do método será um <code>boolean</code>, que retornará
        <code>true</code> caso o documento informado seja válido e
        <code>false</code> caso o documento seja inválido.
      </p>
      <v-img
        :src="require('@/assets/validation/PISvalidated.png')"
        height="250px"
        contain
      />
      <p class="steps font-weight-medium" style="padding-bottom: 80px">
        <v-icon dense>mdi-check-decagram-outline</v-icon>
        Pronto, simples!
      </p>
    </v-col>
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
};
</script>

<style lang="scss" scoped>
.card {
  margin-left: 20px;
  padding-top: 15px !important;
}
.steps {
  padding-top: 55px;
  text-align: center;
}
.steps-border {
  border: 2px dashed #f69c55;
}
.v-icon {
  margin-bottom: 3px !important;
}
</style>>