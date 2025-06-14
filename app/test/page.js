"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EventsPage() {
  return (
    <main className="bg-white text-gray-800 dark:bg-neutral-950 dark:text-white">
      {/* Hero */}
      <section className="relative h-[70vh]  text-white flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Annual TechFest 2025
          </motion.h1>
          <p className="text-lg md:text-xl">June 21 - 23 | New Delhi, India</p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About the Event</h2>
        <p className="text-lg leading-relaxed">
          TechFest is a 3-day celebration of innovation, coding, design, and
          creativity. Whether you're a developer, designer, or tech
          enthusiast—there's something for everyone. Join us for keynotes,
          workshops, hackathons, and more!
        </p>
      </section>

      {/* Schedule */}
      <section className="bg-gray-50 dark:bg-neutral-900 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">Schedule</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Day 1", "Day 2", "Day 3"].map((day, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{day}</h3>
              <ul className="text-sm space-y-1">
                <li>🕘 10:00 AM – Opening Ceremony</li>
                <li>💻 11:00 AM – Workshops</li>
                <li>🎤 02:00 PM – Speaker Sessions</li>
                <li>🎮 06:00 PM – Fun Activities</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Guest Speakers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <Image
                src={`/speakers/speaker${i}.jpg`}
                alt={`Speaker ${i}`}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-medium">Speaker {i}</h4>
              <p className="text-sm text-gray-500">CTO, TechCorp</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="mb-6 text-lg">Spots are limited — Register now!</p>
        <a
          href="/register"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Register Now
        </a>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src="/nikhil.jpg"
              alt={`Gallery ${i}`}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">FAQs</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-lg">Who can attend?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Anyone passionate about technology—students, professionals, or hobbyists!
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg">Is registration free?</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Yes! The event is completely free but registration is mandatory.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
