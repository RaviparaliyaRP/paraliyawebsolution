'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandsCarousel = () => {
  // Generate array of brand images
  const brands = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    image: `/images/Brands/brand${i + 1}.jpeg`,
  }));

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 lg:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to partner with innovators across industries.
          </p>
        </motion.div>

        {/* Brands Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 lg:space-x-12"
            animate={{
              x: [0, -50 * brands.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0 }}
              >
                <div className="w-32 h-20 lg:w-40 lg:h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={120}
                    height={80}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-purple mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-purple mb-2">12+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-purple mb-2">100%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
