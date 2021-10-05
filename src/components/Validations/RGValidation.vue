<template>
  <v-main v-if="show" class="card">
    <v-col cols="12">
      <h1>Validação de RG</h1>
      <v-divider></v-divider>
      <p class="pt-8">
        Como validar números do RG utilizando o
        <strong>DocsBRValidator</strong>?
      </p>
      <v-spacer></v-spacer>
      <p class="py-8">Para a validação do RG, o processo é bem simples:</p>

      <p style="text-align: center">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O método utilizado para a validação do RG é o
        <code>RGValidation.Validate()</code>
      </p>
      <v-img
        :src="require('@/assets/validation/RGimplement.png')"
        height="250px"
        contain
      />

      <p class="steps">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        Devemos passar como parâmetro o número do RG, pode ser com máscara ou
        não, por exemplo, uma <code>string</code> com o RG no formato
        <code>5269456784</code>, <code>5269.45./6784</code> ou
        <code>52.69.45.67.84</code> <br />será validado corretamente. O método
        ficará semelhante ao exemplo abaixo:
      </p>
      <v-img
        :src="require('@/assets/validation/RGvalidation.png')"
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
        :src="require('@/assets/validation/RGvalidated.png')"
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