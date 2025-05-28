const features = [
  { title: 'Led By', subtitle: 'Experienced Professionals' },
  { title: 'Driven By', subtitle: 'Innovation' },
  { title: 'Small Team', subtitle: 'Focused On Quality' },
  { title: 'Partnerships', subtitle: 'That Last' },
];

const ValueProp = () => {
  return (
    <section className="px-4 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
      
        <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
          <img
            src="/hero.png"
            alt="Digital Canvas Background"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="flex flex-wrap justify-center gap-6 mt-[-50px] relative z-10 px-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white px-8 py-8 w-[240px] rounded-2xl shadow-lg text-center transition hover:shadow-xl"
            >
              <h4 className="text-purple-700 font-semibold text-xl">{item.title}</h4>
              <p className="text-gray-600 text-base mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
