
import './App.css'
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import Wallet from './Wallet'
import WebApp from '@twa-dev/sdk';
WebApp.ready();
function App() {

  return (
    <TonConnectUIProvider manifestUrl='https://jianghong008.github.io/tg-mini-demo/tonconnect-manifest.json' uiPreferences={{theme:THEME.DARK}}>
      <h3>Telegram Mini</h3>
      <div className="card">
        <Wallet/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
