"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HotelInMakkah = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hotel in Makkah
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Hotel Image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Luxury Hotel in Makkah"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </motion.div>

          {/* Hotel Details */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Al-Safwa Towers Hotel
            </h3>
            <p className="text-gray-600 mb-4">
              Located just steps away from the Holy Mosque, this luxury hotel
              offers modern amenities and breathtaking views of the Kaaba. Enjoy
              unmatched comfort and convenience during your Umrah journey.
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Walking distance to Haram</li>
              <li>Luxurious and spacious rooms</li>
              <li>On-site dining with international cuisine</li>
              <li>Complimentary Wi-Fi and concierge service</li>
            </ul>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-blue-600">From €200/night</p>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelInMakkah;
