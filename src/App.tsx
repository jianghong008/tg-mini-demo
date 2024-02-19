import './App.css'
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import Wallet from './Wallet'
import WebApp from '@twa-dev/sdk';
import { createContext, useState } from 'react';
WebApp.ready();
export const themeCtx = createContext<Array<any>>([])
const params = new URLSearchParams(window.location.hash.slice(1));
const data = new URLSearchParams(params.get('tgWebAppData')??'');
const user = JSON.parse(data.get('user')??'{}')

for(const [k,v] of params){
  console.log(k,'-',v)
}

function App() {
  return (
    <TonConnectUIProvider manifestUrl='https://jianghong008.github.io/tg-mini-demo/tonconnect-manifest.json' uiPreferences={{ theme: THEME.DARK }}>
      <themeCtx.Provider value={useState('light')}>
        <div>
          hi,{user.first_name} {user.last_name}
        </div>
        <Wallet />
      </themeCtx.Provider>
    </TonConnectUIProvider>
  )
}

export default App
