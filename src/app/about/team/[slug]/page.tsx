"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Mail, Award, 
  Briefcase, GraduationCap, Sparkles, CheckCircle2, Quote, User
} from "lucide-react";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";
import { useBooking } from "@/context/BookingContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TeamMemberPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const member = getTeamMemberBySlug(resolvedParams.slug);
  const { openBooking } = useBooking();

  if (!member) {
    notFound();
  }

  // Filter other members for the bottom showcase section
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* ==========================================
          1. HERO HEADER SECTION (Dark Navy Theme)
          ========================================== */}
      <section className="relative w-full bg-[#06142D] pt-[120px] sm:pt-[130px] md:pt-[140px] pb-16 md:pb-24 overflow-hidden">
        {/* Background Grids & Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          {/* Top Breadcrumb & Navigation */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-cyan-400">{member.name}</span>
            </nav>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-700 transition-all cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Company Overview
            </Link>
          </div>

          {/* Member Hero Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Portrait Image Container */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative p-3.5 rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-md overflow-hidden group"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      objectPosition: member.imagePosition || "center top",
                      transform: `scale(${member.imageScale ?? 1}) translate(${member.imageOffset?.x ?? 0}px, ${member.imageOffset?.y ?? 0}px)`,
                    }}
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-1.5 shadow-lg">
                    <p className="text-[10px] font-extrabold uppercase text-cyan-400 tracking-wider">Experience</p>
                    <p className="text-xs font-black text-white mt-0.5">{member.experienceYears}</p>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2.5 shadow-xl">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">{member.department}</p>
                    <p className="text-sm font-bold text-white leading-tight mt-0.5">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Information Details */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  DIGINET Leadership
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-3 font-poppins">
                  {member.name}
                </h1>

                <p className="text-lg md:text-xl font-medium text-cyan-400/90 mb-6 font-poppins">
                  {member.role}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium mb-8 max-w-2xl">
                  {member.shortBio}
                </p>

                {/* Key Metadata Stats Pill Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {member.education && (
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Education</p>
                        <p className="text-xs font-semibold text-white mt-0.5">{member.education}</p>
                      </div>
                    </div>
                  )}

                  {member.certifications && (
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Certifications</p>
                        <p className="text-xs font-semibold text-white mt-0.5">{member.certifications}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTAs & Social Links */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={openBooking}
                    className="cursor-pointer px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-all duration-300 bg-cta-blue text-white hover:bg-hover-blue hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
                  >
                    Schedule Executive Briefing
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-700 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Contact Office
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. DETAILED BIOGRAPHY & EXPERTISE (Light Theme)
          ========================================== */}
      <section className="py-20 px-6 md:px-12 bg-white relative z-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Biography Content */}
          <div className="lg:col-span-8 text-left">
            {/* Quote Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#06142D] text-white relative mb-12 shadow-xl border border-slate-800 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-cyan-500/20 pointer-events-none">
                <Quote className="w-20 h-20" />
              </div>
              <p className="text-base sm:text-lg font-medium italic leading-relaxed text-slate-200 relative z-10 font-poppins mb-4">
                &ldquo;{member.quote}&rdquo;
              </p>
              <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 relative z-10">
                — {member.name}, {member.role}
              </p>
            </motion.div>

            {/* Paragraph Biography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-14"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-poppins border-b border-slate-100 pb-3">
                Executive Biography
              </h2>
              <div className="space-y-5 text-slate-655 text-sm sm:text-base leading-relaxed font-medium">
                {member.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-poppins border-b border-slate-100 pb-3">
                Key Strategic Achievements
              </h2>
              <div className="space-y-4">
                {member.keyAchievements.map((achievement, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Skills & Meta */}
          <div className="lg:col-span-4 text-left">
            <div className="sticky top-28 space-y-8">
              {/* Expertise Tag Cloud Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 font-poppins flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-600" />
                  Core Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs hover:border-cyan-400 hover:text-cyan-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Box */}
              <div className="p-6 rounded-2xl bg-[#06142D] text-white border border-slate-800 shadow-lg text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-poppins">Need Strategic IT Guidance?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                  Connect with {member.name.split(" ")[0]} and DIGINET&apos;s senior architecture team to review your enterprise IT roadmap.
                </p>
                <button
                  onClick={openBooking}
                  className="w-full cursor-pointer py-3 rounded-full font-bold text-xs bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  Book Executive Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. EXPLORE OTHER EXECUTIVE LEADERS
          ========================================== */}
      {otherMembers.length > 0 && (
        <section className="py-20 px-6 md:px-12 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-[1280px] mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-3 block">
              Leadership Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-poppins mb-12">
              Explore Other Executive Leaders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherMembers.map((other) => (
                <Link key={other.id} href={`/about/team/${other.slug}`} className="group text-left">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-cyan-400/60 hover:shadow-xl transition-all duration-300 flex items-center gap-5">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-slate-100 border-2 border-cyan-500/30 group-hover:border-cyan-400 p-0.5 shadow-sm">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover rounded-full transition-transform duration-500"
                        style={{
                          objectPosition: other.imagePosition || "center top",
                          transform: `scale(${other.imageScale ?? 1}) translate(${other.imageOffset?.x ?? 0}px, ${other.imageOffset?.y ?? 0}px)`,
                        }}
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold uppercase text-cyan-600 tracking-wider block mb-0.5">
                        {other.department}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors truncate">
                        {other.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                        {other.role}
                      </p>
                      <div className="mt-2 text-[11px] font-bold text-cyan-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Bio & Profile <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
