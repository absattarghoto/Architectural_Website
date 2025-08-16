import React, { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <button
            className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-lg font-medium text-gray-800">{faq.question}</span>
            <span className="ml-4">
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            aria-hidden={openIndex !== index}
          >
            <div className="p-5 pt-0 border-t border-gray-100">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion