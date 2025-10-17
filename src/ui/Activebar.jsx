import { FaPlay, FaPause } from 'react-icons/fa'

function Activebar({
  currentVideo = 0,
  totalVideos = 5,
  isPlaying = false,
  onTogglePlay,
  onVideoChange,
}) {
  const dots = Array.from({ length: totalVideos }, (_, i) => i)

  return (
    <div className="flex items-center justify-center gap-4 p-4 ">
      <button
        onClick={onTogglePlay}
        className="w-12 h-12 rounded-full bg-neutral-700/70  backdrop-blur-sm  hover:bg-neutral-600/70 flex items-center justify-center text-white/70 transition-colors duration-200"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4 ml-1" />}
      </button>

      <div className="flex items-center gap-5 bg-neutral-700/70 h-12 w-52 px-5 rounded-full">
        {dots.map((dot, index) => (
          <button
            key={index}
            onClick={() => onVideoChange(index)}
            className={`rounded-full transition-all duration-300 ease-out cursor-pointer
              ${
                index === currentVideo
                  ? 'bg-white/90 w-10 h-2'
                  : 'bg-white/50 w-2 h-2 hover:bg-white/70'
              }
            `}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Activebar
