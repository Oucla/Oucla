import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

type RevenueBarProps = {
  value: number;
  max: number;
  color: string;
};
const RevenueBar: React.FC<RevenueBarProps> = ({ value, max, color }) => (
  <div className="w-full mt-3">
    <div className="w-full h-2 rounded-full bg-gray-200 flex items-center">
      <div
        className="h-2 rounded-full transition-all"
        style={{
          width: `${Math.min((value / max) * 100, 100)}%`,
          backgroundColor: color,
        }}
      />
    </div>
  </div>
);

const ticketSales = [
  {
    label: "Standard Ticket Revenue",
    amount: 510_000,
    color: "#32E02A",
    max: 600_000,
  },
  {
    label: "VR Ticket Revenue",
    amount: 70_000,
    color: "#D34AFF",
    max: 600_000,
  },
  {
    label: "Microtransactions",
    amount: 310_000,
    color: "#FF9800",
    max: 600_000,
  },
];

const otherRevenue = [
  {
    label: "Advertising Revenue",
    amount: 510_000,
    color: "#0DE0C6",
    max: 600_000,
  },
];

const Revenue: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col items-start ml-5 ">
        <div className="flex flex-col md:justify-start mb-5">
          <h2 className="font-semibold text-[24px]">Revenue</h2>
          <p className="text-[18px] font-normal">
            Here’s your revenue summary at a glance
          </p>
        </div>
        <section className="w-full max-w-[95%] bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-8 mb-8">
          <span className="text-gray-700 font-medium">Total Revenue</span>
          <div className="text-3xl font-bold mb-1 mt-2">N310,000</div>
          <div className="mt-2">
            <div className="w-full h-2 rounded-full bg-gray-200 flex items-center">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: "93%",
                  backgroundColor: "#17B6EC",
                }}
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-[95%] bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-8 mb-8">
          <h2 className="text-xl font-semibold mb-5">Ticket Sales</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {ticketSales.map((sale) => (
              <div
                key={sale.label}
                className="flex-1 bg-[#f7f7f7] rounded-xl border border-[#eaeaea] p-5 min-w-[220px] shadow-sm"
              >
                <div className="font-medium text-gray-700 mb-2">
                  {sale.label}
                </div>
                <div className="font-bold text-2xl mb-1">
                  N{sale.amount.toLocaleString()}
                </div>
                <RevenueBar
                  value={sale.amount}
                  max={sale.max}
                  color={sale.color}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="w-full max-w-[95%] bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-8 mb-8">
          <h2 className="text-xl font-semibold mb-5">Other Revenue Stream</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {otherRevenue.map((item) => (
              <div
                key={item.label}
                className="flex-1 bg-[#f7f7f7] rounded-xl border border-[#eaeaea] p-5 min-w-[220px] shadow-sm"
              >
                <div className="font-medium text-gray-700 mb-2">
                  {item.label}
                </div>
                <div className="font-bold text-2xl mb-1">
                  N{item.amount.toLocaleString()}
                </div>
                <RevenueBar
                  value={item.amount}
                  max={item.max}
                  color={item.color}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Revenue;
