import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Activebar from '../ui/Activebar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function HighlightSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef(null)
  const videoRefs = useRef([])
  const [itemWidth, setItemWidth] = useState(0)

  gsap.registerPlugin(ScrollTrigger)

  const activebarRef = useRef(null)

  useEffect(() => {
    const activebar = activebarRef.current
    const section = containerRef.current?.closest('section')

    if (!activebar || !section) return

    gsap.set(activebar, { opacity: 0, y: 50 })

    ScrollTrigger.create({
      trigger: section,
      start: 'top center', 
      end: 'bottom center', 
      onEnter: () => {
        gsap.to(activebar, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      },
      onLeave: () => {
        gsap.to(activebar, { opacity: 0, y: 50, duration: 0.6 })
      },
      onEnterBack: () => {
        gsap.to(activebar, { opacity: 1, y: 0, duration: 0.8 })
      },
      onLeaveBack: () => {
        gsap.to(activebar, { opacity: 0, y: 50, duration: 0.6 })
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])


  const videos = [
    '/videos/iPhone 16 Pro and iPhone 16 Pro Max - Apple (AM) (5).mp4',
    '/videos/xlarge (2).mp4',
    '/videos/xlarge (1).mp4',
    '/videos/xlarge (3).mp4',
    '/videos/xlarge (4).mp4',
  ]

  const captions = [
    `So fast. So fluid.
     Get a feel for the all-new
     Camera Control`,
    `4K 120 fps Dolby Vision.
     4 studio-quality mics.
     A Pro studio in your pocket.`,
    `Thinner borders — for even larger displays. Brilliant.`,
    `All-new A18 Pro chip. Unrivaled performance. Unprecedented efficiency.`,
    "A huge leap in battery life. Game on.",
  ]

  useEffect(() => {
    const setWidth = () => {
      const container = containerRef.current
      if (!container) return
      const firstChild = container.querySelector('.carousel-item')
      if (firstChild) {
        const rect = firstChild.getBoundingClientRect()
        setItemWidth(rect.width + parseFloat(getComputedStyle(container).columnGap || 20))
      }
    }

    setWidth()
    window.addEventListener('resize', setWidth)
    return () => window.removeEventListener('resize', setWidth)
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v) {
        v.pause()
        v.currentTime = i === currentVideoIndex ? v.currentTime : 0
      }
    })

    const current = videoRefs.current[currentVideoIndex]
    if (current) {
      if (isPlaying) {
        current.play().catch(() => { })
      } else {
        current.pause()
      }
    }

    const container = containerRef.current
    if (container) {
      const gap = 20
      const scrollLeft = currentVideoIndex * (itemWidth || (container.offsetWidth + gap))
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [currentVideoIndex, isPlaying, itemWidth])

  const onTogglePlay = () => {
    const current = videoRefs.current[currentVideoIndex]
    if (current) {
      if (isPlaying) current.pause()
      else current.play().catch(() => { })
    }
    setIsPlaying((s) => !s)
  }

  const onVideoChange = (index) => {
    setCurrentVideoIndex(index)
  }

  const handleEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  return (
    <section className="bg-[#1d1d1f] ps-20 py-40">
      <h2 className="pb-20 ps-5 text-5xl font-semibold text-[rgb(245,245,247)] tracking-tight">
        Get the highlights.
      </h2>

      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
        }}
      >
        <div
          className="flex gap-5 px-20 min-w-max"
          style={{ alignItems: 'center' }}
        >
          {videos.map((src, i) => (
            <div
              key={i}
              className="carousel-item flex-shrink-0 w-[1100px] md:w-[1400px] lg:w-[1661px] h-[440px] md:h-[600px] lg:h-[740px] rounded-2xl overflow-hidden relative"
              style={{ scrollSnapAlign: 'center' }}
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={handleEnded}
              />

              {/* الجمل المتحركة */}
              {i === currentVideoIndex && (
                <motion.h5
                  key={currentVideoIndex}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute top-4 left-4 text-xl md:text-2xl lg:text-3xl font-semibold text-white p-12 rounded-2xl whitespace-pre-line"
                >
                  {captions[i]}
                </motion.h5>
              )}
            </div>
          ))}
        </div>
      </div>

      <div ref={activebarRef}>
        <Activebar
          currentVideo={currentVideoIndex}
          totalVideos={videos.length}
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          onVideoChange={onVideoChange}
        />
      </div>


    </section>
  )
}

export default HighlightSection
