import { useMemo, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(1);
    /**
     * Memorizing the value of number state.
     * If we don't implement useMemo, the slow function will be executed everytime any states modified.
     */
    const incrementedNumber = useMemo(() => slowIncrement(number), [number]);
    const [name, setName] = useState("React");

    // this slow function will be executed only when number state value is modified
    function slowIncrement(number) {
        // modify the limit of the loop to big int such as 900000000 to simulate complex and slow func.
        for(let i = 0; i < 1; i++) {}
        return number + 1;
    }

    const element = (
        <>
            <h1>useMemo</h1>

            <p style={{
                'marginLeft': '10px'
            }}>Number: {number}</p>

            <p style={{
                'marginLeft': '10px'
            }}>Incremented number: {incrementedNumber}</p>

            <p>{name}</p>

            <button onClick={() => setNumber((prevNumber) => {return prevNumber + 1})}>Change number</button>
            <button onClick={() => {
                if (name === "React") {
                    setName("Developer");
                } else setName("React");
            }}>Change name</button>
        </>
    );

    return element;
}

export default App;