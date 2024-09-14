import React, { useEffect, useRef } from "react";
import video5 from "../assets/video-5.mp4";
import gsap, { ScrollTrigger } from "gsap/all";
import { Power4 } from "gsap";

function PlayReel() {
  gsap.registerPlugin(ScrollTrigger);

  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "top 0",
        pin: true,
        scrub: 1,
      },
    });
    tl
    .to(videodiv.current, {
      width: "105%",
      height: "105%",
      ease: Power4,
    },"a")
    .to(play.current,{
      x:"100%",
      ease: Power4,
    },"a")
    .to(reel.current,{
      x:"-100%",
      ease: Power4,
    },"a")

  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden relative bg-black"
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full scale-[1.2] object-cover absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
          src={video5}
        ></video>
      </div>

      <div className="overlay absolute w-full h-full text-white flex py-20 flex-col justify-between">
        <div className="w-full flex items-center justify-center gap-3">
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
          <h3>Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-32 sm:gap-96">
          <div ref={play} className="text-6xl sm:text-8xl font-semibold">Play</div>
          <div ref={reel} className="text-6xl sm:text-8xl font-semibold">Reel</div>
        </h1>
        <p className="text-center px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
