
function HeroSection() {
    return (
        <section
            id="hero"
            className="h-screen relative flex items-start justify-center pt-24 overflow-hidden"
        >
            <video
                src="/videos/xlarge (3).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/20" />
            
            <h3 className="relative z-10 text-5xl md:text-4xl font-semibold text-white text-center">
                iPhone 16 Pro
            </h3>

            {/* Buy button centered near bottom like Apple hero */}
            <button
                className="absolute z-10 bottom-16 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-base px-5 py-2 rounded-full shadow-lg shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
            >
                Buy
            </button>
        </section>
    )
}

export default HeroSection