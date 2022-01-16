import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export const AllPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(setPosts);
    }, [])

    const fetchPosts = async (setPosts) => {
        const response = await fetch("http://localhost:5000/posts", {
          method: "GET",
        });
        const data = await response.json();
        setPosts(data);
      };

    return (
        <div>
        {posts.map((item, index) => {
            return (
            <div>
                <PostCard key={index} title={item.title} content={item.content} />
              </div>
            );
          })}</div>
    )
}