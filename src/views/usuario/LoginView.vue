<script setup>
import { ref, onMounted } from 'vue';
import { authenticationService } from '@/services/authentication';
import { useAuth } from '@/stores/auth';
import router from '@/router';

const login = ref('');
const password = ref('');

const showAlerta = ref(false);

async function submitLogin() {
  const auth = useAuth();
  const credentials = { login: login.value, password: password.value };
  try {
    let data = await authenticationService.login(credentials);
    auth.setToken(data.nome, data.sobrenome, data.username, data.role, data.token);
    router.push({ name: 'home' });
  } catch (error) {
    console.log('Erro LoginView: ', error);
    showAlerta.value = true;
  }
}

onMounted(() => {
  const auth = useAuth()
  auth.clear()
})
</script>

<template>
  <v-sheet elevation="4" rounded="lg" class="pa-2" style="min-width: 300px; max-width: 300px;">
    <v-row class="ma-2">
      <v-col cols="12" class="text-center">
        <h2>Login</h2>
      </v-col>
      <v-col>

      </v-col>
      <v-col cols="12">
        <v-form @submit.prevent="submitLogin">
          <v-text-field v-model:model-value="login" label="Nome de usuário" />
          <v-text-field v-model:model-value="password" label="Senha" type="password" />

          <v-btn class="mt-2" type="submit" block>Enviar</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <router-link :to="{ name: 'register' }" class="d-flex text-decoration-underline">Novo por aqui? Faça seu
          cadastro, clicando
          aqui!</router-link>
      </v-col>
    </v-row>
    <v-alert v-model:model-value="showAlerta" class="mt-16 d-flex" border="start" type="error" variant="tonal"
      elevation="12" density="comfortable" closable position="absolute" location="top center">
      <v-alert-title class="text-subtitle-3 ">Falha no Login</v-alert-title>
      <span class="text-body-1">Usuário/Senha incorretos!</span>
    </v-alert>
  </v-sheet>
</template>

<style scoped>
.v-alert--variant-tonal {
  background: whitesmoke;
}
</style>
