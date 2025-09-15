import React from "react";
import { RouterConstantUtil } from "@/lib/RouterContantUtils";
import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    label: "Home",
    path: RouterConstantUtil.page.eventOwner.HOME,
    icon: (active: boolean) => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 14.6667L16 8L24 14.6667V24C24 24.7364 23.7364 25.3333 23 25.3333H9C8.2636 25.3333 8 24.7364 8 24V14.6667Z"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 25.3333V18.6667H18.6666V25.3333"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    active: true,
  },
  {
    label: "Events",
    path: RouterConstantUtil.page.eventOwner.EVENTS,
    icon: (active: boolean) => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="6"
          y="8"
          width="20"
          height="18"
          rx="2"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <path
          d="M10 6V10"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 6V10"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 14H26"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <rect
          x="13"
          y="18"
          width="6"
          height="4"
          rx="1"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
      </svg>
    ),
    active: false,
  },
  {
    label: "Ticket Management",
    path: RouterConstantUtil.page.eventOwner.TICKET_MANAGEMENT,
    icon: (active: boolean) => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="5"
          y="10"
          width="22"
          height="12"
          rx="2"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <path
          d="M11 10V22"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <path
          d="M21 10V22"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="2"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
      </svg>
    ),
    active: false,
  },
  {
    label: "Live Streaming Setup",
    path: RouterConstantUtil.page.eventOwner.LIVE_STREAMING,
    icon: (active: boolean) => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="4"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <path
          d="M16 6V2M16 30V26M6 16H2M30 16H26"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
      </svg>
    ),
    active: false,
  },
  {
    label: "Revenue",
    path: RouterConstantUtil.page.eventOwner.REVENUE,
    icon: (active: boolean) => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="6"
          y="10"
          width="20"
          height="12"
          rx="2"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="3"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
        <path
          d="M11 18C11 17.4477 13.2386 17 16 17C18.7614 17 21 17.4477 21 18"
          stroke={active ? "#FF9800" : "#fff"}
          strokeWidth="2"
        />
      </svg>
    ),
    active: false,
  },
];

const Sidebar: React.FC<{ open: boolean; onClose?: () => void }> = ({
  open,
  onClose,
}) => {
  const location = useLocation();

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-full w-72
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0 lg:z-auto
        lg:rounded-tr-[40px] lg:rounded-br-[40px]
        bg-gradient-to-b from-[#8C0126] to-[#420147]
        flex flex-col
        overflow-hidden
        shadow-2xl lg:shadow-none
      `}
      // style={{
      //   backgroundImage: "url('/images/sidebar_bg.svg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="absolute top-0 left-0 ">
        <img src="/images/oucla_2.png" />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img src="/images/oucla_1.png" />
      </div>
      {/* Logo section */}
      <div className="flex flex-col items-start mt-8 mb-12 relative z-10 ml-5">
        <img
          src="/full_logo.png"
          alt="Oucla logo"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 relative z-10">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              to={item.path}
              key={item.label}
              onClick={() => {
                if (onClose && window.innerWidth < 1024) {
                  onClose();
                }
              }}
              className={`
                flex items-center gap-3 px-2 py-4 cursor-pointer text-[19px] 
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-[#FF9800] rounded-tl-2xl ml-4 font-semibold"
                    : "text-white hover:bg-white/10 rounded-tl-2xl ml-4 font-medium"
                }
              `}
            >
              <span>{item.icon(isActive)}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile close button */}
      {onClose && (
        <button
          className="lg:hidden absolute top-6 right-6 text-white z-20 p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
