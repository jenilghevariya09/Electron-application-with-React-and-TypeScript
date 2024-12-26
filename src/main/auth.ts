// registrationController.ts
import { ipcMain } from 'electron'
// import { useXtsAuth } from './useXtsAuth' // use this for react query
import { login } from './login' // use this for direct login
import { AxiosResponse } from 'axios'

const loginRegister = async (): Promise<AxiosResponse> => {
  try {
    ipcMain.handle('login', async () => {
      try {
        console.log('Handling login request...')
        // const response = await useXtsAuth()  //use this for react query
        const response = await login() // use this for direct login
        console.log('API response:', response?.data)
        return response.data // Return the data to the renderer
      } catch (error) {
        console.error('Authentication failed:', error)
        throw new Error('Authentication failed')
      }
    })
  } catch (error) {
    console.log('loginRegister error:', error)
  }
}

export { loginRegister }
