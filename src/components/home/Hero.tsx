import type React from "react"
import { Button } from "@/components/ui/button"
//import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Calendar, MapPin } from "lucide-react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-purple-600/70 to-purple-800/80" />

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-red-400/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation Header */}
      <nav className="relative z-20 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Play className="w-4 h-4 text-primary fill-current" />
          </div>
          <span className="text-white font-bold text-xl">EventWave</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-white/90 hover:text-white transition-colors">
            Events
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors">
            Contact
          </a>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Left: Content */}
        <div className="flex-[3] max-w-4xl space-y-8 pr-8">
          {/* Event Badge */}
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Next Event: Dec 15, 2024
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
              Join the{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Ultimate
              </span>{" "}
              Experience
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty max-w-xl">
              Connect with thousands of like-minded people at the most exciting events of the year. Create memories that
              last forever.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 text-white/90">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">50K+ Attendees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Global Events</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold px-8 py-4 text-lg shadow-2xl"
              >
                Get Your Tickets
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
              >
                Watch Trailer
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* App Download Section */}
            <div className="space-y-3">
              <p className="text-white/80 text-sm">Download our app for exclusive updates and early access:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 hover:bg-black/40 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/70">Download on the</div>
                    <div className="text-sm font-semibold text-white group-hover:text-white/90">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 hover:bg-black/40 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-white/70">Get it on</div>
                    <div className="text-sm font-semibold text-white group-hover:text-white/90">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Person Illustration - Full Coverage */}
        <div className="hidden lg:block flex-[2] relative h-screen -mr-6 lg:-mr-12">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/20 via-orange-500/10 to-transparent" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-500/20 via-transparent to-pink-500/20" />

          {/* Person Image - Full Size */}
        
            <img
              src="/images/hero-person.svg"
              alt="Event Experience"
              className="w-full h-full object-contain object-center"
              draggable={false}
            />
        

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl animate-pulse" />
          <div
            className="absolute bottom-40 right-20 w-24 h-24 bg-purple-500/40 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
