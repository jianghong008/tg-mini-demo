import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton,useTonAddress } from "@tonconnect/ui-react";

export default function MyBtn() {
    const [show, setShow] = useState(0);
    const address = useTonAddress()
    return (
        <div className="flex flex-center flex-col flex-gap">
            <p>address:{address?address:'Not Connected'}</p>
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
