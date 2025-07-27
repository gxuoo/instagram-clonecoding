import React from "react";
import Icon from "../Icons/Icon";

const navItems = ["home", "explore", "reels", "create", "messages", "profile"];

const BottomNav = ({ user }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 flex items-center justify-around z-20">
      {navItems.map((item) => (
        <div key={item} className="cursor-pointer">
          {item === "profile" ? (
            <img
              src={"/assets/test-profile.jpg"}
              alt="Profile"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <Icon name={item} />
          )}
        </div>
      ))}
    </footer>
  );
};

export default BottomNav;
