import { useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function MyBtn() {
    const [show, setShow] = useState(0);
    return (
        <>

            <button
                onClick={() => {
                    setShow(show > 0 ? 0 : 1);
                    !show && WebApp.MainButton.show();
                    show && WebApp.MainButton.hide();
                  
                }}
            >
                {show ? "Hide" : "Show"} Button
            </button>
        </>
    );
}
