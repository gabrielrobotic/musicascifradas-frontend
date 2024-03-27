import { apiService } from '@/services/apiService'

const usuarioService = {
  async obterUsuarios() {
    try { return await apiService.get(`/usuarios`) }
    catch (error) { throw new Error(`Erro ao buscar usuarios: ${error}`) }
  },

  async obterUsuario(usuarioId) {
    try { return await apiService.get(`/usuarios/${usuarioId}`) }
    catch (error) { throw new Error(`Erro ao buscar usuario com ID ${userId}: ${error}`) }
  },

  async criarUsuario(usuarioData) {
    try { return await apiService.post('/usuarios', usuarioData) }
    catch (error) { throw new Error(`Erro ao criar usuario: ${error}`) }
  },

  async atualizarUsuario(usuarioId, usuarioData) {
    try { return await apiService.put(`/usuarios/${usuarioId}`, usuarioData) }
    catch (error) { throw new Error(`Erro ao atualizar usuario: ${error}`) }
  },

  async excluirUsuario(usuarioId) {
    try { return await apiService.delete(`/usuarios/${usuarioId}`) }
    catch (error) { throw new Error(`Erro ao excluir usuario: ${error}`) }
  }
}

export {
  usuarioService
}