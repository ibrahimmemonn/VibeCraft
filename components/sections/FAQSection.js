"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ_QUESTIONS } from "@/lib/constants";
import { Button } from "@/@shadcn/ui/components/ui/button";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className="border-b border-gray-200 py-2  cursor-pointer ">
      <button
        className="flex justify-between items-center w-full text-left py-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-base font-medium text-gray-800 cursor-pointer">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 pb-2">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:gap-16  ">
          <motion.div
            className="md:w-2/5 mb-8 md:mb-0"
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-5xl font-bold mb-4 ">
                Have
                <br /> questions?
              </h2>
            </div>
            <div className="mb-6 ">
              <h3 className="text-xl font-semibold">Have more questions?</h3>
              <p className="text-gray-600 mb-4">Book a free discovery call.</p>
              <Button className="rounded-full bg-black">Book a call</Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-4/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-1">
              {FAQ_QUESTIONS.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleQuestion(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
