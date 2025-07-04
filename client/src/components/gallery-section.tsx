import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const [activeTab, setActiveTab] = useState("anniversary");

  const tabs = [
    { id: "anniversary", label: "Anniversary" },
    { id: "birthday", label: "Birthday" },
    { id: "family", label: "Family" },
  ];

  const galleries = {
    anniversary: [
      {
        src: "/assets/WA2.jpg",
        alt: "Anniversary dinner celebration",
      },
      {
        src: "/assets/WA3.jpg",
        alt: "Anniversary cake celebration",
      },
      {
        src: "/assets/WA4.jpg",
        alt: "Anniversary toast celebration",
      },
      {
        src: "/assets/WA5.jpg",
        alt: "Anniversary toast celebration",
      },
      {
        src: "/assets/WA6.jpg",
        alt: "Anniversary toast celebration",
      },
      {
        src: "/assets/WA7.jpg",
        alt: "Anniversary toast celebration",
      },
      {
        src: "/assets/WA8.jpg",
        alt: "Anniversary toast celebration",
      },
      {
        src: "/assets/WA9.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/WA10.jpg",
        alt: "Family group photo celebration",
      },
    ],
    birthday: [
      {
        src: "/assets/B2.jpg",
        alt: "Birthday cake with candles",
      },
      {
        src: "/assets/B3.jpg",
        alt: "Children celebrating birthday",
      },
      {
        src: "/assets/B4.jpg",
        alt: "Birthday party decoration",
      },
      {
        src: "/assets/B5.jpg",
        alt: "Birthday cake with candles",
      },
      {
        src: "/assets/B6.jpg",
        alt: "Children celebrating birthday",
      },
      {
        src: "/assets/B7.jpg",
        alt: "Birthday party decoration",
      },
      {
        src: "/assets/B8.jpg",
        alt: "Birthday cake with candles",
      },
      {
        src: "/assets/B9.jpg",
        alt: "Birthday gifts and party favors",
      },
      {
        src: "/assets/B10.jpg",
        alt: "Birthday gifts and party favors",
      },
    ],
    family: [
      {
        src: "/assets/F1.jpg",
        alt: "Happy family celebration",
      },
      {
        src: "/assets/F2.jpg",
        alt: "Multi-generational family celebration",
      },
      {
        src: "/assets/F3.jpg",
        alt: "Family dining together",
      },
      {
        src: "/assets/F4.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/F5.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/F6.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/F7.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/F8.jpg",
        alt: "Family group photo celebration",
      },
      {
        src: "/assets/F9.jpg",
        alt: "Family group photo celebration",
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Celebration Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capturing beautiful moments from our special celebrations
          </p>
        </motion.div>

        {/* Gallery Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gold/20 text-gold"
                    : "hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleries[activeTab as keyof typeof galleries].map(
              (image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-black flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ height: "24rem" }} // Optional: adjust height if needed
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
