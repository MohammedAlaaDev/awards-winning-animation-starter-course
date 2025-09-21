import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { IoLocation } from "react-icons/io5";
import gsap from "gsap";

const Hero = () => {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const nextVideo = useRef<HTMLVideoElement | null>(null);
  const videos = 4;
  const [currentIdx, setCurrentIdx] = useState(0);
  const nextIdx = (currentIdx + 1) % videos;

  const handleNextVideo = () => {
    const animatedVideo = `hero-${nextIdx}`;
    const videosIDs = ["hero-0", "hero-1", "hero-2", "hero-3"];
    const filteredVids = videosIDs.filter((vidID) => {
      return vidID !== `hero-${nextIdx}`;
    });

    filteredVids.forEach((vid) => {
      gsap.set(document.getElementById(vid), { zIndex: 20 });
    });

    gsap.set(document.getElementById(animatedVideo), { zIndex: 40 });
    setCurrentIdx((prev) => prev + 1);

    gsap.to(nextVideo.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.inOut",
    });

    const croppedVideo: HTMLVideoElement | null =
      document.getElementById(animatedVideo);

    if (croppedVideo) {
      croppedVideo.pause();
      croppedVideo.currentTime = 0;
      croppedVideo.play();
    }
  };

  useEffect(() => {
    if (!heroSectionRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const heroSize = heroSectionRef.current.getBoundingClientRect();
      const { clientX, clientY } = e;
      const boxSize = 200;

      const top = clientY - boxSize / 2;
      const right = heroSize.width - (clientX + boxSize / 2);
      const bottom = heroSize.height - (clientY + boxSize / 2);
      const left = clientX - boxSize / 2;

      const x1 = left;
      const y1 = top;
      const x2 = heroSize.width - right;
      const y2 = top;
      const x3 = heroSize.width - right;
      const y3 = heroSize.height - bottom;
      const x4 = left;
      const y4 = heroSize.height - bottom;

      const nextVidClipPath = `polygon(
        ${x1}px ${y1}px,
        ${x2}px ${y2}px,
        ${x3}px ${y3}px,
        ${x4}px ${y4}px
      )`;

      gsap.set(nextVideo.current, {
        clipPath: nextVidClipPath,
        cursor: "pointer",
      });
    };

    heroSectionRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroSectionRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="h-dvh w-screen relative">
      <div
        ref={heroSectionRef}
        className="absolute inset-0 overflow-hidden z-10"
      >
        <div id="video-frame">
          {Array.from({ length: videos }, (_, idx) => (
            <video
              key={idx}
              className="absolute object-cover h-dvh w-dvw"
              src={`/videos/hero-${idx}.mp4`}
              id={`hero-${idx}`}
              autoPlay
              muted
              loop
            />
          ))}
          <video
            ref={nextVideo}
            onClick={handleNextVideo}
            className="absolute object-cover h-dvh w-dvw z-40"
            src={`/videos/hero-${nextIdx}.mp4`}
            autoPlay
            muted
            loop
          />
        </div>
        <h1 className="special-font font-zentry text-9xl absolute bottom-5 z-40 right-5 text-blue-100">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-5 left-5 z-40 text-blue-100 flex flex-col items-start justify-center gap-3">
          <h2 className="special-font font-zentry text-9xl ">
            REDEFI<b>N</b>
          </h2>
          <p className="font-robert-regular">
            ENTER THE METAGAME LAYER
            <br />
            UNLEASH THE PLAY ECONOMY
          </p>
          <Button title="WATCH TRAILER" leftIcon={<IoLocation />} />
        </div>
      </div>
      <h2 className="special-font font-zentry text-9xl absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h2>
    </section>
  );
};

export default Hero;
