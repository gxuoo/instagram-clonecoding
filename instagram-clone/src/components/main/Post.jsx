import React from "react";
import useFetch from "../../hooks/useFetch";
import PostItem from "./PostItem";
import { API_ROUTES } from "../../constants/api";

const Post = () => {
  const { data: posts, loading, error } = useFetch(API_ROUTES.POSTS);

  if (loading) return <div>게시물 로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default Post;
