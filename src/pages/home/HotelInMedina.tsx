"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HotelInMedina = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hotel in Medina
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Hotel Details */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pullman Zamzam Medina
            </h3>
            <p className="text-gray-600 mb-4">
              Situated just a few steps away from the Prophet`'`s Mosque, this
              luxurious hotel offers a serene stay in the heart of Medina. Ideal
              for pilgrims, it provides exceptional service and modern
              amenities.
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-700">
              <li>Walking distance to Al-Masjid an-Nabawi</li>
              <li>Elegant and comfortable rooms</li>
              <li>On-site dining with traditional and international options</li>
              <li>Free Wi-Fi and family-friendly facilities</li>
            </ul>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-green-600">
                From €180/night
              </p>
              <a
                href="#"
                className="bg-green-600 hover:bg-green-800 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Hotel Image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://via.placeholder.com/600x400"
              alt="Luxury Hotel in Medina"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelInMedina;
