import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

const CaseStudyCard = ({ client, clientScale, challenge, solution, impact, impactLabel, keyTakeaway, category, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
    >
        {/* Top Header - Category & Credibility */}
        <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                    {category}
                </span>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">{clientScale}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
        </div>

        {/* Client & Executive Summary */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
            {client}
        </h3>
        <p className="text-slate-500 text-sm italic mb-8 leading-relaxed">
            "{keyTakeaway}"
        </p>

        {/* Impact Stat Box - Data First */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-white/50 shadow-inner group-hover:bg-accent/5 transition-colors">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1.5">{impactLabel}</p>
            <p className="text-3xl font-black text-slate-900 leading-none tracking-tight">
                {impact}
                <TrendingUp size={24} className="inline-block ml-2 text-accent mb-1" />
            </p>
        </div>

        {/* Core Details - Highly Scannable */}
        <div className="space-y-5 mb-8 flex-grow">
            <div className="flex gap-3">
                <div className="w-1 h-auto bg-slate-100 rounded-full group-hover:bg-accent/30 transition-colors" />
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Challenge</p>
                    <p className="text-slate-600 text-sm leading-snug">{challenge}</p>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="w-1 h-auto bg-slate-100 rounded-full group-hover:bg-accent/30 transition-colors" />
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Our Solution</p>
                    <p className="text-slate-600 text-sm leading-snug">{solution}</p>
                </div>
            </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50">
            <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 group-hover:text-accent transition-colors uppercase tracking-wider"
            >
                Review Full Case Study
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Subtle Decorative UI element */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
);

const CaseStudiesSection = () => {
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
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl text-left">
                        <SectionTitle
                            alignment="left"
                            subtitle="Proven Results"
                            title="Measurable Impact in Clinical Environments"
                            className="mb-0"
                        />
                    </div>
                    <div>
                        <Link to="/case-studies" className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all hover:border-slate-300">
                            See How We Deliver Results
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((cs, index) => (
                        <CaseStudyCard key={index} {...cs} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default CaseStudiesSection;
