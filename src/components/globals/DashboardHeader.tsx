import React, { useState } from "react";

const DashboardHeader: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header className="w-full flex items-center justify-end lg:justify-normal gap-5 px-4 py-3 bg-transparent border-b">
      <div className="flex-1 hidden lg:block">
        <div className="flex items-center bg-[#8C012614]/[8%] border border-[#8C01261A]/[10%] rounded-xl px-4 py-3 w-full max-w-full">
          <svg
            className="w-5 h-5 text-[#7B0632] mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.3}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" stroke="#7B0632" strokeWidth="2.3" />
            <path
              d="M21 21l-4.35-4.35"
              stroke="#7B0632"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none border-none flex-1 text-[1.1rem] font-medium placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 ml-2">
        <button className="p-0 focus:outline-none">
          <svg width="37" height="37" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 27a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3ZM25 22v-6a9 9 0 1 0-18 0v6l-1 1v1h20v-1l-1-1Z"
              fill="#7B0632"
            />
          </svg>
        </button>
        <div className="w-12 h-12 rounded-full bg-[#FFFFFF] p-[2px] border-2 border-[#0000001F]/[12%] flex items-center justify-center overflow-hidden">
          <img
            src="/icons/user.png"
            alt="User Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Toggle Switch */}
        <button
          onClick={() => setIsToggled(!isToggled)}
          className={`
          w-14 h-8 rounded-full border-2 border-[#7B0632] 
          flex items-center px-1 transition-all duration-300
          ${isToggled ? "bg-[#7B0632]" : "bg-[#F8EBF1]"}
        `}
        >
          <span
            className={`
            w-6 h-6 rounded-full transition-all duration-300
            ${
              isToggled
                ? "bg-[#F8EBF1] transform translate-x-5"
                : "bg-[#7B0632] transform translate-x-0"
            }
          `}
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
