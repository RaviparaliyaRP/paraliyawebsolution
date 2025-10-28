'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Code, Check, Calculator, Clock, ArrowRight, Download } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

// Service icons mapping
const iconMap: { [key: string]: React.ElementType } = {
  Monitor,
  ShoppingCart,
  Code,
};

interface PricingData {
  services: Array<{
    id: string;
    name: string;
    basePrice: number;
    minPrice: number;
    maxPrice: number;
    description: string;
    icon: string;
    popular?: boolean;
  }>;
  addons: Array<{
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    applicableTo?: string[];
  }>;
  timeline: {
    [key: string]: string;
  };
}

const PricingCalculator = () => {
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [designLevel, setDesignLevel] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  // Load pricing data
  useEffect(() => {
    fetch('/data/pricing.json')
      .then((res) => res.json())
      .then((data) => setPricingData(data));
  }, []);

  // Calculate price when selections change
  useEffect(() => {
    if (!pricingData || !selectedService) {
      setTotalPrice(0);
      setMinPrice(0);
      setMaxPrice(0);
      return;
    }

    const service = pricingData.services.find((s) => s.id === selectedService);
    if (!service) return;

    let total = service.basePrice;

    // Add selected addons
    selectedAddons.forEach((addonId) => {
      const addon = pricingData.addons.find((a) => a.id === addonId);
      if (addon) {
        total += addon.price;
      }
    });

    // Add design level
    if (designLevel) {
      const design = pricingData.addons.find(
        (a) => a.id === designLevel && a.category === 'design'
      );
      if (design) {
        total += design.price;
      }
    }

    // Calculate range (±10%)
    const min = Math.floor(total * 0.9);
    const max = Math.ceil(total * 1.1);

    setTotalPrice(total);
    setMinPrice(min);
    setMaxPrice(max);
  }, [selectedService, selectedAddons, designLevel, pricingData]);

  // Get filtered addons based on selected service
  const getFilteredAddons = () => {
    if (!pricingData) return [];
    return pricingData.addons.filter((addon) => {
      if (addon.applicableTo && !addon.applicableTo.includes(selectedService!)) {
        return false;
      }
      return true;
    });
  };

  // Handle addon toggle
  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(addonId)) {
        newSet.delete(addonId);
      } else {
        newSet.add(addonId);
      }
      return newSet;
    });
  };

  if (!pricingData) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-purple"></div>
      </div>
    );
  }

  const timeline = selectedService ? pricingData.timeline[selectedService] : '';

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your requirements and get an instant price estimate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Calculator Form (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Select Service */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-accent-purple" />
                <h3 className="text-xl font-display font-bold text-gray-900">
                  1. Choose Your Service
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pricingData.services.map((service) => {
                  const Icon = iconMap[service.icon] || Monitor;
                  const isSelected = selectedService === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? 'border-accent-purple bg-purple-50'
                          : 'border-gray-200 hover:border-accent-purple/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className="w-6 h-6 text-accent-purple" />
                        <div>
                          <p className="font-semibold text-gray-900">{service.name}</p>
                          <p className="text-sm text-gray-600">from ₹{service.basePrice.toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">{service.description}</p>
                      {isSelected && (
                        <Check className="w-5 h-5 text-accent-purple mt-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Step 2: Select Addons */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="elevated" className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Check className="w-6 h-6 text-accent-purple" />
                    <h3 className="text-xl font-display font-bold text-gray-900">
                      2. Add Features (Optional)
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getFilteredAddons().map((addon) => {
                      const isSelected = selectedAddons.has(addon.id);
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                            isSelected
                              ? 'border-accent-purple bg-purple-50'
                              : 'border-gray-200 hover:border-accent-purple/30'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{addon.name}</p>
                              <p className="text-xs text-gray-500">{addon.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-semibold text-accent-purple">
                                +₹{addon.price.toLocaleString()}
                              </span>
                              {isSelected && (
                                <Check className="w-5 h-5 text-accent-purple" />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Design Level */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="elevated" className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Monitor className="w-6 h-6 text-accent-purple" />
                    <h3 className="text-xl font-display font-bold text-gray-900">
                      3. Choose Design Level (Optional)
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pricingData.addons
                      .filter((a) => a.category === 'design')
                      .map((design) => {
                        const isSelected = designLevel === design.id;
                        return (
                          <button
                            key={design.id}
                            onClick={() => setDesignLevel(isSelected ? null : design.id)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                              isSelected
                                ? 'border-accent-purple bg-purple-50'
                                : 'border-gray-200 hover:border-accent-purple/30'
                            }`}
                          >
                            <p className="font-semibold text-gray-900">{design.name}</p>
                            <p className="text-sm text-gray-500 mb-2">{design.description}</p>
                            <p className="text-sm font-semibold text-accent-purple">
                              +₹{design.price.toLocaleString()}
                            </p>
                            {isSelected && (
                              <Check className="w-5 h-5 text-accent-purple mt-2" />
                            )}
                          </button>
                        );
                      })}
                  </div>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Right Side - Price Summary (1 column) */}
          <div className="lg:col-span-1">
            <Card variant="elevated" className="sticky top-24 p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                Price Summary
              </h3>

              {selectedService ? (
                <>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-3xl font-bold text-accent-purple mb-2">
                        ₹{totalPrice.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        Range: ₹{minPrice.toLocaleString()} - ₹{maxPrice.toLocaleString()}
                      </p>
                    </div>

                    {timeline && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <p className="text-sm">Estimated Time: {timeline}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-6 border-t border-gray-200 pt-4">
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900 mb-2">What's Included:</p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Fully Responsive Design</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>Modern UI/UX</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>SEO Optimized</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>1 Year Support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="w-full mb-3">
                      Get Detailed Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>

                  <Button variant="outline" size="md" className="w-full">
                    Save This Quote
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
                </>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Select a service to see the estimated price
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
