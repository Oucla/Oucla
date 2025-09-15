import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

interface TicketTier {
  id: string;
  name: string;
  desc: string;
  price: string;
  total: string;
  revenue: string;
}

const initialTicketTiers: TicketTier[] = [
  {
    id: "1",
    name: "Free ticket",
    desc: "Free ticket to the event",
    price: "N0",
    total: "300 persons",
    revenue: "N0",
  },
  {
    id: "2",
    name: "Pay per view",
    desc: "Pay per view access",
    price: "N25,000",
    total: "300 persons",
    revenue: "N7.5M",
  },
  {
    id: "3",
    name: "VR Premium",
    desc: "Premium VR experience",
    price: "N25,000",
    total: "300 persons",
    revenue: "N7.5M",
  },
];

const salesStats = [
  {
    label: "Total Ticket sold",
    value: "1,250",
    change: "+10%",
    up: true,
  },
  {
    label: "Revenue Generated",
    value: "N250M",
    change: "+15%",
    up: true,
  },
  {
    label: "Average Ticket Price",
    value: "N25,000",
    change: "-5%",
    up: false,
  },
];

const TicketManagement: React.FC = () => {
  const [ticketTiers, setTicketTiers] =
    useState<TicketTier[]>(initialTicketTiers);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTier, setNewTier] = useState<Omit<TicketTier, "id">>({
    name: "",
    desc: "",
    price: "",
    total: "",
    revenue: "",
  });

  const handleEdit = (id: string) => {
    setEditingId(id);
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setTicketTiers(ticketTiers.filter((tier) => tier.id !== id));
  };

  const handleSave = (id: string, updatedTier: Partial<TicketTier>) => {
    setTicketTiers(
      ticketTiers.map((tier) =>
        tier.id === id ? { ...tier, ...updatedTier } : tier
      )
    );
    setEditingId(null);
  };

  const handleAddTier = () => {
    setIsAdding(true);
    setEditingId(null);
    setNewTier({
      name: "",
      desc: "",
      price: "",
      total: "",
      revenue: "",
    });
  };

  const handleSaveNew = () => {
    const id = Date.now().toString();
    setTicketTiers([...ticketTiers, { id, ...newTier }]);
    setIsAdding(false);
    setNewTier({
      name: "",
      desc: "",
      price: "",
      total: "",
      revenue: "",
    });
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setNewTier({
      name: "",
      desc: "",
      price: "",
      total: "",
      revenue: "",
    });
  };

  const EditableRow = ({ tier }: { tier: TicketTier }) => {
    const [editData, setEditData] = useState(tier);

    if (editingId === tier.id) {
      return (
        <div className="bg-[#fdf7f7] border-2 border-[#FF9800] rounded-lg px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
          <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="font-semibold text-[17px] border border-gray-300 rounded px-2 py-1 bg-white"
              placeholder="Tier name"
            />
            <input
              type="text"
              value={editData.desc}
              onChange={(e) =>
                setEditData({ ...editData, desc: e.target.value })
              }
              className="text-gray-500 text-[15px] border border-gray-300 rounded px-2 py-1 bg-white"
              placeholder="Description"
            />
          </div>
          <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
          <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
            <span className="text-gray-500 text-[15px] font-medium">
              Ticket Price
            </span>
            <input
              type="text"
              value={editData.price}
              onChange={(e) =>
                setEditData({ ...editData, price: e.target.value })
              }
              className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
              placeholder="Price"
            />
          </div>
          <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
          <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
            <span className="text-gray-500 text-[15px] font-medium">
              Total Ticket
            </span>
            <input
              type="text"
              value={editData.total}
              onChange={(e) =>
                setEditData({ ...editData, total: e.target.value })
              }
              className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
              placeholder="Total tickets"
            />
          </div>
          <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
          <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
            <span className="text-gray-500 text-[15px] font-medium">
              Total Revenue
            </span>
            <input
              type="text"
              value={editData.revenue}
              onChange={(e) =>
                setEditData({ ...editData, revenue: e.target.value })
              }
              className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
              placeholder="Revenue"
            />
          </div>
          <div className="flex gap-2 ml-auto mt-3 sm:mt-0 sm:ml-4">
            <button
              onClick={() => handleSave(tier.id, editData)}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition"
              title="Save"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12l5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setEditingId(null)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
              title="Cancel"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#fdf7f7] border border-[#f2eaea] rounded-lg px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-1 flex flex-col gap-1 min-w-[180px]">
          <span className="font-semibold text-[17px]">{tier.name}</span>
          <span className="text-gray-500 text-[15px]">{tier.desc}</span>
        </div>
        <div className="hidden sm:block border-l border-[#e6dede] h-8 mx-6" />
        <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
          <span className="text-gray-500 text-[15px] font-medium">
            Ticket Price
          </span>
          <span className="font-semibold">{tier.price}</span>
        </div>
        <div className="hidden sm:block border-l border-[#e6dede] h-8 mx-6" />
        <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
          <span className="text-gray-500 text-[15px] font-medium">
            Total Ticket
          </span>
          <span className="font-semibold">{tier.total}</span>
        </div>
        <div className="hidden sm:block border-l border-[#e6dede] h-8 mx-6" />
        <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
          <span className="text-gray-500 text-[15px] font-medium">
            Total Revenue
          </span>
          <span className="font-semibold">{tier.revenue}</span>
        </div>
        <div className="flex gap-2 ml-auto mt-3 sm:mt-0 sm:ml-4">
          <button
            onClick={() => handleEdit(tier.id)}
            className="p-2 rounded-full hover:bg-blue-50 text-blue-600 transition"
            title="Edit"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(tier.id)}
            className="p-2 rounded-full hover:bg-red-50 text-red-600 transition"
            title="Delete"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const AddTierRow = () => (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
      <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
        <input
          type="text"
          value={newTier.name}
          onChange={(e) => setNewTier({ ...newTier, name: e.target.value })}
          className="font-semibold text-[17px] border border-gray-300 rounded px-2 py-1 bg-white"
          placeholder="Tier name"
        />
        <input
          type="text"
          value={newTier.desc}
          onChange={(e) => setNewTier({ ...newTier, desc: e.target.value })}
          className="text-gray-500 text-[15px] border border-gray-300 rounded px-2 py-1 bg-white"
          placeholder="Description"
        />
      </div>
      <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
      <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
        <span className="text-gray-500 text-[15px] font-medium">
          Ticket Price
        </span>
        <input
          type="text"
          value={newTier.price}
          onChange={(e) => setNewTier({ ...newTier, price: e.target.value })}
          className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
          placeholder="Price"
        />
      </div>
      <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
      <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
        <span className="text-gray-500 text-[15px] font-medium">
          Total Ticket
        </span>
        <input
          type="text"
          value={newTier.total}
          onChange={(e) => setNewTier({ ...newTier, total: e.target.value })}
          className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
          placeholder="Total tickets"
        />
      </div>
      <div className="hidden sm:block border-l border-[#e6dede] h-12 mx-6" />
      <div className="flex-1 flex flex-col gap-1 min-w-[120px]">
        <span className="text-gray-500 text-[15px] font-medium">
          Total Revenue
        </span>
        <input
          type="text"
          value={newTier.revenue}
          onChange={(e) => setNewTier({ ...newTier, revenue: e.target.value })}
          className="font-semibold border border-gray-300 rounded px-2 py-1 bg-white"
          placeholder="Revenue"
        />
      </div>
      <div className="flex gap-2 ml-auto mt-3 sm:mt-0 sm:ml-4">
        <button
          onClick={handleSaveNew}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-600 transition"
          title="Save new tier"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handleCancelAdd}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
          title="Cancel"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="w-full flex flex-col justify-start items-start lg:ml-5">
        <div className="flex flex-col md:justify-start mb-5">
          <h2 className="font-semibold text-[24px]">Ticket Management</h2>
          <p className="text-[18px] font-normal">
            Manage your ticket option and real sales data in real time
          </p>
        </div>
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-[#f2eaea] p-8 mb-8 relative">
          <h2 className="text-2xl font-semibold mb-8">Ticket Tiers</h2>
          <button
            onClick={handleAddTier}
            className="absolute top-8 right-8 bg-[#FF9800] hover:bg-[#ffa733] text-white font-medium rounded-lg px-7 py-2 transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAdding || editingId !== null}
          >
            + Add tier
          </button>
          <div className="flex flex-col gap-4">
            {ticketTiers.map((tier) => (
              <EditableRow key={tier.id} tier={tier} />
            ))}
            {isAdding && <AddTierRow />}
          </div>
        </section>

        {/* Ticket Sales Data */}
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-[#f2eaea] p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">Ticket Sales Data</h2>
          <div className="bg-[#fdf7f7] border border-[#f2eaea] rounded-lg flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#e6dede] shadow-sm">
            {salesStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center justify-center py-6 px-4"
              >
                <span className="text-gray-500 font-medium">{stat.label}</span>
                <span className="text-2xl font-bold mt-1">{stat.value}</span>
                <span
                  className={`text-sm font-semibold mt-2 ${
                    stat.up ? "text-green-600" : "text-red-600"
                  } flex items-center gap-1`}
                >
                  {stat.up ? (
                    <svg width="15" height="15" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M10 14V6M10 6L6 10M10 6l4 4"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="15" height="15" fill="none" viewBox="0 0 20 20">
                      <path
                        d="M10 6v8m0 0l4-4m-4 4l-4-4"
                        stroke="#dc2626"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full max-w-4xl flex justify-end gap-6 mt-2">
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow border border-[#cfcfcf] hover:bg-gray-100 transition-all duration-150">
            Cancel
          </button>
          <button className="bg-[#FF9800] hover:bg-[#ffa733] text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-150">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketManagement;
