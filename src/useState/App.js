import { useState } from "react";

const App = () => {
    const [number, setNumber] = useState(() => 0);

    const handleOperation = (operator) => {
        if (operator === '+') {
            // previousNumber used to track the previous value of number state.
            setNumber((previousNumber) => {
                return previousNumber + 1;
            });
        } else number !== 0 ? setNumber((previousNumber) => {
            return previousNumber - 1;
        }) : setNumber(0);
    } 

    const element = (
        <>
            <h1>useState Hook</h1>
            <p style={{'fontSize': '30px'}}>{number}</p>
            <button onClick={handleOperation.bind(this, '+')}>+</button>
            <button onClick={handleOperation.bind(this, '-')}>-</button>
        </>
    );

    return element;
}

export default App;