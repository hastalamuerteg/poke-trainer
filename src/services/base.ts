import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IPokemonResponse, Pokemon } from '../types'

export const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
})

interface IMessageErrors {
  error?: string
  statusCode: number
  id?: string
  message: string
}

interface IApiResponse<T> {
  success: boolean
  data: T
  error?: IMessageErrors[]
}

export const request = async <T>(
  options: AxiosRequestConfig,
): Promise<IApiResponse<T>> => {
  const onSuccess = (response: AxiosResponse<T>) => ({
    success: true,
    data: response.data,
  })

  const onError = (error: any) => ({
    success: false,
    data: error.data,
    errors: [error.response.data],
  })

  return client(options).then(onSuccess).catch(onError)
}

export const getPokemonList = async (
  page: number,
): Promise<IApiResponse<IPokemonResponse>> => {
  const offset = 9 * (page - 1)
  return request({
    // eslint-disable-next-line prettier/prettier
    baseURL: `${import.meta.env.VITE_BACKEND_URL as string}/pokemon?offset=${offset}&limit=9`,
    method: 'GET',
  })
}

export const getPokemon = async (
  pokemon: string,
): Promise<IApiResponse<Pokemon>> =>
  request({
    baseURL: `${import.meta.env.VITE_BACKEND_URL as string}/pokemon/${pokemon}`,
    method: 'GET',
  })
