import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SingleSectionThreeImages() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".single-compare",
        start: "top top",
        end: "+=" + window.innerHeight * 3, 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".img1", { clipPath: "inset(0 100% 0 0)", ease: "none", duration: 0.5 }, 0);
    tl.to(".img-divider", { right: "100%", ease: "none", duration: 0.5 }, 0);

    tl.set(".img-divider", { right: "0%" });
    tl.to(".img2", { clipPath: "inset(0 100% 0 0)", ease: "none", duration: 0.5 }, ">");
    tl.to(".img-divider", { right: "100%", ease: "none", duration: 0.5 }, "<");

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <h1 className="text-center font-bold text-5xl md:text-7xl pb-28">
        <p className="text-gray-300">Choose your
          .</p>{" "}
        <p className="titanium-glow text-white">Photographic Style.</p>
        <p className="text-gray-300">Change it up. Change it back.
        </p>{" "}
      </h1>
      <div
        className="single-compare"
        style={{ height: "100vh", background: "#000", position: "relative" }}
      >
        

        <img
          src="images/hero_style1__ejjuw3sw3t0m_medium.jpg"
          alt="img3"
          style={fullStyle}
          className="img3"
        />

        <img
          src="images/hero_style2__gbh1d5shzmie_medium.jpg"
          alt="img2"
          style={fullStyle}
          className="img2"
        />

        <img
          src="images/hero_style3__ebrovo7velkm_medium.jpg"
          alt="img1"
          style={fullStyle}
          className="img1"
        />

        {/* moving divider */}
        <div className="img-divider" style={dividerStyle} />
      </div>
      <p className="max-w-4xl mx-auto py-28 text-center text-xl text-gray-400 font-semibold leading-relaxed">
        Our latest generation of Photographic Styles gives you greater creative flexibility than ever before,
        so you can <span className="text-white">make every photo even more you.</span>
        And thanks to advances in our image pipeline, you can now reverse any style, anytime.
      </p>

    </>
  );
}

// common style for all imgs
const fullStyle = {
  position: "absolute",
  top: "4px",
  left: "4px",
  right: "8px", 
  bottom: "4px", 
  width: "calc(100% - 30px)", // طرح الـ 4px من كل جنب
  height: "calc(100% - 8px)",
  objectFit: "cover",
  borderRadius: "26px", 
  clipPath: "inset(0 0 0 0 round 16px)", // عشان الـclipPath ما يكسرش الـradius
  willChange: "clip-path",
};

const dividerStyle = {
  position: "absolute",
  top: "1px",
  bottom: "1px",
  right: "1%",
  width: "18px",
  // borderRadius: "9px",
  background: 'black',
  // mixBlendMode: "difference",
  // pointerEvents: "none",
};

export default SingleSectionThreeImages;
