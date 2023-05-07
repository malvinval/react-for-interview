import { useMemo, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);
    const [numState, setNumState] = useState(0);

    const selfMultiplication = (num) => {
        // uncomment code below to see the advantage of using useMemo
        // for(let i = 0; i < 900000000; i++) {};
        return num * num;
    }

    /**
     * With useMemo, selfMultiplication will be re-executed only when num state is modified.
     * Otherwise, selfMultiplication will be re-executed whenever component re-render.
     */
    const number = useMemo(() => {
        selfMultiplication(50);
    }, [num]);
    
    const element = (
        <>
            <h1>useMemo</h1>
            <p>Num: {num}</p>
            <p>Num state: {numState}</p>

            <button onClick={() => setNum(prevNum => prevNum + 1)}>Modify Num</button>
            <button onClick={() => setNumState(prevNumState => prevNumState + 1)}>Modify Num State</button>
        </>
    )
        
    return element;
}

export default App;