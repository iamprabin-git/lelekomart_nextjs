import Link from "next/link";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">About Our Store</h3>
            <p className="text-gray-400">
              We provide the best quality products with fast delivery and
              excellent customer service. Our mission is to make your shopping
              experience enjoyable and hassle-free.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FiFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FiTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FiInstagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FiLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FiYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0 text-[#016EB7] dark:text-blue-400" />
                <p className="text-gray-400">
                  Godawari Municipality-5,
                  <br />
                  Lele, Lalitpur
                </p>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 flex-shrink-0 text-[#016EB7] dark:text-blue-400" />
                <Link
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  +977 9808083620
                </Link>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 flex-shrink-0 text-[#016EB7] dark:text-blue-400" />
                <Link
                  href="mailto:info@yourstore.com"
                  className="text-gray-400 hover:text-[#016EB7] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  info.lelekomart@gmail.com
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                Newsletter
              </h4>
              <p className="text-gray-400 mb-3">
                Subscribe for updates and special offers
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 bg-slate-600 focus:ring-[#016EB7] text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#016EB7] hover:bg-[#015a9b] text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
            We Accept
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img
              src="https://khaltibyime.khalti.com/wp-content/uploads/2025/07/Logo-for-Blog.png"
              alt="Khalti"
              className="h-8"
            />
            <img
              src="https://img.favpng.com/7/14/6/esewa-fonepay-pvt-ltd-logo-portable-network-graphics-image-brand-png-favpng-aLLyxWtspEZQckmv19jDj2TWC.jpg"
              alt="Esewa"
              className="h-8"
            />
            <img
              src="https://www.extensodata.com/images/clients/1642677877_fonepay_logo.png"
              alt="Fonepay"
              className="h-8"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lele ko Mart. All rights
            reserved.
          </p>
          <p className="mt-2">Designed and developed by <Link href="https://dangolprabin.com.np">Prabin Dangol</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
