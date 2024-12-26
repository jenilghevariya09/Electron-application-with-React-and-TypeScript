import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

const authenticateXts = async (): Promise<AxiosResponse> => {
  const response = await window.electron.ipcRenderer.invoke('login')
  console.log(response, 'new response')
  return response
}

const useXtsAuth = (): UseQueryResult => {
  return useQuery({
    queryKey: ['auth', 'xts'],
    queryFn: () => authenticateXts(),
    retry: 0,
    refetchOnWindowFocus: false
  })
}

export default useXtsAuth
