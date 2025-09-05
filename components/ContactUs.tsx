'use client';

import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      alert('Something went wrong. Try again later.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-sky px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          Send a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            suppressHydrationWarning
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <input
            suppressHydrationWarning
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <input
            suppressHydrationWarning
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            suppressHydrationWarning
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            required
            className="w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <button
            suppressHydrationWarning
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <ClipLoader color="#ffffff" size={20} />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
