import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

const authenticateXts = async (): Promise<AxiosResponse> => {
  const response = await axios.post(
    'http://ctrade.jainam.in:3001/apimarketdata/auth/login',
    {
      appKey: '22100991eeb4ac8f602880',
      secretKey: 'Rkfc546$9R',
      source: 'WebAPI'
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response
}

export const useXtsAuth = (): UseQueryResult => {
  return useQuery({
    queryKey: ['auth', 'xts'],
    queryFn: () => authenticateXts(),
    retry: 0,
    refetchOnWindowFocus: false
  })
}
