import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [resource, setResource] = useState("");
    const [resourceType, setResourceType] = useState("posts");
    const [isShowResource, setIsShowResource] = useState(false);

    // do API call whenever resourceTypre state modified
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => {
                console.log(response);
                setResource(JSON.stringify(response, null, 2))
            })
            .catch(error => console.error(error))
    }, [resourceType]);

    const element = (
        <>
            <h1>useEffect Hook</h1>

            <p>Current resource: {resourceType}</p>

            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("todos")}>Todos</button>

            <button style={{
                'marginLeft': '10px'
            }} onClick={() => setIsShowResource(!isShowResource)}>{isShowResource ? "Hide" : "Show"} resource</button>

            <pre>
                {isShowResource ? resource : ""}
            </pre>
        </>
    );

    return element;
}

export default App;