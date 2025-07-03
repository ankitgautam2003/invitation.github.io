import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Wifi, Car, Utensils, Music, Camera, Leaf } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

export default function EventPlaceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const venueInfo = [
    { icon: MapPin, label: "Location", value: "Premium Guesthouse, Garden City" },
    { icon: Calendar, label: "Event Date", value: "December 15, 2024" },
    { icon: Clock, label: "Timing", value: "6:00 PM - 11:00 PM" },
  ];

  const amenities = [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Car, label: "Parking Available" },
    { icon: Utensils, label: "Catering Services" },
    { icon: Music, label: "Audio System" },
    { icon: Camera, label: "Photo Booth" },
    { icon: Leaf, label: "Garden Area" },
  ];

  return (
    <section ref={sectionRef} id="event-place" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
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
                      <h4 className="font-semibold text-gray-800">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover-scale">
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-6">
                Venue Amenities
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
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gold mb-4 mx-auto" />
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">Premium Guesthouse, Garden City</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
