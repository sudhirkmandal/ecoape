import React, { useEffect, useRef } from "react";
import video6 from "../assets/video-6.mp4";
import video7 from "../assets/video-7.mp4";
import gsap, { Linear, ScrollTrigger } from "gsap/all";

function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const four = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 90%",
        scrub: 1,
      },
    });   
    tl.to(
      first.current,
      {
        x: "50%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
        second.current,
        {
          x: "-50%",
          ease: Linear,
        },
        "a"
      );
    tl.to(
      third.current,
      {
        x: "-50%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
        four.current,
        {
          x: "50%",
          ease: Linear,
        },
        "a"
      );
  });

  return (
    <div
      ref={parent}
      className="w-full h-[67vh] sm:h-[120vh] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="w-[45%] sm:w-[25%] sm:h-[80%] h-[60%] relative">
        <div
          ref={first}
          className="w-20 sm:w-40 sm:h-52 h-28 absolute top-6 -right-1/3"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="w-[7rem] sm:w-[20rem] absolute sm:-left-[80%] -left-[45%] top-1/3 aspect-video">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover top-1/2 left-1/2 absolute scale-[1.1] -translate-x-[50%] -translate-y-[50%]"
            src={video6}
          ></video>
        </div>
        <div
          ref={third}
          className="absolute aspect-video w-[9rem] sm:w-[17rem] -left-[60%] -bottom-10"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={four} className="absolute w-[10rem] sm:w-[17rem] aspect-[2/1.5] -right-[55%] sm:-bottom-[7%] sm:-right-[30%   ] -bottom-[30%]">
          <video
            className="w-full h-full object-cover top-1/2 left-1/2 absolute scale-[1.1] -translate-x-[50%] -translate-y-[50%]"
            autoPlay
            loop
            muted
            src={video7}
          ></video>
        </div>
        <img 
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
