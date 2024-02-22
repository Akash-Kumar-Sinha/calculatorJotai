import React from "react";
import Calculator from './Calculator'
import { useAtomValue } from "jotai";
import { calculate } from "./atom";

import './App.css'

const App = () => {
    const result = useAtomValue(calculate)
    return(
        <div>
            <Calculator/>
            <div className="jotaiExp">
            <h3>Result in App = {result}</h3>
            </div>
        </div>
    )
}

export default App;