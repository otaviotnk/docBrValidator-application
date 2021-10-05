<template>
  <v-main v-if="show" class="card">
    <v-col cols="12">
      <h1>Validação de Inscrição Estadual</h1>
      <v-divider></v-divider>
      <p class="pt-8">
        Como validar números da Inscrição Estadual utilizando o
        <strong>DocsBRValidator</strong>?
      </p>
      <v-spacer></v-spacer>
      <p class="py-8">
        Para a validação da Inscrição Estadual, o processo é bem simples:
      </p>

      <p style="text-align: center">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O método utilizado para a validação da Inscrição Estadual é o
        <code>InscricaoEstadualValidation.Validate()</code>
      </p>
      <v-img
        :src="require('@/assets/validation/IEimplement.png')"
        height="250px"
        contain
      />

      <p class="steps">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        Devemos passar como parâmetros o número da
        <strong>Inscrição Estadual</strong>, e a <strong>UF</strong> a qual
        pertence. <br />
        O número da inscrição pode ser com máscara ou não, por exemplo, uma
        <code>string</code> com o número da Inscrição Estadual no formato
        <code>774.856.119.645</code>, <code>774-856.1196/45</code> ou
        <code>774856119645</code> <br />será validado corretamente. O método
        ficará semelhante ao exemplo abaixo:
      </p>
      <v-img
        :src="require('@/assets/validation/IEvalidation.png')"
        height="250px"
        contain
      />

      <p class="steps-border text-left mt-6">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O formato da UF deve seguir o padrão com duas letras
        (<code>"SP"</code>, <code>"MG"</code>, <code>"RS"</code>, etc...) <br />
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        Para Inscrições Estaduais de produtor rural, no estado de SP, deve-se
        acrescentar a letra <code>'R'</code> no início do número da inscrição,
        ficando por exemplo, <code>"R8784146119645"</code>
      </p>

      <p class="steps mt-n5">
        <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
        O retorno do método será um <code>boolean</code>, que retornará
        <code>true</code> caso o documento informado seja válido e
        <code>false</code> caso o documento seja inválido.
      </p>
      <v-img
        :src="require('@/assets/validation/IEvalidated.png')"
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
  border: 2px dashed red;
  margin-right: 150px;
  padding: 15px;
}
.v-icon {
  margin-bottom: 3px !important;
}
</style>>