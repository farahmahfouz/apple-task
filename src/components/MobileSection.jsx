import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobileSection() {
    const sectionRef = useRef(null);
    const overlayRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(overlayRef.current, {
                scale: 4.8,
                opacity: 1,
            });

            gsap.to(textRef.current, {
                y: -250,
                opacity: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "center center",
                    scrub: 1, 
                },
            });

            gsap.to(overlayRef.current, {
                scale: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "center center",
                    end: "center+=300 center",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[200vh] overflow-hidden bg-black pt-20"
        >
            <div className="absolute inset-0 flex items-center justify-center h-screen pointer-events-none z-20">
                <h2
                    ref={textRef}
                    className="text-center text-white text-4xl md:text-7xl font-semibold leading-tight"
                >
                    New 48MP Ultra Wide camera. <br />
                    Viva la resolution.
                </h2>
            </div>

            <div
                ref={overlayRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen flex items-center justify-center pointer-events-none z-10"
            >
                <div className="phone-frame relative ">
                    <img
                        src="/src/images/hero_camera_hw__l3esjbq1awy2_xlarge.png"
                        alt="Phone Frame"
                        className="frame "
                    />
                    <img
                        src="/src/images/hero_camera_screen_zoom__bltohecbqbv6_xlarge.jpg"
                        alt="Screen"
                        className="screen"
                    />
                </div>
            </div>
        </section>
    );
}
