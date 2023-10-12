import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton,useTonAddress,useTonWallet } from "@tonconnect/ui-react";

export default function MyBtn() {
    const [show, setShow] = useState(0);
    const address = useTonAddress()
    const wallet = useTonWallet()
    
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <h4>{wallet?.device.platform}</h4>
            <p className=" text-ellipsis whitespace-nowrap w-40 overflow-hidden">address:{address?address:'Not Connected'}</p>
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
            <button></button>
        </div>
    );
}
