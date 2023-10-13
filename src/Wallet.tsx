import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import {
    TonConnectButton,
    useTonWallet,
    useTonConnectUI,
    SendTransactionRequest,
    CHAIN,
} from "@tonconnect/ui-react";

const amount = 0.1

const transaction: SendTransactionRequest = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    network: CHAIN.TESTNET,
    messages: [
        {
            address: 'EQAZdaS8oCaAaWx0FYrae8k7YrvHpAGyUCF8r2q7hKqKJX1t',
            amount: (amount * Math.pow(10, 9)) + '',
        }
    ]
};

export default function MyBtn() {
    const [show, setShow] = useState(0);
    const wallet = useTonWallet();
    const [tonConnectUI,] = useTonConnectUI()

    WebApp.MainButton.setText('主按钮')

    const send = () => {
        if (!tonConnectUI.connected) {
            WebApp.showAlert('请先连接')
            return
        }
        tonConnectUI.sendTransaction(transaction)
    }
    const setBtn = () => {
        setShow(show > 0 ? 0 : 1);
        !show && WebApp.MainButton.show();
        show && WebApp.MainButton.hide();
    }
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <h4>{wallet?.device.appName}</h4>
            <TonConnectButton />
            <button onClick={setBtn }>
                {show ? "Hide" : "Show"} Bottom Button
            </button>
            {tonConnectUI.connected && (
                <button onClick={send}>Send {amount} Ton</button>
            )}


        </div>
    );
}
