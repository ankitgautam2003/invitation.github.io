import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Anniversary", href: "#anniversary" },
    { label: "Birthday", href: "#birthday" },
    { label: "Event Place", href: "#event-place" },
    { label: "Gallery", href: "#gallery" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  const contactInfo = [
    { icon: Phone, label: "+91 XXXXX XXXXX" },
    { icon: Mail, label: "celebration@example.com" },
    { icon: MapPin, label: "Garden City, India" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <Heart className="inline-block w-5 h-5 text-gold mr-2" />
              Celebration 2025
            </h3>
            <p className="text-gray-300 mb-4">
              Join us for a double celebration filled with love, joy, and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-gold transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-gold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <p key={index} className="text-gray-300 flex items-center">
                  <contact.icon className="w-4 h-4 mr-2" />
                  {contact.label}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400">
            © 2025 Celebration. Made with <Heart className="inline-block w-4 h-4 text-gold mx-1" /> for our special day.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
