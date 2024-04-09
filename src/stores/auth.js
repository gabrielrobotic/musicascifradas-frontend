import { ref } from 'vue';
import { defineStore } from 'pinia';
import { authenticationService } from '@/services/authentication';

const sufixoKey = 'musicas-cifradas';
const usuarioKey = `usuario-${sufixoKey}`;
const tokenKey = `token-${sufixoKey}`;

export const useAuth = defineStore('auth', () => {
  const usuario = ref(JSON.parse(localStorage.getItem(usuarioKey)));
  const token = ref(localStorage.getItem(tokenKey));
  const isAuthenticated = ref(false);

  function setToken(nome, sobrenome, username, role, tokenValue) {
    localStorage.setItem(tokenKey, tokenValue);
    localStorage.setItem(usuarioKey, JSON.stringify({ nome, sobrenome, username, role }))
    usuario.value = { nome, sobrenome, username, role };
    token.value = tokenValue;
    isAuthenticated.value = true;
  };

  async function checkToken() {
    try {
      return await authenticationService.validateToken();
    } catch (error) {
      return false;
    }
  };

  function clear() {
    localStorage.removeItem(usuarioKey)
    localStorage.removeItem(tokenKey);
    usuario.value = null;
    token.value = null;
    isAuthenticated.value = false;
  };

  return {
    usuario,
    token,
    setToken,
    checkToken,
    isAuthenticated,
    clear
  };
});
