import { motion } from "framer-motion";
import { Heart, Infinity, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function AnniversarySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const milestones = [
    { icon: "25", label: "Years of togetherness" },
    { icon: "∞", label: "Countless beautiful memories" },
    { icon: "💕", label: "A love story that inspires" },
  ];

  return (
    <section
      ref={sectionRef}
      id="anniversary"
      className="py-20 bg-gradient-to-br from-anniversary/5 to-rose-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-anniversary mb-4">
            25th Wedding Anniversary
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating a quarter-century of love, commitment, and beautiful
            memories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Anniversary Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <div className="flex items-center mb-6">
                <div className="bg-anniversary/10 rounded-full p-3 mr-4">
                  <Heart className="text-anniversary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anniversary">
                    Mr. Sanjay Kumar
                  </h3>
                  <p className="text-gray-600">Loving Husband</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-rose-gold/20 rounded-full p-3 mr-4">
                  <Heart className="text-rose-gold w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-anniversary">
                    Mrs. Maya Devi
                  </h3>
                  <p className="text-gray-600">Loving Wife</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-anniversary mb-4">
                Silver Jubilee Milestones
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <span className="bg-gold/20 text-gold rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                      {milestone.icon}
                    </span>
                    <span className="text-gray-700">{milestone.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Anniversary Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/assets/WA1.jpg"
              alt="Wedding anniversary celebration"
              className="rounded-2xl shadow-2xl w-full h-auto hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anniversary/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-playfair font-semibold">
                "25 years of love, laughter, and endless adventures together"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
