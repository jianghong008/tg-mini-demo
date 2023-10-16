import { useState,useEffect, } from "react";
import WebApp from "@twa-dev/sdk";
import {
    TonConnectButton,
    useTonWallet,
    useTonConnectUI,
} from "@tonconnect/ui-react";

import Transcation from "./Transcation";

export default function MyBtn() {
    const [show, setShow] = useState(0);
    const wallet = useTonWallet();
    const [tonConnectUI,] = useTonConnectUI()

    WebApp.MainButton.setText('主按钮')

    const setBtn = () => {
        setShow(show > 0 ? 0 : 1);
        !show && WebApp.MainButton.show();
        show && WebApp.MainButton.hide();
    }

    useEffect(()=>{
        console.log('show')
    },[show])

    useEffect(()=>{
        console.log('wallet')
    },[wallet])

    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <h4>{wallet?.device.appName}</h4>
            <TonConnectButton />
            <button onClick={setBtn }>
                {show ? "Hide" : "Show"} Bottom Button
            </button>
            {tonConnectUI.connected && (
                <Transcation/>
            )}
        </div>
    );
}
