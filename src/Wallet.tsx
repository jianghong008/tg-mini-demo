import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import {
    TonConnectButton,
    useTonWallet,
    useTonConnectUI,
    SendTransactionRequest
} from "@tonconnect/ui-react";

const transaction:SendTransactionRequest = {
    validUntil: Math.floor(Date.now() / 1000) + 360,
    messages: [
        {
            address: 'EQAZdaS8oCaAaWx0FYrae8k7YrvHpAGyUCF8r2q7hKqKJX1t',
            amount: '0.05',
        }
    ]
};

export default function MyBtn() {
    const [show, setShow] = useState(0);
    const wallet = useTonWallet();
    const [tonConnectUI, ] = useTonConnectUI()
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <h4>{wallet?.device.appName}</h4>
            <TonConnectButton />
            <button
                onClick={() => {
                    setShow(show > 0 ? 0 : 1);
                    !show && WebApp.MainButton.show();
                    show && WebApp.MainButton.hide();
                }}
            >
                {show ? "Hide" : "Show"} Button
            </button>
            <button onClick={()=>tonConnectUI.sendTransaction(transaction)}>send</button>
        </div>
    );
}
