import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { useXtsAuth } from './useXtsAuth'

function App(): JSX.Element {
  const fetchData = async (): Promise<void> => {
    try {
      const data = await window.electron.ipcRenderer.send('fetchApi')
      console.log('Data from API:', data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useXtsAuth()

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={fetchData}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
