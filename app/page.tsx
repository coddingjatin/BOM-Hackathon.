"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  Trophy,
  Users,
  Zap,
  Shield,
  Banknote,
  MapPin,
  Award,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleRegister = () => {
    alert("Registration will open soon! Stay tuned for updates.")
  }

  const handleViewSchedule = () => {
    scrollToSection("timeline")
  }

  const handleStayUpdated = () => {
    alert("We'll notify you when registration opens!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full bg-black/10 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300"
        style={{ backgroundColor: scrollY > 50 ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-cyan-400">FINSPARK</span> 2025
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("themes")}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Themes
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("prizes")}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Prizes
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleRegister}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Register Now
            </Button>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-xl border-t border-white/5">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white/80 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("themes")}
                className="block text-white/80 hover:text-cyan-400 transition-colors"
              >
                Themes
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="block text-white/80 hover:text-cyan-400 transition-colors"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection("prizes")}
                className="block text-white/80 hover:text-cyan-400 transition-colors"
              >
                Prizes
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Animations */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-12 animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-purple-900/80 to-purple-800/80 text-purple-200 border border-purple-700/50 px-6 py-3 text-lg backdrop-blur-sm animate-pulse shadow-lg shadow-purple-900/20">
              36-Hour Innovation Challenge
            </Badge>

            <div className="mb-4">
              <Badge className="mb-4 bg-gradient-to-r from-amber-900/80 to-yellow-800/80 text-amber-200 border border-amber-700/50 px-6 py-3 text-xl backdrop-blur-sm shadow-lg shadow-amber-900/20">
                PSBs Hackathon Series 2025
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 inline-block animate-slide-in-left">
                FINSPARK
              </span>
              <br />
              <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block animate-bounce-in">
                2025
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-500">
              Join Bank of Maharashtra & COEP Technological University for an epic 36-hour coding marathon that will
              reshape the future of FinTech and Cybersecurity
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-700">
            <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-medium">August 9-10, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-medium">COEP Technological University</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <Clock className="w-6 h-6 text-pink-400" />
              <span className="text-lg font-medium">36 Hours Non-Stop</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-1000">
            <Button
              size="lg"
              onClick={handleRegister}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-lg px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Register Your Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleViewSchedule}
              className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-4 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40"
            >
              View Schedule
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown
              className="w-8 h-8 text-white/60 mx-auto cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">About the Hackathon</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A collaborative innovation challenge bringing together brilliant minds to solve real-world problems in
              FinTech and Cybersecurity, powered by industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-cyan-500/30 group">
              <CardHeader>
                <Users className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-2xl">Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Work with talented peers from COEP Tech to build innovative solutions that matter
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 group">
              <CardHeader>
                <Zap className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-2xl">Innovate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Push boundaries and create cutting-edge solutions for banking and security challenges
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-pink-500/30 group">
              <CardHeader>
                <Trophy className="w-16 h-16 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white text-2xl">Win Big</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Compete for exclusive internship opportunities at Bank of Maharashtra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-4 bg-black/10 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Organized By</h2>
            <p className="text-xl text-gray-300">
              In collaboration with leading financial institutions and government bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto items-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-110 group animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-white/10 rounded-full p-4 mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <img
                    src="/iba-logo-new.png"
                    alt="Indian Banks' Association - Leading banking industry body since 1946, representing public and private sector banks across India"
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-center text-lg font-semibold">Indian Banks' Association</p>
                <p className="text-gray-400 text-center text-sm mt-2">Since 1946</p>
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-cyan-300 text-xs">Banking Industry Leadership</p>
                  <p className="text-gray-400 text-xs">Representing 200+ Banks</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-110 group animate-fade-in-up delay-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-white/10 rounded-full p-4 mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <img
                    src="/dfs-logo-new.png"
                    alt="Department of Financial Services - Government of India ministry overseeing banking, insurance, and financial sector policies"
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-center text-lg font-semibold">Department of Financial Services</p>
                <p className="text-gray-400 text-center text-sm mt-2">Government of India</p>
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-purple-300 text-xs">Policy & Regulation</p>
                  <p className="text-gray-400 text-xs">Financial Sector Oversight</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-110 group animate-fade-in-up delay-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-white/10 rounded-full p-4 mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <img
                    src="/bom-logo-updated.png"
                    alt="Bank of Maharashtra - Public sector bank serving millions of customers across India with innovative banking solutions"
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-center text-lg font-semibold">Bank of Maharashtra</p>
                <p className="text-gray-400 text-center text-sm mt-2">एक परिवार एक बैंक</p>
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-blue-300 text-xs">Public Sector Bank</p>
                  <p className="text-gray-400 text-xs">2600+ Branches</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-500 hover:scale-110 group animate-fade-in-up delay-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="bg-white/10 rounded-full p-4 mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <img
                    src="/coep-logo-new.png"
                    alt="COEP Technological University - Premier engineering institution established in 1854, fostering innovation and excellence in technology education"
                    className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-center text-lg font-semibold">COEP Technological University</p>
                <p className="text-gray-400 text-center text-sm mt-2">Estd. 1854</p>
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-pink-300 text-xs">Engineering Excellence</p>
                  <p className="text-gray-400 text-xs">170+ Years Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4 bg-black/20 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Challenge Themes</h2>
            <p className="text-xl text-gray-300">
              Choose your battlefield and showcase your expertise in cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <Banknote className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-lg">FinTech</Badge>
                </div>
                <CardTitle className="text-3xl text-white leading-tight">
                  Bridging the Language Gap in Indian Banking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Develop innovative solutions to make banking services more accessible across India's diverse
                  linguistic landscape. Create tools that break down language barriers and enhance financial inclusion
                  for millions of users.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-lg">
                    Cybersecurity
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-white leading-tight">
                  Automated Log Analysis for Threat Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Build intelligent systems that can automatically analyse all types of logs including security logs,
                  event logs and detect potential threats. Leverage AI/ML to enhance cyber security monitoring and
                  response capabilities in real time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Event Timeline</h2>
            <p className="text-xl text-gray-300">Your 36-hour journey from registration to victory</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Day 1 */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-xl font-bold">
                  Day 1
                </div>
                <div className="text-gray-400 text-lg">August 9, 2025</div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

                <div className="space-y-8">
                  {[
                    {
                      time: "7:30 AM",
                      duration: "30 mins",
                      event: "Team Registration & Verification",
                      desc: "Teams verify registration and get seated",
                    },
                    {
                      time: "8:00 AM",
                      duration: "1 hr",
                      event: "Team Acquaintance",
                      desc: "Teams get acquainted and start planning",
                    },
                    {
                      time: "9:00 AM",
                      duration: "1 hr",
                      event: "Breakfast & Networking",
                      desc: "Fuel up for the challenge ahead",
                    },
                    {
                      time: "10:15 AM",
                      duration: "45 mins",
                      event: "Inauguration Ceremony",
                      desc: "Official opening and problem statement reveal",
                    },
                    {
                      time: "11:00 AM",
                      duration: "2 hrs",
                      event: "Coding Session 1",
                      desc: "The hackathon officially begins!",
                    },
                    {
                      time: "1:00 PM",
                      duration: "1.5 hrs",
                      event: "Lunch Break",
                      desc: "Teams come in batches for lunch",
                    },
                    { time: "2:30 PM", duration: "3 hrs", event: "Intensive Coding", desc: "Deep development phase" },
                    { time: "5:30 PM", duration: "45 mins", event: "Tea & Snacks", desc: "Quick refreshment break" },
                    {
                      time: "6:15 PM",
                      duration: "45 mins",
                      event: "Coding Sprint",
                      desc: "Final push before evaluation",
                    },
                    {
                      time: "7:00 PM",
                      duration: "1.5 hrs",
                      event: "First Evaluation & Mentoring",
                      desc: "Present progress and get expert feedback",
                    },
                    {
                      time: "8:30 PM",
                      duration: "1 hr",
                      event: "Dinner",
                      desc: "Recharge for the night coding session",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                          <div className="text-cyan-400 font-bold text-lg">{item.time}</div>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit">
                            {item.duration}
                          </Badge>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">{item.event}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full text-xl font-bold">
                  Day 2
                </div>
                <div className="text-gray-400 text-lg">August 10, 2025</div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600"></div>

                <div className="space-y-8">
                  {[
                    {
                      time: "8:30 AM",
                      duration: "1 hr",
                      event: "Breakfast & Fresh Start",
                      desc: "Morning fuel for the final push",
                    },
                    {
                      time: "9:30 AM",
                      duration: "1.5 hrs",
                      event: "Final Development Phase",
                      desc: "Last chance to perfect your solution",
                    },
                    {
                      time: "11:00 AM",
                      duration: "2 hrs",
                      event: "Second Evaluation Round",
                      desc: "Demonstrate your progress to judges",
                    },
                    {
                      time: "1:00 PM",
                      duration: "1.5 hrs",
                      event: "Lunch Break",
                      desc: "Teams come in batches for lunch",
                    },
                    {
                      time: "2:30 PM",
                      duration: "3 hrs",
                      event: "Final Coding Sprint",
                      desc: "Polish and finalize your solution",
                    },
                    {
                      time: "5:30 PM",
                      duration: "30 mins",
                      event: "Tea & Final Preparations",
                      desc: "Last-minute preparations for final demo",
                    },
                    {
                      time: "6:00 PM",
                      duration: "1.25 hrs",
                      event: "Final Evaluation",
                      desc: "Present your complete solution to judges",
                    },
                    {
                      time: "7:15 PM",
                      duration: "45 mins",
                      event: "Valedictory Ceremony",
                      desc: "Results announcement and closing ceremony",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="relative z-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                          <div className="text-purple-400 font-bold text-lg">{item.time}</div>
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-fit">
                            {item.duration}
                          </Badge>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">{item.event}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4 bg-black/20 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Prizes & Opportunities</h2>
            <p className="text-xl text-gray-300">Exceptional rewards for outstanding innovation and dedication</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20 backdrop-blur-xl hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-8">
                <Award className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-pulse" />
                <CardTitle className="text-4xl text-white mb-4">Internship Opportunities</CardTitle>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Top-performing teams stand a chance to receive internship opportunities at Bank of Maharashtra,
                  working on real-world projects that impact million of users
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                    <Banknote className="w-12 h-12 text-cyan-400 mb-4" />
                    <h4 className="text-xl font-semibold text-cyan-400 mb-2">FinTech Track Winners</h4>
                    <p className="text-gray-300">Innovation in Banking Solutions & Financial Technology</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                    <Shield className="w-12 h-12 text-purple-400 mb-4" />
                    <h4 className="text-xl font-semibold text-purple-400 mb-2">Security Track Winners</h4>
                    <p className="text-gray-300">Cybersecurity Excellence & Threat Detection Systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Code the Future?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us for 36 hours of intense coding, innovation, and collaboration. Be part of the next generation of
            tech leaders shaping the future of banking and cybersecurity.
          </p>
          <Button
            size="lg"
            onClick={handleStayUpdated}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xl px-16 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Stay Updated
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/5 py-12 px-4 backdrop-blur-xl">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <h3 className="text-2xl font-bold text-white">FINSPARK 2025</h3>
              </div>
              <p className="text-gray-400 text-lg">PSBs Hackathon Series 2025</p>
              <p className="text-gray-500 text-sm mt-1">
                IBA × DFS × Bank of Maharashtra × COEP Technological University
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg mb-2">Registration opens soon!</p>
              <p className="text-gray-500">Follow us for updates and announcements</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}
