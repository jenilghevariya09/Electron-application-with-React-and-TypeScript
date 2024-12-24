import axios, { AxiosResponse } from 'axios'

export const login = async (): Promise<AxiosResponse> => {
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
