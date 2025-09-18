import React from "react";
import Header from "@/components/globals/Header";
import { Link } from "react-router";
import { RouterConstantUtil } from "@/lib/RouterContantUtils";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-1 items-end md:items-center justify-between w-full mx-auto relative z-10 pt-12 md:pt-0">
        {/* Left: Text and CTA */}
        <div
          className="flex flex-col items-start justify-center flex-1 max-w-lg ml-6 md:ml-24 mb-12 md:mb-0 z-20
                        sm:ml-8 xs:ml-3"
        >
          <h1
            className="text-white text-4xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-md"
            style={{ maxWidth: "420px" }}
          >
            Join the
            <br />
            wave,
            <br />
            Enjoy the
            <br />
            moment
          </h1>
          <Link
            to={RouterConstantUtil.page.eventOwner.HOME}
            className="bg-gradient-to-r from-[#FFB400] to-[#FF8100] text-white font-bold px-10 py-4 rounded-full shadow-md border border-[#FFE17A] text-lg transition hover:opacity-90"
            style={{ boxShadow: "0 4px 16px 0 rgba(255,129,0,0.13)" }}
          >
            Sign in
          </Link>
        </div>
        <div className="flex-1 flex items-end justify-end relative h-[380px] md:h-[540px] lg:h-[640px] z-10">
          <div className="absolute inset-x-0 bottom-0 md:-top-32 right-0 w-[420px] md:w-[520px] h-[420px] md:h-[640px] rounded-[46%_54%_55%_45%_/_60%_34%_66%_40%] bg-gradient-to-tr from-[#FFB400]/70 to-[#FF8100]/40 z-0 blur-3xl pointer-events-none"></div>
          <img
            src="/images/hero_person.svg"
            alt="VR Experience"
            className="relative z-10 w-full h-full object-cover
                      -mb-0 md:-mb-4 lg:-mb-8"
            style={{
              marginTop: "-50px",
              marginRight: "-30px",
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* Carousel Left Button */}
      <button
        className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 bg-[#FFFFFF33]/[20%] backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-[#fff2] hover:scale-105 transition"
        style={{}}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M15 18l-6-6 6-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Carousel Right Button */}
      <button
        className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 bg-[#FFFFFF33]/[20%] backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-[#fff2] hover:scale-105 transition"
        style={{}}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M9 6l6 6-6 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
