import { useRef, useState, useEffect } from "react";

const App = () => {
    const [number, setNumber] = useState(0);

    // useRef returns Object with `current` property
    const totalRender = useRef(0);
    const textInputRef = useRef();

    useEffect(() => {
        totalRender.current = totalRender.current + 1;

        // modify value of text input through it's ref
        textInputRef.current.value = number;
    })

    const element = (
        <>
            <h1>useRef</h1>
            <input ref={textInputRef} type="text" />
            <p>Number: {number}</p>
            <p>Component rendered {totalRender.current} times.</p>

            <button onClick={() => setNumber(previousNumber => previousNumber + 1)}>Click me!</button>
        </>
    );

    return element;
}

export default App;