"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does your educational consultancy offer?",
    answer: "We provide guidance for college admissions, career counseling, visa assistance, and support with application procedures for universities worldwide.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer: "Yes, we assist students in identifying scholarship opportunities, completing applications, and providing tips to increase their chances of receiving financial aid.",
  },
  {
    question: "Which countries do you help students apply to?",
    answer: "We work with institutions in popular study destinations, including the USA, UK, Canada, Australia, and various European and Asian countries.",
  },
  {
    question: "Can you help me choose the right course for my career goals?",
    answer: "Absolutely. Our consultants assess your academic background, strengths, and career objectives to help you select the most suitable course and institution.",
  },
  {
    question: "What are the costs associated with your services?",
    answer: "Our service costs vary based on the level of assistance you need. We offer personalized consultations to discuss pricing and create a tailored plan that fits your budget.",
  },
];

