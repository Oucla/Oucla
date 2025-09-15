import React, { useState, type ChangeEvent, type FormEvent } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";

type TicketType = {
  name: string;
  price: string;
};

const initialTickets: TicketType[] = [
  { name: "Standard", price: "N30,000" },
  { name: "VR Premium", price: "N50,000" },
];

const Events: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [banner, setBanner] = useState<File | null>(null);
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);

  const handleTicketChange = (
    idx: number,
    field: keyof TicketType,
    value: string
  ) => {
    setTickets((prev) =>
      prev.map((t, i) => (i === idx ? { ...t, [field]: value } : t))
    );
  };

  const handleAddTicket = () => {
    setTickets([...tickets, { name: "", price: "" }]);
  };

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBanner(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submit
  };

  return (
    <DashboardLayout>
      <form
        className="w-full  flex flex-col items-start ml-5  "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:justify-start mb-5">
          <h2 className="font-semibold text-[24px]">Create New Event</h2>
          <p className="text-[18px] font-normal">
            Fill in the details below to set up your event
          </p>
        </div>
        {/* Event details */}
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-[#f2eaea] p-8 mb-8">
          <div className="mb-4">
            <label className="block font-medium mb-1">Event title</label>
            <input
              type="text"
              placeholder="e.g Metaverse music festival"
              className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-3 text-base focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder="Write more about your event"
              className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-3 text-base min-h-[80px] focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%] resize-none"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Date</label>
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%]"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Time</label>
              <input
                type="text"
                placeholder="00:00:00"
                className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%]"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Banner image</label>
            <label className=" w-full border border-[#8C012626]/[15%] rounded-md px-4 py-2 text-base bg-[#fcfcfc] cursor-pointer flex flex-col items-center justify-center min-h-[80px] transition-all hover:border-[#FF9800]">
              {banner ? (
                <span className="text-sm text-gray-700">{banner.name}</span>
              ) : (
                <>
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="mb-1 opacity-50"
                  >
                    <path
                      d="M12 16V8M12 8L8 12M12 8l4 4"
                      stroke="#888"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="#bbb"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-gray-400 text-center text-sm">
                    Click to upload or drag and drop
                  </span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleBannerChange}
              />
            </label>
          </div>
        </section>

        {/* Ticket Types */}
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-[#f2eaea] p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Ticket Types</h2>
          {tickets.map((ticket, idx) => (
            <div className="flex flex-col sm:flex-row gap-4 mb-2" key={idx}>
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">
                  Ticket Name
                </label>
                <input
                  type="text"
                  placeholder="Ticket name"
                  className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%]"
                  value={ticket.name}
                  onChange={(e) =>
                    handleTicketChange(idx, "name", e.target.value)
                  }
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="N0"
                  className="w-full bg-white border border-[#8C012626]/[15%] rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-[#FF9800] outline-none placeholder:text-[#00000033]/[20%]"
                  value={ticket.price}
                  onChange={(e) =>
                    handleTicketChange(idx, "price", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="flex items-center gap-2 text-[#FF3F3F] font-medium mt-2 text-base hover:underline"
            onClick={handleAddTicket}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#FF3F3F"
                strokeWidth="1.5"
              />
              <path
                d="M8 12h8M12 8v8"
                stroke="#FF3F3F"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Add Another ticket type
          </button>
        </section>

        {/* Action Buttons */}
        <div className="w-full max-w-2xl flex justify-end gap-6 mt-2">
          <button
            type="button"
            className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow border border-[#cfcfcf] hover:bg-gray-100 transition-all duration-150"
          >
            Save as draft
          </button>
          <button
            type="submit"
            className="bg-[#FF9800] hover:bg-[#ffa733] text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-150"
          >
            Create Event
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default Events;
