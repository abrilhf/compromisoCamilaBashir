import HomePage from "./page/HomePage"
import './css/estilos.css'

import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <div>
            <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
            </>
        </div>
    )
}


export default App