import axios from 'axios';
import { useEffect, useState } from 'react';
import "./app.css";

export default function DataFetchingFromApi() {
    const [posts, setPosts] = useState([0]);
    const [post, setpost] = useState({});
    const [id, setId] = useState('')

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data)
            })
            .catch((error) => console.log('error 404'))
    });
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setpost(response.data)
            })
            .catch((error) => console.log('error 404'))
    }, [id]);

    return (
        <>
            <div>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <p>{`${id}`} : {post.title}</p><hr />
                <ul id='ulItems'>
                    {posts.map((posts) => (
                        <li key={Math.random()}>{posts.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
