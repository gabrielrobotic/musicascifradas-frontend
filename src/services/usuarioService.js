import ApiService from '@/services/apiService' 

const UsuarioService = {
  async obterUsuarios() {
    try { return await ApiService.get(`/usuarios`) }
    catch (error) { throw new Error(`Erro ao buscar usuarios: ${error}`) }
  },

  async obterUsuario(usuarioId) {
    try { return await ApiService.get(`/usuarios/${usuarioId}`) }
    catch (error) { throw new Error(`Erro ao buscar usuario com ID ${userId}: ${error}`) }
  },

  async criarUsuario(usuarioData) {
    try { return await ApiService.post('/usuarios', usuarioData) }
    catch (error) { throw new Error(`Erro ao criar usuario: ${error}`) }
  },

  async atualizarUsuario(usuarioId, usuarioData) {
    try { return await ApiService.put(`/usuarios/${usuarioId}`, usuarioData) }
    catch (error) { throw new Error(`Erro ao atualizar usuario: ${error}`) }
  },

  async excluirUsuario(usuarioId) {
    try { return await ApiService.delete(`/usuarios/${usuarioId}`) }
    catch (error) { throw new Error(`Erro ao excluir usuario: ${error}`) }
  }
}

export default UsuarioService