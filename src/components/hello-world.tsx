import { useQuery, gql } from "@apollo/client";


const HELLO_WORLD_QUERY = gql(`
    query HelloWorld {
        hello {
            hello
            name
            helloWithName
        }  
    }
`);

const HelloWorld: React.FC = () => {
    const { loading, data } = useQuery(HELLO_WORLD_QUERY);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <div>{data.hello.helloWithName}</div>;
};

export default HelloWorld;