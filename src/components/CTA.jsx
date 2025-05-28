import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const rotatingWords = [
  'Digital Presence',
  'Online Brand',
  'Website',
  'App Experience',
  'Digital Strategy',
];

const CTA = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const longestWord = rotatingWords.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center rounded-2xl px-4 sm:px-8 py-20 shadow-lg">
        <h2 className="text-xl sm:text-3xl font-bold mb-4">
          Ready to Transform Your{' '}
          <span className="relative inline-flex flex-col items-start justify-center">
            <span className="invisible">{longestWord}</span>
            <span
              key={index}
              className="absolute top-0 left-0 animate-fadeFromBottom text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
            >
              {rotatingWords[index]}
            </span>
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your business goals with our tailored digital solutions.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition">
          Get Started Today <FiArrowRight className="text-base" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
