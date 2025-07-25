import axios from 'axios';
import { useEffect, useState } from 'react';



const Home = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/')
            .then((res) => {
                setPosts(res.data.results);
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Error fetching blogs:', err);
            });
    }, []);



    return (
        <div className="grid gap-4 grid-cols-3">
            {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded-lg shadow bg-white">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700 mb-2 line-clamp-3">{post.content}</p>
                    <p className="text-sm text-gray-500">Author: {post.author.full_name}</p>
                </div>
            ))}
        </div>
    )
}

export default Home