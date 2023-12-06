import React from "react";
import "./posts.scss";
import Post from "../post/Post";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  console.log(data);
  return (
    <div className="posts">
      {error ? "Ошибка загрузки" : (isLoading
        ? "Загрузка"
        : data.map((post) => (
            <div className="post">
              <Post post={post} key={post.id} />
            </div>
          )))}
    </div>
  );
};

export default Posts;
