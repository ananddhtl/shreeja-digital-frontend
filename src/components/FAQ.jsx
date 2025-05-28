import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: "What services does your digital agency offer?",
    answer: "We offer UI/UX design, development, branding, SEO and marketing solutions.",
  },
  {
    question: "How long does it typically take to complete a website project?",
    answer: "Most projects take 4–6 weeks depending on scope and feedback loops.",
  },
  {
    question: "What is your process for working with clients?",
    answer: "We follow a structured approach from discovery to delivery with client check-ins.",
  },
  {
    question: "How do you price your services?",
    answer: "We offer flexible pricing based on hourly, project-based, or monthly retainers.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer optional support packages post-launch for updates and monitoring.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We track KPIs like traffic, engagement, leads, and conversion metrics.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        className="w-full text-left flex justify-between items-center group"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`font-semibold text-sm transition-all duration-200
            ${open ? 'text-purple-600 underline' : 'text-gray-800'}
            group-hover:underline group-hover:text-purple-600`}
        >
          {question}
        </span>
        <FiChevronDown
          className={`ml-2 text-xl transform transition-transform duration-300 ${
            open ? 'rotate-180 text-purple-600' : 'text-gray-600 group-hover:text-purple-600'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-40 mt-2' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          Frequently{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Asked Questions
          </span>
        </h2>
        <p className="text-gray-500 mt-2">
          Find answers to common questions about our services and process.
        </p>
      </div>

      <div className="max-w-3xl mx-auto divide-y">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
