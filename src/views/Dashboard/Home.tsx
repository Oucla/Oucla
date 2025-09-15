import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

// SVG Icons
const icons = {
  revenue: (
    <span className="bg-[#FFDED2] rounded-full inline-flex items-center justify-center w-7 h-7">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="7"
          width="20"
          height="10"
          rx="2"
          stroke="#FF9800"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3" stroke="#FF9800" strokeWidth="2" />
      </svg>
    </span>
  ),
  tickets: (
    <span className="bg-[#F2E9FF] rounded-full inline-flex items-center justify-center w-7 h-7">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="8"
          width="16"
          height="8"
          rx="2"
          stroke="#A461D8"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" stroke="#A461D8" strokeWidth="2" />
      </svg>
    </span>
  ),
  viewers: (
    <span className="bg-[#D2F3FF] rounded-full inline-flex items-center justify-center w-7 h-7">
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="5"
          stroke="#17B6EC"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" stroke="#17B6EC" strokeWidth="2" />
      </svg>
    </span>
  ),
};

const statData = [
  {
    title: "Total Revenue",
    value: "₦310,000",
    icon: icons.revenue,
  },
  {
    title: "Tickets Sold",
    value: "10,000",
    icon: icons.tickets,
  },
  {
    title: "Total Viewers",
    value: "310,000",
    icon: icons.viewers,
  },
];

const eventsData = {
  upcoming: [
    {
      event: "Wizkid Concert",
      date: "Jul 24, 2024",
      tickets: 250,
      revenue: "Revenue",
      viewers: 500,
    },
    {
      event: "Wizkid Concert",
      date: "Jul 24, 2024",
      tickets: 250,
      revenue: "Revenue",
      viewers: 500,
    },
    {
      event: "Wizkid Concert",
      date: "Jul 24, 2024",
      tickets: 250,
      revenue: "Revenue",
      viewers: 500,
    },
  ],
  live: [
    {
      event: "Wizkid Concert",
      date: "Jul 24, 2024",
      tickets: 250,
      revenue: "Revenue",
      viewers: 500,
      live: true,
    },
  ],
  past: [
    {
      event: "Wizkid Concert",
      date: "Jul 24, 2024",
      tickets: 250,
      revenue: "Revenue",
      viewers: 500,
    },
    {
      event: "Taylor Swift Show",
      date: "Sep 30, 2024",
      tickets: 450,
      revenue: "Revenue",
      viewers: 1200,
    },
  ],
};

function EventTable({
  title,
  data,
  live = false,
  showMore = false,
}: {
  title: string;
  data: any[];
  live?: boolean;
  showMore?: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm mb-6">
      <div className="flex items-center justify-between px-6 pt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        {showMore && (
          <button className="border border-[#8C01264D]/[30%] text-[#8C0126] rounded-full px-4 py-1.5 text-xs font-medium hover:bg-[#fff4e3] duration-200">
            See more..
          </button>
        )}
      </div>
      <div className="overflow-x-auto pt-2 pb-4">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-[#F7F7F7] text-gray-800 text-sm font-semibold">
              <th className="py-4 px-6">Event</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Ticket Sold</th>
              <th className="py-4 px-6">Revenue</th>
              <th className="py-4 px-6">Viewers</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b last:border-b-0 text-base font-medium"
              >
                <td className="py-4 px-6 flex items-center gap-2">
                  {live && idx === 0 ? (
                    <span className="h-3 w-3 rounded-full bg-[#00C853] mr-2 inline-block"></span>
                  ) : null}
                  {row.event}
                </td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6">{row.tickets}</td>
                <td className="py-4 px-6">{row.revenue}</td>
                <td className="py-4 px-6">{row.viewers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full  py-6 px-2 sm:px-6">
        <div className="flex flex-col md:justify-start mb-5">
          <h2 className="font-semibold text-[24px]">Good evening Emmanuel</h2>
          <p className="text-[18px] font-normal">
            Welcome to overview dashboard
          </p>
        </div>
        <div className="flex md:justify-end mb-5">
          <button className="bg-[#FF9800] hover:bg-[#ffb449] text-white font-semibold rounded-lg px-8 py-4 shadow-sm transition-all duration-200 mt-2 md:mt-0">
            Create Event
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            {statData.map((stat, idx) => (
              <div
                key={idx}
                className="relative bg-[#FFFFFFCC]/[80%] rounded-tl-2xl shadow-sm flex-1 min-w-[220px] px-6 py-5 flex items-center gap-4 border border-[#002E871F]/[12%] "
              >
                <div className="absolute top-4 right-3">{stat.icon}</div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">
                    {stat.title}
                  </span>
                  <div className="text-2xl font-bold mt-1">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Tables */}
        <EventTable
          title="Upcoming Events"
          data={eventsData.upcoming}
          showMore={true}
        />
        <EventTable title="Live Events" data={eventsData.live} live={true} />
        <EventTable title="Past Events" data={eventsData.past} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
