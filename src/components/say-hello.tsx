import { useState } from "react"
import { gql, useMutation } from "@apollo/client";

const SAY_HELLO_MUTATION = gql(`
    mutation sayHello($name: String!) {
        sayHello(name: $name) {
            hello
            name
            helloWithName
        }
    }
`);

const SayHello: React.FC = () => {
    const [name, setName] = useState("");
    const [sayHello, { data }] = useMutation(SAY_HELLO_MUTATION);

    

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => sayHello({ variables: { name } })}>Say Hello</button>
            <h3>{ data?.sayHello.helloWithName } </h3>
        </div>
    );
};

export default SayHello;