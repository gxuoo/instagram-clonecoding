import React from "react";
import Icon from "../icons/Icon";

const PostItem = ({ post }) => {
  return (
    <div className="w-full max-w-[470px] mb-5 border-b border-gray-200 dark:border-[#262626]">
      {/* 게시물 헤더 */}
      <div className="flex items-center px-4 py-3">
        <img
          src={post.avatar}
          alt={post.username}
          className="w-8 h-8 rounded-full mr-3 cursor-pointer"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm cursor-pointer dark:text-white">
              {post.username}
            </span>
            {post.verified && <Icon name="verified" className="w-3 h-3" />}
            <span className="text-xs text-gray-400">• {post.time}</span>
          </div>
          {post.location && (
            <span className="text-xs text-gray-400 cursor-pointer">
              {post.location}
            </span>
          )}
        </div>
        <button className="ml-auto cursor-pointer">
          <Icon name="more" />
        </button>
      </div>

      {/* 게시물 이미지 */}
      <img
        src={post.image}
        alt="Post content"
        className="w-full rounded-sm object-cover"
      />

      {/* 게시물 액션 및 정보 */}
      <div className="py-4 px-2">
        <div className="flex items-center gap-4 mb-2">
          <button className="cursor-pointer">
            <Icon name="notifications" />
          </button>
          <button className="cursor-pointer">
            <Icon name="comment" />
          </button>
          <button className="cursor-pointer">
            <Icon name="messages" />
          </button>
          <button className="ml-auto cursor-pointer">
            <Icon name="save" />
          </button>
        </div>
        <div className="font-bold text-sm mb-2 dark:text-white">
          {post.likes} likes
        </div>
        <div className="text-sm mb-2">
          <span className="font-bold cursor-pointer dark:text-white">
            {post.username}
          </span>
          <span className="ml-2 dark:text-white">{post.description}</span>
        </div>
        <div className="text-sm text-gray-500 cursor-pointer mb-2">
          View all {post.commentsCount} comments
        </div>
        <div className="text-xs text-gray-400 uppercase">{post.time} ago</div>
      </div>

      {/* 댓글 입력란 */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="댓글을 입력하세요..."
          className="w-full bg-transparent outline-none text-sm dark:text-white"
        />
      </div>
    </div>
  );
};

export default PostItem;
