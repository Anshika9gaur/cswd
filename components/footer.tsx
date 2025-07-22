'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-10 px-6 md:px-16 border-t border-gray-700 ">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo.png"
            alt="CSWD MIET Logo"
            width={100}
            height={100}
            className="mb-2"
          />
          <h2 className="text-3xl font-semibold">
            Be a Force<br />
            <span className="text-blue-400">for Good!</span>
          </h2>
        </div>

        {/* Contact & Visit Info */}
        <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-2">CONTACT US:</h3>
            <p>naitik.kumar.cse.2023@miet.ac.in</p>
            <p>cswd@miet.ac.in</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-2">VISIT US AT:</h3>
            <p>Meerut Institute of Engineering & Technology</p>
            <p>Meerut, India</p>
            {/* Google Map Embed */}
            <div className="mt-4 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.4832773303783!2d77.63842827530235!3d28.97304697548041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1748585878847!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 text-center">
        <h3 className="font-semibold text-lg mb-4">FOLLOW US ON OUR SOCIALS:</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <Link href="https://www.linkedin.com/company/computer-society-of-web-developer/" target='_blank' aria-label="LinkedIn" className="hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link href="https://www.instagram.com/cswdmiet" target='_blank' aria-label="Instagram" className="hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="https://chat.whatsapp.com/IFG0duEFvtg2GItmSwy6zm" target='_blank' aria-label="WhatsApp" className="hover:text-green-400">
            <i className="fab fa-whatsapp"></i>
          </Link>
          <Link href="https://x.com/CSWDMIET?t=d8O6AHJE1oGq42aD-Y9g1A&s=09" aria-label="Teams" className="hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        <p>© <span className="text-white">CSWD MIET</span> | DESIGNED BY CSWD MIET TEAM</p>
      </div>
    </footer>
  );
}
