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
import { ref, onMounted } from 'vue'
import { authenticationService } from '@/services/authentication'
import { useAuth } from '@/stores/auth'
import router from '@/router';

let login = ref('teste')
let password = ref('testes')

const auth = useAuth()

async function submitLogin() {
  const credentials = { login: login.value, password: password.value }
  try {
    let data = await authenticationService.login(credentials)
    auth.setToken(data.token)
    router.push({ name: 'home' })
  } catch (error) {
    console.log('Erro LoginView: ', error)
  }
}

onMounted(() => {
  const auth = useAuth()
  auth.clear()
})
</script>

<style scoped></style>
