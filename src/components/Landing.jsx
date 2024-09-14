import { motion, stagger } from "framer-motion";
import { Expo } from "gsap/all";
import React from "react";

function Landing() {
  return (
    <div className="w-full relative h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt="Hero background showcasing digital design"
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="text h-full max-w-screen-2xl mx-auto px-5 sm:px-14 text-white">
          <div className="para mt-72 sm:mt-[30vw] sm:mb-16">
            {[
              "Global digital design studio partnering with",
              "brands and businesses that create exceptional",
              "experiences where people live, work, and unwind.",
            ].map((item, index) => (
              <p
                key={index}
                className="text-[4vw] sm:text-[1.5vw] masker overflow-hidden font-semibold"
              >
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            ))}
          </div>
          <div className="headings mt-5">
            {["Digital", "Design", "Experience"].map((item, index) => (
              <h1 key={index} className="text-7xl sm:text-[15vw] sm:leading-[14vw] -mt-12 py-9 overflow-hidden tracking-tighter leading-none font-[400]">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1,
                    delay: 1+index * 0.2,
                  }}
                  className="inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
            ))}
          </div>
          <div className="para2 mt-20 sm:w-1/3 w-full">
            <p className="text-[4.2vw] sm:text-[1.5vw] font-semibold">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div>
          <a
            href="#"
            className="border-b-[1px] border-zinc-100 pb-[2px] inline-block mt-10"
          >
            The Studio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
