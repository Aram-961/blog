import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  // targeting category
  const cat = useLocation().search; // get the category from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching here
        const response = await axios.get(
          `http://localhost:3001/api/posts${cat}`
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='image'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
