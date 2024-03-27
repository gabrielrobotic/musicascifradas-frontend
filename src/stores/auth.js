import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { authenticationService } from '@/services/authentication'

export const useAuth = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token-aulas-de-musica'))
  const isAuthenticated = ref(false)

  function setToken(tokenValue) {
    localStorage.setItem('token-aulas-de-musica', tokenValue)
    token.value = tokenValue
    isAuthenticated.value = true
  }

  async function checkToken() {
    try {
      return await authenticationService.validateToken()
    } catch (error) {
      return false
    }
  }

  function clear() {
    localStorage.removeItem('token-aulas-de-musica')
    token.value = null
    isAuthenticated.value = false
  }

  return {
    token,
    setToken,
    checkToken,
    isAuthenticated,
    clear
  }
})
