<template>
  <v-row class="rounded-lg">
    <v-col cols="12">
      <h2>Login</h2>
    </v-col>
    <v-col cols="12">
      <v-form @submit.prevent="submitLogin">
        <v-text-field v-model:model-value="login" label="Nome de usuário" />
        <v-text-field v-model:model-value="password" label="Senha" type="password" />

        <v-btn class="mt-2" type="submit" block>Enviar</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import Authentication from '@/services/authentication'

let login = ref('teste')
let password = ref('testes')

function submitLogin() {
  const auth = { login: login.value, password: password.value }
  Authentication.login(auth)
    .then((response) => {
      console.log('Sucesso', response)
    })
    .catch((error) => {
      console.log('Falha', error)
    })
}
</script>

<style scoped></style>
