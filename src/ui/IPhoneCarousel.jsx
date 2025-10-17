import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function IPhoneCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "images/display__f5509jfp9nyq_xlarge_2x.jpg",
      title: "iPhone 16 Pro Max has our largest iPhone display ever"
    },
    {
      image: "images/thin__eqeewfn1mgsy_medium_2x.jpg",
      title: "The thinnest borders on any Apple product"
    },
    {
      image: "images/recycle__bjo9ezsrw6vm_xlarge_2x.jpg",
      title: "Premium Grade 5 titanium is exceptionally durable"
    },
    {
      image: "images/color__eaawe4bmivki_xlarge.jpg",
      title: "Premium Grade 5 titanium is exceptionally durable"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const visibleSlides = 3;
  const slideWidth = 100 / visibleSlides;

  return (
    <section className='background min-h-screen '>
      <div className='max-w-7xl mx-auto py-28 flex gap-52 px-52 text-xl '>
        <p className='text-[#86868b]'>iPhone 16 Pro features a Grade 5 titanium design with a new,
          refined microblasted finish. Titanium has one of the highest strength-to-weight ratios of any metal,
          making these models <span className='text-white/90'> incredibly strong and impressively light.</span>
          iPhone 16 Pro comes in four stunning colors — including new Desert Titanium.</p>
        <p className='text-[#86868b]'>Internal design improvements — including a 100 percent recycled aluminum thermal
          substructure and back glass optimizations that further dissipate heat
          — enable up to 20 percent <span className='text-white/90'> better sustained performance </span>than iPhone 15 Pro.
          So you can do all the things you love — like high-intensity gaming — for longer.</p>
      </div>
      <div className="flex items-center ">

        <div className="w-full max-w-7xl ps-[206.75px]">
          {/* Carousel Container */}
          <div className="relative ">
            <div
              className="flex gap-4 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (slideWidth + 1.33)}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: "100%", maxWidth: "550px" }}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-neutral-900 group"
                    style={{ height: "550px" }}>
                    {/* Image */}
                    <div className="w-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Title Below Image */}
                  <p className="ps-10 pt-8 pb-5 pe-1 text-md md:text-[17px] font-semibold leading-tight max-w-96">
                    <span
                      className="bg-[linear-gradient(90deg,#efcdbb,#dab8a4_50%,#a3735e_calc(100%_-_5px),rgba(0,0,0,0)_calc(100%_-_4px))] bg-clip-text text-transparent"
                    >
                      {slide.title}
                    </span>
                  </p>


                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
          {/* Navigation Buttons - Bottom Right */}
          <div className="flex justify-end gap-3 mt-8 pe-16">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-200"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= slides.length - 1}
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-200"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>

    </section>
  );
}
