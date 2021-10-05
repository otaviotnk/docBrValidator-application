<template>
  <v-main v-if="show" class="card">
    <v-col cols="12">
      <h1>Validação de CNH</h1>
      <v-divider></v-divider>
      <p class="pt-8">
        Como validar números da CNH utilizando o
        <strong>DocsBRValidator</strong>?
      </p>
      <v-spacer></v-spacer>
      <p class="py-8">Para a validação da CNH, o processo é bem simples:</p>

      <p style="text-align: center">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O método utilizado para a validação da CNH é o
        <code>CnhValidation.Validate()</code>
      </p>
      <v-img
        :src="require('@/assets/validation/CNHimplement.png')"
        height="250px"
        contain
      />

      <p class="steps">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        Devemos passar como parâmetro o número da CNH, pode ser com máscara ou
        não, por exemplo, uma <code>string</code> com a CNH no formato
        <code>61387542928</code>, <code>613-8754.29/28</code> ou
        <code>613.875.429.28</code> <br />será validado corretamente. O método
        ficará semelhante ao exemplo abaixo:
      </p>
      <v-img
        :src="require('@/assets/validation/CNHvalidation.png')"
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
        :src="require('@/assets/validation/CNHvalidated.png')"
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