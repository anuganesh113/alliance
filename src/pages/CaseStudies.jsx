import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Activity, Building2, Users, CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            category: "Diagnostic Centers",
            client: "Metropolitan Medical Center",
            clientScale: "Largest Tertiary Diagnostic Hub",
            impact: "40% Throughput Increase",
            impactLabel: "Workflow Optimization",
            keyTakeaway: "Redefined diagnostic speed through AI-assisted imaging workflows.",
            challenge: "Manual reporting bottlenecks were causing 24-hour diagnostic delays.",
            solution: "deployment of unified PACS-RIS with AI auto-prioritization.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
        },
        {
            category: "Public Healthcare",
            client: "National Rural Health Initiative",
            clientScale: "Regional Government Partnership",
            impact: "50+ Clinics Scaled",
            impactLabel: "Institutional Reach",
            keyTakeaway: "Standardized life-saving neonatal care across remote provinces.",
            challenge: "Lack of advanced monitoring in remote areas led to high referral costs.",
            solution: "Turnkey delivery of connected neonatal ICU bundles with telemedicine.",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200"
        },
        {
            category: "Specialized Care",
            client: "University Teaching Hospital",
            clientScale: "1,200-Bed Multi-Specialty Facility",
            impact: "99.9% System Uptime",
            impactLabel: "Reliability Engineering",
            keyTakeaway: "Eliminated infrastructure risks in critical neurosurgical environments.",
            challenge: "Aging OT systems were prone to power fluctuations and data loss.",
            solution: "Redundant digital infrastructure and uninterruptible surgical imaging.",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200"
        },
        {
            category: "Cardiac Care",
            client: "Heart Institute of Excellence",
            clientScale: "Premier Cardiology Center",
            impact: "30% Faster Procedures",
            impactLabel: "Clinical Efficiency",
            keyTakeaway: "Enhanced interventional precision with next-gen Cath Lab integration.",
            challenge: "Legacy equipment limited complex stenting procedure capabilities.",
            solution: "Installation of bi-plane Cath Labs with integrated hemodynamic monitoring.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
        }
    ];

    return (
        <div className="flex flex-col font-sans">
            {/* Hero Section */}
            <section className="relative py-32 bg-[#020617] text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm uppercase tracking-widest"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                    >
                        Transforming <span className="text-secondary">Healthcare.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        See how Alliance partners with leading institutions to deliver measurable clinical and operational impact.
                    </motion.p>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {cases.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                            >
                                {/* Image Side */}
                                <div className="lg:w-1/2 relative group perspective-1000">
                                    <div className="absolute inset-0 bg-accent/5 -rotate-3 rounded-[2.5rem] scale-95 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500" />
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.client}
                                            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                        <div className="absolute bottom-8 left-8 right-8">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">{project.impactLabel}</p>
                                                        <p className="text-3xl font-black text-white">{project.impact}</p>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                                                        <TrendingUp size={24} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider border border-slate-200">
                                                {project.category}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span className="text-sm font-semibold text-slate-400">{project.clientScale}</span>
                                        </div>
                                        <h2 className="text-4xl font-black text-primary leading-tight">{project.client}</h2>
                                        <p className="text-xl text-slate-600 font-medium italic">"{project.keyTakeaway}"</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                                                <Activity size={18} className="text-accent" />
                                                The Challenge
                                            </h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                                                <CheckCircle2 size={18} className="text-accent" />
                                                Our Solution
                                            </h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Link to="/contact" className="btn btn-primary px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                            Request Similar Case Study
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Ready to Write Your Success Story?</h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                        Join the network of premier healthcare institutions that trust Alliance for their critical infrastructure.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-accent-dark transition-colors shadow-xl hover:shadow-2xl">
                        Start Your Project
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
