const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-16 bg-white shadow-sm">

        {/* Hero Text */}
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Shop Smart. Discover More.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Welcome to ShopHub — your one-stop destination to explore trending
            products, best deals, and top-rated items across categories.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-[420px] h-[260px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* FEATURES */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-10 py-16">

        {/* Card 1 — Smart Search */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-full md:max-w-xs hover:shadow-xl hover:scale-105 transition duration-200">
          <div className="w-full h-44 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Search products"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Smart Search</h2>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Quickly find products by name and explore a wide range of items with ease.
          </p>
        </div>

        {/* Card 2 — Top Rated */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-full md:max-w-xs hover:shadow-xl hover:scale-105 transition duration-200">
          <div className="w-full h-44 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Top rated products"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Top Rated Products</h2>
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Discover highly rated products loved by customers and make better choices.
          </p>
        </div>

        {/* Card 3 — Fast Experience */}
        <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-md p-6 w-full md:max-w-xs hover:shadow-xl hover:scale-105 transition duration-200">
          <div className="w-full h-44 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Fast experience"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Fast Experience</h2>
            <p className="text-sm text-gray-500 text-center leading-relaxed">
            Optimized for speed to give you a smooth and seamless shopping experience.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About