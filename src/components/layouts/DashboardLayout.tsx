import React, { useState } from "react";
import Sidebar from "@/components/globals/Sidebar";
import DashboardHeader from "../globals/DashboardHeader";

type DashboardLayoutProps = React.PropsWithChildren<{
  handleLogout?: () => void;
}>;

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  handleLogout,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex bg-[#FFF4F7]">
      <aside className="hidden lg:flex lg:flex-shrink-0 lg:w-72">
        <Sidebar open={true} />
      </aside>

      <div className="lg:hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 w-full min-w-0 h-screen overflow-y-auto bg-[#FFF4F7] relative hide-scrollbar">
        <button
          className="lg:hidden fixed top-4 left-4 z-[60] p-3 rounded-lg bg-[#8C0126] shadow-lg hover:bg-[#6d0020] transition-colors duration-200"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className=" ">
          <div className="relative  mb-6">
            <DashboardHeader />
          </div>

          {typeof navigator !== "undefined" && navigator.onLine ? (
            children
          ) : (
            <div className="flex flex-col items-center justify-center p-8">
              <p className="text-gray-600 mb-4">You appear to be offline.</p>
              <button
                onClick={() =>
                  handleLogout ? handleLogout() : window.location.reload()
                }
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                {handleLogout ? "Logout" : "Retry"}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/50 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}
    </div>
  );
};

export default DashboardLayout;
