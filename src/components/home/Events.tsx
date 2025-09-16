import React from "react";

// Dummy data
const liveStreams = [
  {
    title: "Wizkid Concert Music Festival",
    desc: "Experience the energy of live music with wizkid and your favourite artistes",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
    viewers: "12.5K",
  },
  {
    title: "Beyonce Cowboy Carter Tour",
    desc: "Experience the energy of live music with Beyonce and your favourite artistes",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=200&fit=crop",
    viewers: "8.2K",
  },
  {
    title: "Cold Play World Music Tour",
    desc: "Experience the energy of live music with Cold Play and your favourite artistes",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop",
    viewers: "15.7K",
  },
  {
    title: "Cold Play World Music Tour",
    desc: "Experience the energy of live music with Cold Play and your favourite artistes",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop",
    viewers: "15.7K",
  },
];

const upcomingEvents = [
  {
    title: "Wizkid Concert Music Festival",
    desc: "Experience the energy of live music with wizkid and your favourite artistes",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=150&fit=crop",
    date: "Dec 25",
    time: "8:00 PM",
  },
  {
    title: "Soccer Championship",
    desc: "Cheer for your favourite team in the city's biggest soccer event",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=150&fit=crop",
    date: "Jan 15",
    time: "3:00 PM",
  },
  {
    title: "Tech Innovator Conference",
    desc: "Connect with the brightest minds in tech and innovation",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=150&fit=crop",
    date: "Feb 8",
    time: "10:00 AM",
  },
  {
    title: "Modern Art Exhibition",
    desc: "Discover the latest trends in contemporary art",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=150&fit=crop",
    date: "Mar 12",
    time: "2:00 PM",
  },
  {
    title: "Modern Art Exhibition",
    desc: "Discover the latest trends in contemporary art",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=150&fit=crop",
    date: "Mar 12",
    time: "2:00 PM",
  },
];

const featuredCategories = [
  {
    label: "Music",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=120&fit=crop",
    count: "2.3K Events",
  },
  {
    label: "Sports",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=120&fit=crop",
    count: "1.8K Events",
  },
  {
    label: "Conferences",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=120&fit=crop",
    count: "950 Events",
  },
  {
    label: "Arts & Culture",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=120&fit=crop",
    count: "1.2K Events",
  },
  {
    label: "Food & Drink",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=120&fit=crop",
    count: "780 Events",
  },
  {
    label: "Food & Drink",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=120&fit=crop",
    count: "780 Events",
  },
];

const Events: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4 sm:p-8">
      {/* Live Streaming */}
      <section className="mb-12">
        <h2 className="flex items-center text-3xl font-bold mb-8 text-gray-900">
          <span className="mr-3 p-2 bg-red-100 rounded-xl">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" fill="#EF4444" />
              <path
                d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                stroke="#EF4444"
                strokeWidth="2"
              />
            </svg>
          </span>
          Live Streaming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {liveStreams.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Live Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  LIVE
                </div>
                {/* Viewers Count */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {item.viewers} watching
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7L8 5z" fill="#111" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <a
            href="#"
            className="flex items-center text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors group"
          >
            See More
            <svg
              width="20"
              height="20"
              fill="none"
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
            >
              <path
                d="M8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-white text-gray-900 px-3 py-2 rounded-xl text-sm font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">{item.date}</div>
                    <div className="text-xs font-semibold">{item.time}</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2 text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center text-orange-600 text-sm font-medium">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    className="mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Add to Calendar
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Categories
          </h2>
          <a
            href="#"
            className="flex items-center text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors group"
          >
            See More
            <svg
              width="20"
              height="20"
              fill="none"
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
            >
              <path
                d="M8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-4 text-center border-t border-gray-50">
                <h3 className="font-bold text-base text-gray-900 mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
