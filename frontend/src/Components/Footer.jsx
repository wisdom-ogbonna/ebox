import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPaperPlane 
} from "react-icons/fa";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div id="contact">
          <h2 className="text-2xl font-bold text-white">Eboxz</h2>
          <p className="mt-4 text-sm lg:text-left text-gray-200">
            Call : +234 9057319254
            <br />
            Email: contacteboxz@gmail.com
            <br />
            Address: Choba, Port Harcourt, Rivers State
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shipping" className="hover:text-white transition">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-white transition">Returns & Refunds</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/support" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md placeholder:text-gray-400 sm:w-auto flex-1 text-black outline-none ring-2 ring-gray-700 focus:ring-white"
            />
            {/* Mobile (small screens): Subscribe text */}
            <button
            type="submit"
            className="inline-block md:hidden px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md transition"
            >
            Subscribe
            </button>

            {/* Tablet & Desktop (md+): Send icon */}
            <button
            type="submit"
            aria-label="Send"
            className="hidden md:flex p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md items-center justify-center transition"
            >
            <FaPaperPlane />
            </button>

          </form>

          {/* Socials */}
          <div className="flex justify-self-center space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-400 py-4 text-center text-sm text-gray-500">
        <Copyright />
      </div>
    </footer>
  );
}