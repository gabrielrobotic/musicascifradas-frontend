import ApiService from '@/services/apiService'

const MusicaService = {
  async obterMusicas(titulo, cantor) {
    try { 
      const interrogacao = titulo || cantor ? '?' : ''
      titulo = titulo ? 'titulo=' + titulo : ''
      cantor = cantor ? 'cantor=' + cantor : ''
      return await ApiService.get(`/musicas${interrogacao}${titulo}${cantor}`)
    }
    catch (error) { throw new Error(`Erro ao buscar músicas: ${error}`) }
  },

  async obterMusica(musicaId) {
    try { return await ApiService.get(`/musicas/${musicaId}`) }
    catch (error) { throw new Error(`Erro ao buscar música com ID ${userId}: ${error}`) }
  },

  async criarMusica(musicaData) {
    try { return await ApiService.post('/musicas', musicaData) }
    catch (error) { throw new Error(`Erro ao criar música: ${error}`) }
  },

  async atualizarMusica(musicaId, musicaData) {
    try { return await ApiService.put(`/musicas/${musicaId}`, musicaData) }
    catch (error) { throw new Error(`Erro ao atualizar música: ${error}`) }
  },

  async excluirMusica(musicaId) {
    try { return await ApiService.delete(`/musicas/${musicaId}`) }
    catch (error) { throw new Error(`Erro ao excluir música: ${error}`) }
  }
}

export default MusicaService