import { apiService, apiServiceTokeness } from "./apiService"

const authenticationService = {
  async login(authData) {
    try { return await apiServiceTokeness.post(`/auth/login`, authData) }
    catch (error) { throw new Error(`Erro ao fazer login: ${error}`) }
  },

  async validateToken() {
    try {
      return await apiService.get('/auth/validate-token')
    }
    catch (error) { throw new Error(`Erro ao validar token: ${error}`) }
  }

}

export {
  authenticationService
}