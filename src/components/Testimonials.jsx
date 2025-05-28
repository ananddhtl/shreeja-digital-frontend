import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rojin Shrestha',
    title: 'Owner, New Muna Family Restaurant',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    intro: 'I’ve been using the Shreeja platform for the past two years.',
    quote: (
      <>
        <strong className="font-semibold">
          Whether it's staff placing orders from mobile devices
        </strong>{' '}
        the app is incredibly easy to use and efficient.
      </>
    ),
  },
  {
    name: 'Sovit Pratap Thakuri',
    title: 'Owner, Coffee Ghar',
    image: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
    intro: 'Managing digital campaigns has never been this simple.',
    quote: (
      <>
        <strong className="font-semibold">
          I can monitor sales and traffic from anywhere
        </strong>{' '}
        — it’s the most flexible and reliable solution we’ve used.
      </>
    ),
  },
  {
    name: 'Anup Gautam',
    title: 'Owner, Old House',
    image: 'https://i.pravatar.cc/150?img=8',
    rating: 4,
    intro: 'Shreeja’s tools helped us reduce operational issues.',
    quote: (
      <>
        <strong className="font-semibold">
          We now have real-time updates and alerts before issues arise.
        </strong>{' '}
        It’s the most dependable digital solution in our market.
      </>
    ),
  },
  {
    name: 'Simran Kaur',
    title: 'Founder, GlowHub',
    image: 'https://i.pravatar.cc/150?img=25',
    rating: 5,
    intro: 'The user interface they delivered exceeded expectations.',
    quote: (
      <>
        <strong className="font-semibold">
          Their team blends creativity with functionality
        </strong>{' '}
        — it boosted our engagement rate instantly.
      </>
    ),
  },
  {
    name: 'Nikhil Mehta',
    title: 'CEO, CloudSync',
    image: 'https://i.pravatar.cc/150?img=16',
    rating: 4,
    intro: 'They helped us scale fast and smooth.',
    quote: (
      <>
        <strong className="font-semibold">
          Everything from SEO to UI felt tailored and impactful.
        </strong>{' '}
        Highly recommend!
      </>
    ),
  },
  {
    name: 'Aarushi Patel',
    title: 'Marketing Lead, FlexDigital',
    image: 'https://i.pravatar.cc/150?img=40',
    rating: 5,
    intro: 'Campaign performance has skyrocketed since we partnered with Shreeja.',
    quote: (
      <>
        <strong className="font-semibold">
          Their analytics dashboard and strategy team are top-notch.
        </strong>{' '}
        We’ve doubled our ROI!
      </>
    ),
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold font-display">
          What Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Clients Say
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Real businesses. Real results. Here's what they think of working with us.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-2"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-white rounded-xl p-6 shadow-sm border transition duration-300 group hover:shadow-lg hover:border-transparent hover:ring-2 hover:ring-purple-500 hover:ring-opacity-40 overflow-hidden max-w-[95%] mx-auto h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 z-0 rounded-xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.intro}</p>

                <p className="text-sm font-medium text-gray-800 bg-purple-50 border-l-4 border-purple-500 p-3 rounded-md">
                  {t.quote}{' '}
                  <span className="text-purple-600 font-semibold">Read More...</span>
                </p>

                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-4">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={idx < t.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
