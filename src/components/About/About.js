import './About.css'
const About = () => {
  return (
    <div className="about-wrapper">

      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-text">
          <h1>Shop Smart. Discover More.</h1>
          <p>
            Welcome to ShopHub your one-stop destination to explore trending
            products, best deals, and top-rated items across categories.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="Shopping"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="about-section">

        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Search products"
          />
          <h2>Smart Search</h2>
          <p>
            Quickly find products by name and explore a wide range of items
            with ease.
          </p>
        </div>

        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="Top rated products"
          />
          <h2>Top Rated Products</h2>
          <p>
            Discover highly rated products loved by customers and make better choices.
          </p>
        </div>

        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Fast experience"
          />
          <h2>Fast Experience</h2>
          <p>
            Optimized for speed to give you a smooth and seamless shopping experience.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About