export default function LandingContent() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-50">
      {/* Hero Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=100"
        alt="Stylish shopping experience"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-[100vh] justify-center text-center px-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span className="text-cyan-400">Eboxz</span>
        </h1>
        <p className="mt-4 max-w-2xl text-md sm:text-xl text-gray-200">
          The easiest way to create your online store and share your products with the world. Whether you’re selling digital goods or physical items, we help you build a store in minutes—no coding, no stress, just growth.the easiest way to create your online store and share your products with the world. Whether you’re selling digital goods or physical items, we help you build a store in minutes—no coding, no stress, just growth.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition">
            Start Shopping
          </button>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}