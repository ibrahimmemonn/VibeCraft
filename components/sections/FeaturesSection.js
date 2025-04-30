"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { Zap, CheckCircle, Sparkles } from "lucide-react";

const iconMap = {
  Zap: Zap,
  CheckCircle: CheckCircle,
  Brain: Sparkles,
};

export default function FeaturesSection() {
  return (
    <section
      className="pb-20 "
      style={{ backgroundColor: "white", zIndex: 1000 }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Create Your Perfect
            <br />
            Brand in Minutes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="bg-gray-100 p-3 rounded-3xl">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-semibold my-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
