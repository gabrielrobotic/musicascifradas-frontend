import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
})

const ApiService = {
  async get(endpoint) {
    try {
      const response = await instance.get(endpoint)
      return response.data
    } catch (error) {
      throw new Error(`Erro ao fazer a solicitação GET para ${endpoint}: ${error}`)
    }
  },

  async post(endpoint, data) {
    try {
      const response = await instance.post(endpoint, data)
      return response.data
    } catch (error) {
      throw new Error(`Erro ao fazer a solicitação POST para ${endpoint}: ${error}`)
    }
  },

  async put(endpoint, data) {
    try {
      const response = await instance.put(endpoint, data)
      return response.data
    }
    catch (error) {
      throw new Error(`Erro ao fazer a solicitação PUT para ${endpoint}: ${error}`)
    }
  },

  async delete(endpoint) {
    try {
      const response = await instance.delete(endpoint)
      return response.data
    }
    catch (error) { throw new Error(`Erro ao fazer a solicitação DELETE para ${endpoint}: ${error}`) }
  }
}

// Aqui definir interceptors, headers, autenticação, etc., conforme necessário

export default ApiService