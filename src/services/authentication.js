import ApiService from '@/services/apiService' 

const AuthenticationService = {
  async login(authData) {
    try { return await ApiService.post(`/auth/login`, authData) }
    catch (error) { throw new Error(`Erro ao fazer login: ${error}`) }
  }
}

export default AuthenticationService