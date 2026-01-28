import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, ShieldCheck, Zap, Award } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#020617]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Clinical Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Tri-Tone Mesh Gradients */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                        {/* Internal Sharp Border Glow */}
                        <div className="absolute inset-0 border border-white/5 rounded-[3.5rem] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest mb-10">
                                <ShieldCheck size={14} className="fill-accent animate-pulse" />
                                <span>Institutional Reliability & Trust</span>
                            </div>

                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
                                Empowering Exceptional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-primary-light italic">
                                    Patient Care.
                                </span>
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                                Ensure uninterrupted clinical operations and world-class diagnostics. Partner with Nepal's leading healthcare technology experts for long-term strategic growth.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="relative group/btn">
                                    {/* Pulse Effect */}
                                    <div className="absolute -inset-1 bg-accent/50 rounded-2xl blur opacity-25 group-hover/btn:opacity-75 animate-pulse transition duration-1000 group-hover/btn:duration-200" />
                                    <Link
                                        to="/contact"
                                        className="relative block px-12 py-5 bg-accent text-white rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Initiate Partnership
                                            <ChevronRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </div>

                                <Link
                                    to="/services"
                                    className="px-10 py-5 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-2xl font-black text-lg transition-all backdrop-blur-sm hover:bg-white/10 w-full sm:w-auto text-center"
                                >
                                    View Service Audit
                                </Link>
                            </div>

                            <p className="mt-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                                * Zero-Obligation Technical Consultation
                            </p>

                            {/* Trust Badges - Staggered Appearance */}
                            <motion.div
                                className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
                            >
                                {[
                                    { icon: ShieldCheck, text: "ISO 9001 Certified", color: "text-accent" },
                                    { icon: Phone, text: "24/7 Response", color: "text-primary-light" },
                                    { icon: Award, text: "Authorized Partner", color: "text-indigo-400" },
                                    { icon: Zap, text: "Nationwide Support", color: "text-amber-400" }
                                ].map((badge, b) => (
                                    <motion.div
                                        key={b}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (b * 0.1) }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <badge.icon className={badge.color} size={24} />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{badge.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
