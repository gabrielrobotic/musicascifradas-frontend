import { useAuth } from "@/stores/auth"
import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT
})

instance.interceptors.request.use(
  (config) => {
    const token = useAuth().token
    if (token) config.headers.Authorization = `Bearer ${token}`
    config.headers["Content-Type"] = 'application/json'
    config.headers["Accept"] = 'application/json'
    return config
  },
  (error) => { return Promise.reject(error) }
)

const apiService = {
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

const instanceTokeness = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT
})

const apiServiceTokeness = {
  async get(endpoint) {
    try {
      const response = await instanceTokeness.get(endpoint)
      return response.data
    } catch (error) {
      throw new Error(`Erro ao fazer a solicitação GET para ${endpoint}: ${error}`)
    }
  },

  async post(endpoint, data) {
    try {
      const response = await instanceTokeness.post(endpoint, data)
      return response.data
    } catch (error) {
      throw new Error(`Erro ao fazer a solicitação POST para ${endpoint}: ${error}`)
    }
  },

  async put(endpoint, data) {
    try {
      const response = await instanceTokeness.put(endpoint, data)
      return response.data
    }
    catch (error) {
      throw new Error(`Erro ao fazer a solicitação PUT para ${endpoint}: ${error}`)
    }
  },

  async delete(endpoint) {
    try {
      const response = await instanceTokeness.delete(endpoint)
      return response.data
    }
    catch (error) { throw new Error(`Erro ao fazer a solicitação DELETE para ${endpoint}: ${error}`) }
  }
}

export {
  apiService,
  apiServiceTokeness
}