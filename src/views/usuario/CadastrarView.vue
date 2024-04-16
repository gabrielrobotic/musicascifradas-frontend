<script setup>
import { ref, computed } from 'vue';
import router from '@/router';
import { authenticationService } from '@/services/authentication';

const showAlerta = ref(false);

const formData = ref({
  nome: '',
  sobrenome: '',
  username: '',
  password: '',
  role: 'USUARIO',
  dataCriacao: null,
  dataAlteracao: null,
  flagAtivo: true
});

const rules = {
  nome: [
    (value) => !!value || 'Nome é obrigatório',
    (value) => (value && value.length <= 50) || 'Máximo de 50 caracteres permitidos'
  ],
  sobrenome: [
    (value) => !!value || 'Sobrenome é obrigatório',
    (value) => (value && value.length <= 50) || 'Máximo de 50 caracteres permitidos'
  ],
  username: [
    (value) => !!value || 'Username é obrigatório',
    (value) => (value && value.length <= 20) || 'Máximo de 20 caracteres permitidos'
  ],
  password: [
    (value) => !!value || 'Senha é obrigatória',
    (value) => (value && value.length >= 4) || 'Senha deve ter pelo menos 6 caracteres'
  ]
};

function validarTextoTamMin(nomeCampo, tamanhoMin) {
  return !!formData.value[nomeCampo].trim() && formData.value[nomeCampo].length >= tamanhoMin;
}

function validarTextoTamMax(nomeCampo, tamanhoMax) {
  return !!formData.value[nomeCampo].trim() && formData.value[nomeCampo].length <= tamanhoMax;
}

const formIsValid = computed(() => {
  return validarTextoTamMax('nome', 50) &&
    validarTextoTamMax('sobrenome', 50) &&
    validarTextoTamMax('username', 20) &&
    validarTextoTamMin('password', 4);
});

async function submitRegister() {
  const dataCriacao = new Date().toISOString().slice(0, 19);
  const usuario = {
    nome: formData.value.nome.trim(),
    sobrenome: formData.value.sobrenome.trim(),
    login: formData.value.username.trim(),
    password: formData.value.password.trim(),
    role: formData.value.role,
    dataCriacao,
    dataAlteracao: dataCriacao,
    flagAtivo: formData.value.flagAtivo
  };
  try {
    if (formIsValid) {
      await authenticationService.register(usuario);
      router.push({ name: 'login' });
    }
  }
  catch (error) {
    console.log('Erro CadastrarView: ', error);
    showAlerta.value = true;
  }
}
</script>

<template>
  <v-sheet elevation="4" rounded="lg" class="pa-2" style="min-width: 23dvw;">
    <v-row class="ma-2">
      <v-col cols="12" class="text-center">
        <h2>Sign In</h2>
      </v-col>
      <v-col>
        <v-form @submit.prevent="submitRegister">
          <v-text-field v-model:model-value="formData.nome" :rules="rules.nome" label="Nome" class="mt-1" />
          <v-text-field v-model:model-value="formData.sobrenome" :rules="rules.sobrenome" label="Sobrenome"
            class="mt-1" />
          <v-text-field v-model:model-value="formData.username" :rules="rules.username" label="Username" class="mt-1" />
          <v-text-field v-model:model-value="formData.password" :rules="rules.password" label="Senha" type="password"
            class="mt-1" />

          <v-btn class="mt-2" type="submit" block :disabled="!formIsValid">Cadastrar</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-alert v-model:model-value="showAlerta" class="mt-16 d-flex" border="start" type="error" variant="tonal"
      elevation="12" density="comfortable" closable position="absolute" location="top center">
      <v-alert-title class="text-subtitle-3">Falha ao Cadastrar</v-alert-title>
      <span class="text-body-1">Username já existe!</span>
    </v-alert>
  </v-sheet>
</template>

<style scoped>
.v-alert--variant-tonal {
  background: whitesmoke;
}
</style>