"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <main className="min-h-screen text-white pb-24 font-mono">
      <div className="relative max-w-[900px] mx-auto px-6 pt-36">
        <h1 className="text-4xl font-bold font-mono text-yellow-400/90 tracking-wide mb-4" style={{ fontFamily: "var(--font-heading), serif" }}>
          Get in Touch
        </h1>
        <p className="text-gray-400 text-sm max-w-xl leading-relaxed mb-16">
          Let's build something together. Whether you have a project in mind or just want to connect, I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Side */}
          <div className="bg-[#0a0a0a] rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-2xl">
            <h2 className="text-xl font-bold text-gray-100 mb-8" style={{ fontFamily: "var(--font-heading), serif" }}>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-gray-300">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-gray-300">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Tell me about your project or just say hello!"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-yellow-500 text-black font-bold text-sm py-3.5 rounded-lg hover:bg-yellow-400 transition-colors flex justify-center items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-100 mb-6" style={{ fontFamily: "var(--font-heading), serif" }}>
              Connect
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-10">
              Based in India, but working with clients worldwide.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div>
                <span className="text-xs font-bold text-gray-500 block mb-1">Email</span>
                <Link href="mailto:srivastavaaryanalc76@gmail.com" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                  srivastavaaryanalc76@gmail.com
                </Link>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 block mb-2">Follow Me</span>
                <div className="flex gap-4">
                  <Link href="https://github.com/Aryan123-rgb" target="_blank" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">GitHub</Link>
                  <Link href="https://x.com/yetanothercode" target="_blank" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Twitter</Link>
                  <Link href="https://www.linkedin.com/in/aryan-srivastava-560b91255/" target="_blank" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">LinkedIn</Link>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 mt-auto">
              <p className="text-sm text-gray-300 italic mb-4">
                "Make it work, make it right, make it fast."
              </p>
              <p className="text-xs font-bold text-yellow-400/80 text-right uppercase tracking-wider">
                — Kent Beck
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
