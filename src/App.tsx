import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import MyBtn from './MyBtn'
import WebApp from '@twa-dev/sdk';
WebApp.ready();
function App() {

  return (
    <TonConnectUIProvider manifestUrl='https://jianghong008.github.io/tg-mini-demo/tonconnect-manifest.json'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Telegram Mini</h1>
      <div className="card">
        <MyBtn/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
