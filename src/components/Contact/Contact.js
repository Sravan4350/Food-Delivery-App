const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-16 bg-white shadow-sm">
        
        {/* Hero Text */}
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            We're Here to Help
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Have questions about products, orders, or support?
            Reach out to us anytime.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-[420px] h-[260px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Support"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* CUSTOMER SUPPORT */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-16">

        {/* Support Text */}
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Customer Support
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Need help with products, pricing, or orders?
            Our support team is ready to assist you.
          </p>

          {/* Email Badge */}
          <div className="inline-block bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-sm px-4 py-2 rounded-lg w-fit">
            support@shophub.com
          </div>

          <p className="text-xs text-gray-400">
            We usually respond within 24 hours.
          </p>
        </div>

        {/* Support Image */}
        <div className="w-full md:w-[420px] h-[260px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Customer support"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* CONTACT FORM */}
      <div className="flex flex-col items-center gap-6 px-10 py-16 bg-white shadow-sm">
        
        <h2 className="text-2xl font-bold text-gray-800">
          Send Us a Message
        </h2>

        <form className="flex flex-col gap-4 w-full max-w-lg">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-gray-50 resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-3 rounded-lg hover:scale-105 transition duration-200 cursor-pointer shadow-sm"
          >
            Send Message
          </button>

        </form>
      </div>

      {/* SOCIAL */}
      <div className="flex flex-col items-center gap-4 py-12 bg-gray-100">
        
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Follow Us
        </p>

        <div className="flex gap-6">

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 h-8 hover:scale-110 transition duration-200 opacity-80 hover:opacity-100"
            />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition duration-200 opacity-80 hover:opacity-100"
            />
          </a>

        </div>
      </div>

    </div>
  )
}

export default Contact