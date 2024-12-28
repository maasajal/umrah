"use client";
import FAQ from "@/components/FAQ";
import PageCover from "@/components/PageCover";
import VisaGuide from "@/pages/visa/VisaGuide";

const Visa = () => {
  const faqData = [
    {
      question: "Do I need a visa if I have European RP?",
      answer: "No, you can obtain an on-arrival visa in Saudi Arabia.",
    },
    {
      question: "What documents do I need?",
      answer:
        "Passport, European RP, travel itinerary, and booking confirmation are required.",
    },
    {
      question: "How much does the visa cost?",
      answer: "The visa fee is approximately €100.",
    },
  ];
  return (
    <div>
      <PageCover
        title="Umrah Visa Process"
        bgImage="https://img.freepik.com/free-vector/opened-passport-with-visa-stamp-cartoon-sticker_1308-63043.jpg?t=st=1735220753~exp=1735224353~hmac=511022eede629d57c9fde85b9ba35635853da86e34c8d3be7ef28cd7df2235c7&w=1380"
      />
      <VisaGuide />
      <FAQ questions={faqData} />
    </div>
  );
};

export default Visa;
