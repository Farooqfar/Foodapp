export default function Footer() {
  return (
    <footer className="bg-[#e9ecef] text-[#1c1c1c] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">EaT FooD</h2>
          <p className="text-sm text-[#1c1c1c]">
            Savor the flavor. Fresh ingredients, authentic taste.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#1c1c1c]">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="/booking" className="hover:text-yellow-400">Book a Table</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-[#1c1c1c]">
            <li>📞 +92 300 1234567</li>
            <li>📧 info@eatfood.com</li>
            <li>📍 Lahore, Pakistan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
            <a href="#" className="hover:text-yellow-400">X</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-300 border-t border-white/10 pt-5">
        &copy; {new Date().getFullYear()} EaT FooD. All rights reserved.
      </div>
    </footer>
  );
}
