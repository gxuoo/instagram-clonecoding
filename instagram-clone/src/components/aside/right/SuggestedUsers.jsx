import React from "react";
import Icon from "../../icons/Icon";

const SuggestedUser = ({ user }) => (
  <li className="flex items-center">
    <img
      src={user.avatar}
      alt={user.username}
      className="w-8 h-8 rounded-full mr-3"
    />
    <div className="flex-grow">
      <div className="flex items-center gap-1">
        <span className="font-bold text-sm dark:text-white">
          {user.username}
        </span>
        {user.verified && <Icon name="verified" className="w-3 h-3" />}
      </div>
      <span className="text-xs text-gray-400">{user.desc}</span>
    </div>
    <button className="text-blue-500 font-semibold text-xs hover:text-blue-300 hover:cursor-pointer">
      팔로우
    </button>
  </li>
);

const SuggestedUsers = ({ users }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-3">
        <h2 className="text-sm font-semibold text-gray-500">
          회원님을 위한 추천
        </h2>
        <button className="text-xs font-bold dark:text-white">모두 보기</button>
      </div>
      <ul className="flex flex-col gap-4 px-3">
        {users.map((user) => (
          <SuggestedUser key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default SuggestedUsers;
