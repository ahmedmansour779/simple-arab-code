import axios from 'axios'
import { React, useEffect, useState } from 'react'

function FetchDataFromApiWithUseStateAndUseEffect() {
    const [loading, setloading] = useState(true)
    const [error, setError] = useState("")
    const [post, setPost] = useState({})
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                setloading(false)
                setError("")
                setPost(response.data)
            })
            .catch((error) => {
                setloading(false)
                setError("something went wrong")
                setPost({})
            })
    }, [])
    return (
        <div>
            {loading ? "loading..." : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchDataFromApiWithUseStateAndUseEffect;