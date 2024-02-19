import { CHAIN, SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react"
import WebApp from "@twa-dev/sdk";

import { useContext, useState} from "react";
import { themeCtx } from "./App";

const transaction: SendTransactionRequest = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    network: CHAIN.TESTNET,
    messages: [
        {
            address: 'EQAZdaS8oCaAaWx0FYrae8k7YrvHpAGyUCF8r2q7hKqKJX1t',
            amount: '0',
        }
    ]
};

const Transcation = ()=>{
    const [theme] = useContext(themeCtx)
    const [tonConnectUI,] = useTonConnectUI()
    const [amount,setAmount] = useState(0)
    const send = () => {
        if (!tonConnectUI.connected) {
            WebApp.showAlert('请先连接')
            return
        }
        transaction.messages[0].amount = (amount * Math.pow(10, 9)) + ''
        tonConnectUI.sendTransaction(transaction)
    }
    
    return <div>
        
        <div className={`flex my-4 box-${theme}`}>
            <span>数量：</span>
            <input className="w-20 border" title="数量" type="number" defaultValue={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
            <span>TON</span>
        </div>
        <button onClick={send}>Send {amount} Ton</button>
    </div>
}
export default Transcation