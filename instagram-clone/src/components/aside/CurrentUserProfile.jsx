import React from "react";

const CurrentUserProfile = ({ user }) => {
  return (
    <div className="flex items-center mb-6 px-3 dark:text-white">
      <img
        // src={user.avatar}
        // alt={user.name}
        src={"/assets/test-profile.jpg"}
        alt="테스트 프로필 이미지"
        className="w-14 h-14 rounded-full mr-4"
      />
      <div>
        {/* <div className="font-bold text-sm">{user.username}</div>
        <div className="text-sm text-gray-500">{user.name}</div> */}
        <div className="font-bold text-sm cursor-pointer">gxu_oo</div>
        <div className="text-sm text-gray-500">규영</div>
      </div>
      <button className="ml-auto text-blue-500 font-semibold text-xs hover:text-blue-300 hover:cursor-pointer">
        전환
      </button>
    </div>
  );
};

export default CurrentUserProfile;
