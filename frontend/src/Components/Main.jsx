import { useNavigate } from "react-router-dom";

export default function Main() {
  const Navigate = useNavigate();
  return (
    <main className="w-full bg-gray-50 text-gray-800">
      {/* About Us */}
      <section id="about" className="py-20 px-6 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">About Eboxz</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Whether a beginner or an experienced seller—to set up a professional
          online store in just a few clicks. From product management to secure
          payments, we provide all the tools you need to succeed.
        </p>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 lg:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
          To simplify e-commerce by giving entrepreneurs, creators, and
          businesses of all sizes the power to launch, manage, and grow their
          online stores effortlessly—reaching customers everywhere.
        </p>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
          To become the world’s most trusted platform where anyone, anywhere,
          can turn their ideas into thriving online businesses and connect with
          a global marketplace.and also driving digital transformation and
          shaping the future of online trade.
        </p>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Innovation",
              text: "Always pushing the boundaries of what’s possible in e-commerce.",
            },
            {
              title: "Integrity",
              text: "Transparency, trust, and fairness in everything we do.",
            },
            {
              title: "Customer-Centric",
              text: "Our users come first — their satisfaction drives us.",
            },
            {
              title: "Excellence",
              text: "Delivering top-quality service, products, and support.",
            },
            {
              title: "Accessibility",
              text: "Making online shopping simple and inclusive for all.",
            },
            {
              title: "Sustainability",
              text: "Building for a greener, smarter future.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 lg:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              text: "We provide a seamless platform for creating professional online stores without technical expertise. Sellers can customize their storefronts, upload products, and launch within minutes.",
            },
            {
              text: "From e-books and courses to apparel and electronics, we offer tailored solutions for managing both digital downloads and physical inventory, ensuring smooth order fulfillment.",
            },
            {
              text: "Our system supports multiple global payment gateways, offering secure transactions and enabling customers to pay conveniently in their preferred currency.",
            },
            {
              text: "We provide real-time insights into sales, customer behavior, and inventory, helping businesses make informed decisions and optimize growth.",
            },
            {
              text: "Our expert support team is available to assist at every stage, from store setup to scaling operations, ensuring uninterrupted business continuity.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-600 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-200">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Eboxz */}
      <section className="py-20 px-6 lg:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Eboxz?</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              title: "Fast Delivery",
              text: "Lightning-speed logistics across cities.",
            },
            {
              title: "Premium Products",
              text: "Carefully curated, authentic, and top-quality.",
            },
            {
              title: "Secure Payments",
              text: "End-to-end encryption and trusted gateways.",
            },
            {
              title: "24/7 Support",
              text: "Always here for you, anytime, anywhere.",
            },
          ].map((point, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-20 bg-cyan-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join the Eboxz Shopping Revolution
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Be part of a future where e-commerce is fast, smart, and tailored for
          you. Start your journey with Eboxz today.
        </p>
        <button
          onClick={() => Navigate("/auth")}
          className="px-8 py-3 bg-white text-cyan-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}
