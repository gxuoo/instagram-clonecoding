import React from "react";
import Icon from "../icons/Icon";

const TopNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-black flex items-center justify-between px-4 z-20">
      <div className="w-1/2">
        <Icon name="title" />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="relative flex items-center w-full max-w-xs bg-[#EFEFEF] dark:bg-[#363636] rounded-md px-3 py-1">
          <button
            type="button"
            className="left-3 flex items-center justify-center pr-2"
            aria-label="검색"
          >
            <svg
              aria-label="검색"
              fill="currentColor"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <title>검색</title>
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
          </button>
          <input
            type="search"
            placeholder="검색"
            className="flex-grow bg-transparent focus:outline-none text-left placeholder-gray-500 dark:placeholder-gray-400"
            aria-label="입력 검색"
            autoCapitalize="none"
          />
        </div>

        <div className="flex pl-3 items-center justify-end cursor-pointer">
          <Icon name="notifications" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
