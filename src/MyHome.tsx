import { useContext } from "react"
import { themeCtx } from "./App"

const MyHome = ()=>{
   
    const [theme,setTheme] = useContext(themeCtx)
    return <div>
        <h3>{theme}</h3>
        <button onClick={()=>setTheme(theme=='dark'?'light':'dark')}>change theme</button>
    </div>
}
export default MyHome