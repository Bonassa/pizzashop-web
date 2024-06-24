import axios, { InternalAxiosRequestConfig } from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

async function delayedLocalRequestInterceptor(
  config: InternalAxiosRequestConfig,
) {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.round(Math.random() * 3000)),
  )

  return config
}

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(delayedLocalRequestInterceptor)
}
