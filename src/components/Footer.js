// components/Footer.js
import Link from "next/link"; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Trxvl.</h3>
            <p className="text-sm">
              Explore the world with Trxvl. Your ultimate travel guide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Destinations", "Travel Tips", "Booking", "Travel Insurance", "Contact Us"].map((link, index) => (
                <li key={index}>
                  <Link href="#">
                    <span className="text-sm hover:text-gray-400 transition duration-200">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Travel Blog", "FAQs", "Testimonials", "Privacy Policy", "Terms of Service"].map((link, index) => (
                <li key={index}>
                  <Link href="#">
                    <span className="text-sm hover:text-gray-400 transition duration-200">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <ul className="space-y-3">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((link, index) => (
                <li key={index}>
                  <Link href="#">
                    <span className="text-sm hover:text-gray-400 transition duration-200">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            © 2024 Trxvl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;