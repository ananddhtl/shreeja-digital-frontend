import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ValueProp from "../components/ValueProp";
import Services from "../components/Services";
import TrustUs from "../components/TrustUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FadeInLayout from "../components/FadeInLayout";

const HomePage = () => {
  const location = useLocation();

  const refs = {
    home: useRef(null),
    value: useRef(null),
    services: useRef(null),
    trust: useRef(null),
    testimonials: useRef(null),
    faq: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to section if location.state.scrollTo exists
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target && refs[target]?.current) {
      const offset = 80;
      const top = refs[target].current.getBoundingClientRect().top + window.scrollY - offset;
      setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="font-sans text-base text-gray-800">
      <Navbar refs={refs} />
      <FadeInLayout>
        <div ref={refs.home}><Hero /></div>
        <div ref={refs.value}><ValueProp /></div>
        <div ref={refs.services}><Services /></div>
        <div ref={refs.trust}><TrustUs /></div>
        <div ref={refs.testimonials}><Testimonials /></div>
        <div ref={refs.faq}><FAQ /></div>
        <div ref={refs.contact}><CTA /></div>
        <Footer />
      </FadeInLayout>
    </div>
  );
};

export default HomePage;
