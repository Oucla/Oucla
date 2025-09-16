import React, { useState } from "react";

// Dummy ticket data
const ticketTypes = [
  {
    id: 1,
    title: "Wizkid Concert Music Festival",
    desc: "Experience the energy of live music with Wizkid and your favourite artistes",
    price: 50000,
    active: true,
  },
  {
    id: 2,
    title: "VR Immersive Experience",
    desc: "Experience the energy of live music with Wizkid and your favourite artistes",
    price: 100000,
    active: false,
  },
];

const EventDetails: React.FC = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden relative">
        <img
          src="/images/event-details.png"
          alt="O2 Arena Concert"
          className="w-full h-[320px] sm:h-[500px] object-cover"
        />
        <div className="absolute bottom-7 left-0 w-full px-7">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            O2 Arena Concert
          </h1>
          <div className="text-white text-lg md:text-2xl font-medium drop-shadow">
            Wizkid Concert Music Festival
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-0 md:gap-10 px-3 sm:px-8 py-10">
        {/* Left: Ticket selection */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex flex-col gap-4 w-full max-w-lg ml-0 md:ml-auto mb-5 ">
            {ticketTypes.map((ticket) => (
              <button
                key={ticket.id}
                className={`flex items-center justify-between px-5 py-4 rounded-lg border transition-all text-left ${
                  selected === ticket.id
                    ? "bg-white border-[#FF9800] shadow-lg"
                    : "bg-black border-[#FF9800] border-[1.5px]"
                }`}
                style={{
                  color: selected === ticket.id ? "#111" : "#FF9800",
                  borderWidth: selected === ticket.id ? 2 : 1.5,
                  fontWeight: selected === ticket.id ? 600 : 500,
                }}
                onClick={() => setSelected(ticket.id)}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {/* Radio */}
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selected === ticket.id
                          ? "border-[#FF9800]"
                          : "border-[#FF9800]"
                      }`}
                    >
                      {selected === ticket.id && (
                        <span className="w-2 h-2 bg-[#FF9800] rounded-full block" />
                      )}
                    </span>
                    <span
                      className={`font-semibold ${
                        selected === ticket.id ? "text-black" : "text-[#FF9800]"
                      }`}
                    >
                      {ticket.title}
                    </span>
                  </div>
                  <div
                    className={`text-sm ${
                      selected === ticket.id
                        ? "text-gray-600"
                        : "text-[#FF9800]/80"
                    }`}
                  >
                    {ticket.desc}
                  </div>
                </div>
                <div
                  className={`font-bold text-lg ${
                    selected === ticket.id ? "text-black" : "text-[#FF9800]"
                  }`}
                >
                  ₦{ticket.price.toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Right: Event Details */}
        <div className="w-full md:w-[325px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:mt-0 mt-8">
            <h3 className="font-bold text-lg mb-5">Event Details</h3>
            <div className="flex flex-col gap-6 text-sm text-black">
              <div className="flex gap-3 items-start">
                <span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="3"
                      stroke="#111"
                      strokeWidth="1.7"
                    />
                    <path d="M8 3v4M16 3v4" stroke="#111" strokeWidth="1.7" />
                  </svg>
                </span>
                <span>
                  <div className="font-medium text-xs text-gray-700 mb-1">
                    Date & Time
                  </div>
                  <div className="font-bold text-[15px]">
                    July 15th, 2024, 9am - 5pm
                  </div>
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9Z"
                      stroke="#111"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="12"
                      cy="11"
                      r="3.5"
                      stroke="#111"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <span>
                  <div className="font-medium text-xs text-gray-700 mb-1">
                    Location
                  </div>
                  <div className="font-bold text-[15px]">
                    O2 Arena, London, UK/
                    <br />
                    Virtual
                  </div>
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="10"
                      rx="3"
                      stroke="#111"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7 7V5a5 5 0 0 1 10 0v2"
                      stroke="#111"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <span>
                  <div className="font-medium text-xs text-gray-700 mb-1">
                    Event Type
                  </div>
                  <div className="font-bold text-[15px]">Musical Concert</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Button */}
      <div className="w-full fixed bottom-0 left-0 z-50">
        <button className="w-full bg-[#FF9800] text-white font-semibold text-lg py-4 rounded-none shadow-xl transition hover:opacity-90">
          Purchase Ticket
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
