import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-white py-12 px-6 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">JUST PRODUCE.</h2>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="bg-[#28282D] p-4 rounded-lg">
            <p className="text-gray-400">Send us an email</p>
            <p className="text-white font-semibold">hi@flowbase.co</p>
          </div>
          <div className="bg-[#28282D] p-4 rounded-lg">
            <p className="text-gray-400">Give us a call</p>
            <p className="text-white font-semibold">(000) 000 - 0000</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#F97316] p-6 rounded-lg text-black">
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <div className="mt-4 flex">
            <input type="email" placeholder="Email address" className="flex-grow px-4 py-2 rounded-l-md focus:outline-none" />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h4 className="text-white font-semibold">PRODUCT</h4>
          <ul className="mt-2 space-y-2">
            <li>Start a Trial</li>
            <li>How It Works</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Watch Demo</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">RESOURCES</h4>
          <ul className="mt-2 space-y-2">
            <li>All Resources</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">COMPANY</h4>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>Why Phantom</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© Made by Haze Template & powered by Flowbase</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">🔗</span>
          <span className="cursor-pointer">🔗</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
