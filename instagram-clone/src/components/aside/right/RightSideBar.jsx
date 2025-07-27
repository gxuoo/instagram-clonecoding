import React from "react";
import useFetch from "../../../hooks/useFetch";
import CurrentUserProfile from "../CurrentUserProfile";
import SuggestedUsers from "./SuggestedUsers";
import RightSidebarFooter from "../right/RightSideBarFooter";

const RightSidebar = ({ user }) => {
  const {
    data: recommendations,
    loading,
    error,
  } = useFetch("/api/recommendations");

  return (
    <aside className="w-full h-screen sticky top-0 overflow-y-auto pl-16 pt-9">
      <div>
        <CurrentUserProfile user={user} />

        {loading && <div>추천 로딩 중...</div>}
        {error && <div>오류: {error}</div>}
        {recommendations && <SuggestedUsers users={recommendations} />}

        <RightSidebarFooter />
      </div>
    </aside>
  );
};

export default RightSidebar;
