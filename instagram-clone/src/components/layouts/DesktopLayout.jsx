import React from "react";
import LeftNav from "../aside/left/LeftNav";
import RightSidebar from "../aside/right/RightSideBar";
import Stories from "../main/Stories";
import Post from "../main/Post";

const DesktopLayout = ({ user, width }) => {
  return (
    <div className="flex min-h-screen font-sans w-full">
      <LeftNav user={user} />

      <div className="flex-1 flex w-full justify-center flex-row ml-0 sm:ml-[72px] xl:ml-64">
        <main className="flex w-full justify-center items-stretch flex-row">
          <div className="flex w-full max-w-[630px] flex-col mt-4">
            <Stories />
            <Post />
          </div>
          {width > 1160 && (
            <div className="w-[383px] hidden lg:block">
              <RightSidebar user={user} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DesktopLayout;
