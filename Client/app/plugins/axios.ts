import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  if (!config.public.apiBase) {
    console.error('API base URL missing')
  }

  const api = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  })

  return {
    provide: { api }
  }
})
