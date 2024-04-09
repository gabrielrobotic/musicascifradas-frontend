<script setup>
import { ref, onMounted } from 'vue'
import { authenticationService } from '@/services/authentication'
import { useAuth } from '@/stores/auth'
import router from '@/router';

let login = ref('')
let password = ref('')

const auth = useAuth()

async function submitLogin() {
  const credentials = { login: login.value, password: password.value }
  try {
    let data = await authenticationService.login(credentials)
    auth.setToken(data.nome, data.sobrenome, data.username, data.role, data.token)
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

<template>
  <v-sheet elevation="4" rounded="lg" class="pa-2">
    <v-row class="ma-2">
      <v-col cols="12" class="text-center">
        <h2>Login</h2>
      </v-col>
      <v-col>
        <v-form @submit.prevent="submitLogin">
          <v-text-field v-model:model-value="login" label="Nome de usuário" />
          <v-text-field v-model:model-value="password" label="Senha" type="password" />

          <v-btn class="mt-2" type="submit" block>Enviar</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-sheet>

</template>

<style scoped></style>
