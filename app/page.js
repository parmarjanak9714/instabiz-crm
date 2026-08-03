"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Zap, Users, FileText, CheckCircle2, 
  Layers, ChevronRight, Mail, Phone, MapPin
} from "lucide-react";


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="bg-[#030712] text-white min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          The Next-Gen 360° CRM Platform
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Accelerate Your Sales & Operations Workflow
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl font-light leading-relaxed"
        >
          An all-in-one software built to seamlessly capture leads, automate complex HRMS workflows, manage error-free invoicing, and instantly connect your favorite external platforms.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-95 group">
            Get Started Free 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95">
            Book Live Demo
          </button>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative border-t border-slate-900">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">One Platform. Zero Chaos.</h2>
          <p className="text-slate-400 mt-4 text-lg">Engineered to handle every critical leg of your business operations smoothly.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Lead Management */}
          <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-100">Lead Management</h3>
            <p className="text-slate-400 leading-relaxed font-light">Capture potential clients instantly, track status dynamically, and automate targeted follow-ups to close deals faster.</p>
          </motion.div>

          {/*  HRMS */}
          <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 mb-6">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-100">Advanced HRMS</h3>
            <p className="text-slate-400 leading-relaxed font-light">Efficiently manage your expanding workforce, handle daily biometric or digital attendance, and streamline internal HR approval workflows.</p>
          </motion.div>

          {/*  Invoicing */}
          <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20 mb-6">
              <FileText className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-100">Smart Invoicing</h3>
            <p className="text-slate-400 leading-relaxed font-light">Generate custom professional tax invoices, set automated monthly recurring subscriptions, and monitor overdue receivables instantly.</p>
          </motion.div>
        </motion.div>
      </section>
      {/*  INTEGRATIONS / CONNECTORS SECTION */}
      <section className="py-32 bg-slate-950/40 border-y border-slate-900 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-xs font-medium mb-4">
              Connect Tools
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Universal Platform Integrations</h2>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed font-light">
              Stop shifting tabs to manually gather records. Pull customer inquiries automatically inside our ecosystem from heavy channel connectors with zero setup friction.
            </p>
            <div className="mt-8 space-y-3">
              {["Real-time sync within 2 seconds", "Pre-built webhooks for standard APIs", "Advanced duplicate entry filtration"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {[
              { name: "Facebook Ads", color: "from-blue-600/20 to-blue-900/40 border-blue-500/30 text-blue-400" },
              { name: "IndiaMART", color: "from-teal-600/20 to-teal-900/40 border-teal-500/30 text-teal-400" },
              { name: "99acres", color: "from-orange-600/20 to-orange-900/40 border-orange-500/30 text-orange-400" },
              { name: "Housing.com", color: "from-rose-600/20 to-rose-900/40 border-rose-500/30 text-rose-400" },
              { name: "Google Ads", color: "from-amber-600/20 to-amber-900/40 border-amber-500/30 text-amber-400" },
              { name: "Custom API", color: "from-purple-600/20 to-purple-900/40 border-purple-500/30 text-purple-400" },
            ].map((connector, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className={`bg-gradient-to-br ${connector.color} p-6 rounded-2xl border flex flex-col justify-between h-32 backdrop-blur-sm cursor-pointer shadow-xl`}
              >
                <Layers className="w-6 h-6" />
                <span className="font-semibold tracking-wide text-sm">{connector.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*  WHY CHOOSE US SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Built For Serious High Growth</h2>
          <p className="text-slate-400 mt-4 text-lg">Why leading enterprises drop traditional platforms to adopt our architecture.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Military Grade Security", desc: "Your sensitive corporate records and financial pipelines stay safe inside highly monitored end-to-end encrypted dynamic data servers." },
            { title: "Ultra Intuitive Interface", desc: "Clean visual structures designed specifically to minimize standard onboarding and training time for non-technical sales executives." },
            { title: "99.99% Guaranteed Uptime", desc: "Never experience blackouts during crucial peak operations. Enjoy high redundancy systems powered by robust cloud structures." },
            { title: "Infinite Custom Scaling", desc: "Whether handling 50 leads or processing millions of workflows monthly, the system expands processing clusters automatically." }
          ].map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl flex gap-5 hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                <ChevronRight className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-200">{benefit.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*  CONTACT US SECTION */}
      <section className="py-32 px-6 max-w-6xl mx-auto relative">
        <div className="absolute bottom-12 left-1/3 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-16 grid lg:grid-cols-5 gap-12 shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Ready to transform your business?</h2>
              <p className="text-slate-400 mt-4 font-light leading-relaxed">
                Fill up the form to coordinate a structured customized application walk-through with our operations architects.
              </p>
            </div>
            
            <div className="mt-8 space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" /> support@instacrm.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400" /> Corporate Hub, Ahmedabad, India
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Work Email</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Company Name</label>
              <input type="text" placeholder="Enterprise Inc." className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Message</label>
              <textarea rows={4} placeholder="Tell us about your team and operational requirements..." className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/10 active:scale-[0.99]">
              Request Personalized Demo
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-600 border-t border-slate-900">
        © 2026 Tasteful CRM Identity. Built for Instabizweb Screening Task.
      </footer>
    </div>
  );
}
