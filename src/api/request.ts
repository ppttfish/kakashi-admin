import server from '@/utils/http'
import type { AxiosPromise, AxiosRequestConfig } from 'axios'

export interface MyResponseType<T> extends AxiosPromise {
  code: number
  message: string
  data: T
}

const request = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  return server(config)
}

export default request
