import { motion } from "framer-motion";
import { Cake, Gift, PartyPopper } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useCountdown } from "@/hooks/use-countdown";
import { useRef } from "react";

export default function BirthdaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  // 🎯 Countdown to 9 July 2025 at 6:00 PM local time
  const targetDate = new Date("2025-07-09T18:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const highlights = [
    {
      icon: Gift,
      label: "Special gifts and surprises",
      color: "bg-lime/20 text-lime",
    },
    {
      icon: Cake,
      label: "Delicious birthday cake",
      color: "bg-orange/20 text-orange",
    },
    // { icon: PartyPopper, label: "Fun games and activities", color: "bg-birthday/20 text-birthday" },
  ];

  return (
    <section
      ref={sectionRef}
      id="birthday"
      className="py-20 bg-gradient-to-br from-birthday/5 to-lime/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-birthday mb-4">
            11th Birthday Celebration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating Shresth's special day with joy, laughter, and endless
            fun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 🎂 Birthday Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/B1.jpg"
              alt="Birthday party celebration"
              className="rounded-2xl shadow-2xl w-full h-auto hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-birthday/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-playfair font-semibold text-red-600">
                "Making every moment magical on your special day!"
              </p>
            </div>
          </motion.div>

          {/* 📝 Birthday Details */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <div className="flex items-center mb-6">
                <div className="bg-birthday/10 rounded-full p-3 mr-4">
                  <Cake className="text-birthday w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-birthday">
                    Shrestha
                  </h3>
                  <p className="text-gray-600">The Birthday Star</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-birthday mb-2">
                    11
                  </div>
                  <p className="text-gray-600">Years Old</p>
                </div>
              </div>
            </div>

            {/* ⏳ Birthday Countdown Timer */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-birthday mb-6 text-center">
                Countdown to Celebration
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-birthday/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-birthday">
                    {days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
                <div className="bg-birthday/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-birthday">
                    {hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
                <div className="bg-birthday/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-birthday">
                    {minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div className="bg-birthday/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-birthday">
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </div>

            {/* 🎉 Birthday Highlights */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-birthday mb-4">
                Birthday Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <span
                      className={`rounded-full w-8 h-8 flex items-center justify-center text-sm mr-4 ${highlight.color}`}
                    >
                      <highlight.icon className="w-4 h-4" />
                    </span>
                    <span className="text-gray-700">{highlight.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
