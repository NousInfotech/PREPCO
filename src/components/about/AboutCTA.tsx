"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipLoader } from "react-spinners";

gsap.registerPlugin(ScrollTrigger);

interface AboutCTAProps {
  title: string;
  description: string;
  tamilVideo: string;
  englishVideo: string;
}

const AboutCTA: React.FC<AboutCTAProps> = ({ title, description, tamilVideo, englishVideo }) => {
  const [isTamil, setIsTamil] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Default to false to avoid loader on English video

  useEffect(() => {
    gsap.fromTo(
      ".cta-text-h3",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-h3",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-text-p1",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-text-p1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".cta-video",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "easeOut",
        scrollTrigger: {
          trigger: ".cta-video",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleLanguageSwitch = (language: boolean) => {
    if (language) {
      setIsLoading(true); // Show loader only when switching to Tamil
    }
    setIsTamil(language);
  };

  return (
    <section className="px-8 py-16 lg:px-16 flex flex-col gap-4 bg-accent-2 text-primaryDark">
      <h3 className="cta-text-h3 text-custom-20-bold lg:text-custom-32">{title}</h3>
      <p className="cta-text-p1 text-custom-14 lg:text-custom-20-2">{description}</p>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <button className="cta-button w-full md:w-fit p-3 lg:py-3 lg:px-6 bg-custom-gradient shadow-double-inset text-white lg:font-semibold text-custom-16-bold lg:text-lg custom-border-radius">
          Book a consultation
        </button>

        <div className="flex w-full md:w-fit">
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${
              !isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-gray-200 text-primary"
            } rounded-l-3xl border-r-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(false)}
          >
            English
          </button>
          <button
            className={`px-6 py-3 font-medium text-sm shadow-lg border-[2px] border-teal-600 transition-all duration-300 transform ${
              isTamil ? "bg-gradient-to-b from-teal-400 to-teal-800 text-white shadow-double-inset" : "bg-gray-200 text-primary"
            } rounded-r-3xl border-l-0 w-1/2 md:w-fit`}
            onClick={() => handleLanguageSwitch(true)}
          >
            தமிழ்
          </button>
        </div>
      </div>
      <div className="relative">
        {isLoading && (
          <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-gray-200 rounded-3xl">
            <ClipLoader color="#022c2b" />
          </div>
        )}
        <video
          key={isTamil ? tamilVideo : englishVideo}
          className={`cta-video inset-0 w-full h-full object-cover border-none rounded-3xl ${isLoading ? "hidden" : "block"}`}
          autoPlay
          loop
          muted
          preload="auto"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={isTamil ? tamilVideo : englishVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default AboutCTA;
