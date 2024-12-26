"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const FAQ = ({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="py-10 px-4 md:px-20">
      <SectionTitle
        section="FAQ"
        heading="Frequently Asked Questions"
        description="Visa related questions and answers"
        customStyle=""
      />
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4"
            onClick={() => toggle(index)}
          >
            <h4 className="text-lg font-medium cursor-pointer">
              {faq.question}
            </h4>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
