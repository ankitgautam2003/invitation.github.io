import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Wifi,
  Car,
  Utensils,
  Music,
  Camera,
  Leaf,
  Phone,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function EventPlaceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const venueInfo = [
    {
      icon: MapPin,
      label: "Location",
      value:
        "Dashmesh Guest House, Shri Nath Ji Market, Unnao Flyover, Civil Lines, Kalyani, Unnao, Uttar Pradesh 209801",
    },
    { icon: Calendar, label: "Event Date", value: "July 15, 2025" },
    { icon: Clock, label: "Timing", value: "6:00 PM Onwards" },
  ];

  const amenities = [
    { icon: Phone, label: "8299184518" },
    { icon: Phone, label: "9307979079" },
    { icon: Phone, label: "9453517168" },
    { icon: Phone, label: "9956117273" },
  ];

  return (
    <section
      ref={sectionRef}
      id="event-place"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Event Venue
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful guesthouse setting perfect for our double celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Venue Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/Event_Ground.jpg"
              alt="Event venue guesthouse"
              className="rounded-2xl shadow-2xl w-full h-auto hover-scale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                Venue Information
              </h3>
              <div className="space-y-4">
                {venueInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-gold/20 rounded-full p-2 mr-4">
                      <info.icon className="text-gold w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {info.label}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                Contact No.
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  >
                    <amenity.icon className="text-gold w-5 h-5 mr-3" />
                    <span className="text-gray-700">{amenity.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 hover-scale"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6 text-center">
            Location Map
          </h3>

          <a
            href="https://maps.app.goo.gl/4mPPP5VfryLxWE64A"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-200 rounded-xl h-64 overflow-hidden hover:ring-2 hover:ring-gold transition"
          >
            <img
              src="/assets/Map.jpg"
              alt="Map location"
              className="w-full h-full object-cover rounded-xl"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
