import './contact.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-text">
          <h1>We’re Here to Help</h1>
          <p>
            Have questions about products, orders, or support? 
            Reach out to us anytime.
          </p>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Support"
          />
        </div>
      </div>

      {/* SUPPORT */}
      <div className="contact-section">
        <div className="contact-section-text">
          <h2>Customer Support</h2>
          <p>
            Need help with products, pricing, or orders? 
            Our support team is ready to assist you.
          </p>

          <div className="contact-email">
            support@shophub.com
          </div>

          <p className="contact-small">
            We usually respond within 24 hours.
          </p>
        </div>

        <div className="contact-section-image">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Customer support"
          />
        </div>
      </div>

      {/* CONTACT FORM (NEW) */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* SOCIAL */}
      <div className="contact-social-section">
        <p>Follow us</p>

        <div className="contact-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact