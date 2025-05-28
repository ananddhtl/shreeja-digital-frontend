import { useEffect, useState } from 'react';

const rotatingWords = [
  'User Experience',
  'Websites',
  'Apps',
  'Interfaces',
  'Solutions',
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure animation starts after mount

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const longestWord = rotatingWords.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <section className="text-center px-4 py-20 max-w-[900px] mx-auto">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight space-y-3">
        <div>We Create Exceptional</div>
        
        <div className="relative inline-block align-middle min-w-[10ch] sm:min-w-[16ch] text-purple-600">
          <span className="invisible">{longestWord}</span>
          {mounted && (
            <span
              key={index}
              className="absolute top-0 left-0 w-full text-center animate-fadeFromBottom"
            >
              {rotatingWords[index]}
            </span>
          )}
        </div>

        <div>That Matter</div>
      </h1>

      <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-xl mx-auto">
        Transforming ideas into exceptional digital solutions. Our team of experts combines creativity and technology to deliver results that exceed expectations.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded font-semibold text-base">
          Get Started →
        </button>
        <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded font-semibold text-base">
          Why Trust Us?
        </button>
      </div>
    </section>
  );
};

export default Hero;
