import React from 'react';
import TopNav from '../nav/TopNav';
import BottomNav from '../nav/BottomNav';
import Stories from '../main/Stories';
import Post from '../main/Post';

const MobileLayout = ({ user }) => {
  return (
    <div className="w-full">
      <TopNav />
      <main className="pt-14 pb-14">
        <Stories />
        <Post />
      </main>
      <BottomNav user={user} />
    </div>
  );
};

export default MobileLayout;
