import React, { useState } from "react";
import video1 from "../assets/video-1.mp4";
import video2 from "../assets/video-2.mp4";
import video3 from "../assets/video-3.mp4";
import video4 from "../assets/video-4.mp4";
import { motion } from "framer-motion";

function Work() {
  const [elems, setElems] = useState([
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      video: video1,
    },
    {
      heading: "Columbia",
      subheading: "Pioneering Sustainable Solution",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
      video: video2,
    },
    {
      heading: "Pixelflakes",
      subheading: "Architectural marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
      video: video3,
    },
    {
      heading: "Studio D",
      subheading: "Urban and Landscape Design",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)",
      video: video4,
    },
  ]);

  return (
    <div className="w-full relative sm:px-20">
      <div className="max-w-screen-2xl py-14 mx-auto px-5 sm:px-14">
        <div className="featured flex gap-2 items-center">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="font-[500]">Featured Projects</h3>
        </div>
        <h1 className="text-6xl sm:text-[15vw] sm:tracking-tight leading-none overflow-hidden font-[500] my-5">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className="text-lg leading-6">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-10 mt-10">
          {elems.map((item, index) => (
            <div key={index} className="elem w-full sm:w-[43%] mt-10">
              <div className="video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{opacity:0}}
                  data-scroll
                  data-scroll-speed="-.5"
                  className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full block z-[1] h-full scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src={item.video}
                ></video>
              </div>
              <div className="mt-4">
                <h1 className="font-semibold">{item.heading}</h1>
                <p className="opacity-50">{item.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
