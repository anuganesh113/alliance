import { motion } from 'framer-motion';
import {
    Stethoscope,
    Cpu,
    Wrench,
    Building2,
    Microscope,
    ArrowRight,
    CheckCircle2,
    Activity,
    ShieldCheck,
    Zap,
    Globe,
    Users,
    Clock,
    Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Services = () => {
    const services = [
        {
            id: 'medical-equipment',
            title: 'Medical Equipment Supply',
            icon: Stethoscope,
            desc: 'End-to-end procurement and installation of accessible, high-performance diagnostic and therapeutic technology.',
            features: ['Diagnostic Imaging (MRI, CT)', 'Critical Care Units', 'Surgical Theaters', 'Life Support Systems']
        },
        {
            id: 'healthcare-it',
            title: 'Healthcare IT Solutions',
            icon: Cpu,
            desc: 'Digital transformation infrastructure including HIS, PACS, and interoperable data ecosystems for seamless clinical workflows.',
            features: ['Hospital Information Systems', 'Enterprise PACS/RIS', 'Telemedicine Infrastructure', 'Data Security Protocols']
        },
        {
            id: 'infrastructure',
            title: 'Hospital Infrastructure',
            icon: Building2,
            desc: 'Turnkey project management for clinical facilities, from architectural consulting to specialized medical gas pipeline systems.',
            features: ['Modular OT Setup', 'Medical Gas Pipelines', 'CSSD Planning', 'Facility Engineering']
        },
        {
            id: 'diagnostics',
            title: 'Diagnostic Systems',
            icon: Microscope,
            desc: 'Next-generation laboratory and imaging command centers designed for precision accuracy and high-throughput efficiency.',
            features: ['Automated Lab Systems', 'Molecuar Diagnostics', 'Digital Pathology', 'Point-of-Care Testing']
        },
        {
            id: 'support',
            title: 'Maintenance & Support',
            icon: Wrench,
            desc: 'Comprehensive lifecycle management with 24/7 technical rapid-response teams and preventive maintenance protocols.',
            features: ['Annual Maintenance (AMC)', 'Calibration Services', 'Spare Parts Logistics', 'Emergency Repairs']
        },
        {
            id: 'consulting',
            title: 'Strategic Consulting',
            icon: Activity,
            desc: 'Operational optimization and technology capability capability assessments for maximizing institutional ROI.',
            features: ['Technology Assessment', 'Workflow Optimization', 'Compliance Audits', 'Staff Training']
        }
    ];

    const industries = [
        { title: 'Hospitals & Trauma Centers', desc: 'Integrated critical care and surgical solutions.' },
        { title: 'Diagnostic Laboratories', desc: 'High-throughput automation and precision sensing.' },
        { title: 'Specialty Clinics', desc: 'Compact, efficient, and specialized medical modalities.' },
        { title: 'Government Institutions', desc: 'Scalable public health infrastructure and reliable supply chains.' }
    ];

    const processSteps = [
        { num: '01', title: 'Assessment', desc: 'Deep-dive analysis of clinical requirements.' },
        { num: '02', title: 'Solution Design', desc: 'Architecting the optimal technology mix.' },
        { num: '03', title: 'Implementation', desc: 'Precision installation and system integration.' },
        { num: '04', title: 'Enablement', desc: 'Comprehensive training and workflow stabilization.' }
    ];

    return (
        <div className="flex flex-col font-sans">
            {/* 1. Premium Hero Section - Level 2 Refinement */}
            <section className="relative min-h-[85vh] flex items-center bg-[#020617] text-white overflow-hidden py-24">
                {/* Layer 1: Base Noise & Grid */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />
                </div>

                {/* Layer 2: Twin Mesh Blobs */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                            rotate: [0, -60, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[100px] mix-blend-screen"
                    />
                </div>

                {/* Layer 3: Kinetic Beams */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent rotate-[12deg] opacity-70"
                    />
                    <motion.div
                        animate={{ x: ['200%', '-100%'] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
                        className="absolute bottom-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-light/40 to-transparent -rotate-[8deg] opacity-70"
                    />
                </div>

                {/* Floating Service Nodes - 3D Effect */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {[
                        { icon: Stethoscope, top: '20%', right: '15%', size: 16, delay: 0, color: 'text-accent' },
                        { icon: Cpu, bottom: '25%', right: '25%', size: 20, delay: 2, color: 'text-blue-400' },
                        { icon: Building2, top: '30%', left: '10%', size: 12, delay: 4, color: 'text-purple-400' },
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -40, 0],
                                rotate: [0, 10, -10, 0],
                                opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                            className="absolute bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
                            style={{
                                top: node.top,
                                right: node.right,
                                left: node.left,
                                bottom: node.bottom,
                                width: `${node.size * 4}px`,
                                height: `${node.size * 4}px`
                            }}
                        >
                            <node.icon size={node.size * 1.5} className={`${node.color} opacity-80`} />
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(0,135,68,0.3)]"
                        >
                            <ShieldCheck size={14} />
                            <span>Clinical Excellence Engine</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
                        >
                            Comprehensive <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 z-10">
                                Healthcare Technology
                                {/* Underline Glow */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="absolute -bottom-2 left-0 h-[6px] bg-accent/20 blur-sm rounded-full"
                                />
                            </span> <br />
                            <span className="text-stroke-white text-transparent opacity-20">Services.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative max-w-2xl"
                        >
                            <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-3xl -z-10" />
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12 p-2">
                                We empower medical institutions with end-to-end technology infrastructure, from procurement and installation to lifecycle maintenance and digital transformation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/contact" className="btn btn-primary px-10 py-5 rounded-2xl shadow-[0_0_40px_-10px_rgba(0,135,68,0.4)] hover:shadow-[0_0_60px_-10px_rgba(0,135,68,0.6)] hover:scale-105 transition-all text-lg flex items-center gap-3 group">
                                Request Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="#offerings" className="px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors font-bold flex items-center gap-2 text-lg text-white">
                                Explore Capabilities <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy & Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <SectionTitle alignment="left" title="Engineering Clinical Reliability" subtitle="Our Philosophy" />
                            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                At Alliance, we believe that technology is the backbone of modern healthcare. Our service philosophy goes beyond simple vendor transactions—we act as strategic partners, ensuring that your medical infrastructure is robust, compliant, and future-ready.
                            </p>
                            <ul className="space-y-4">
                                {['Zero-Compromise Safety Standards', 'Brand-Agnostic Expertise', 'Institutional Scalability'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-primary">
                                        <CheckCircle2 className="text-accent" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="absolute inset-0 bg-accent/5 -rotate-3 rounded-3xl" />
                            <img
                                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1000"
                                alt="Biomedical Engineer"
                                className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Services Grid */}
            <section id="offerings" className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Capabilities" subtitle="Holistic Solutions" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group"
                            >
                                <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500 text-accent">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, f) => (
                                        <div key={f} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <Link to={`/services/${service.id}`} className="text-accent font-bold text-sm tracking-wide uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Industry Solutions */}
            <section className="py-24 bg-[#020617] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2 block">Sectors We Serve</span>
                            <h2 className="text-4xl font-black tracking-tight">Tailored for Every Clinical Scale.</h2>
                        </div>
                        <Link to="/contact" className="btn btn-primary px-8 py-3 rounded-full">Explore Sector Expertise</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                                <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <Building2 size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{ind.title}</h3>
                                <p className="text-slate-400 text-sm">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Service Delivery Flow */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="The Alliance Engagement Model" subtitle="How We Deliver" />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden md:block" />

                        {processSteps.map((step, s) => (
                            <div key={s} className="relative pt-8">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs relative z-10 border-4 border-white mb-6 shadow-lg mx-auto md:mx-0">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2 text-center md:text-left">{step.title}</h3>
                                <p className="text-slate-500 text-sm text-center md:text-left leading-relaxed max-w-xs mx-auto md:mx-0">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Trust & Support Combined */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <div>
                                <h3 className="text-3xl font-black text-primary mb-4">Unwavering Support.</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Our relationship doesn't end at installation. We provide comprehensive lifecycle support to ensure zero downtime for your critical care equipment.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <Clock className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">24/7 Rapid Response</h4>
                                        <p className="text-sm text-slate-500">Emergency technical dispatch.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Zap className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">Preventive AMC</h4>
                                        <p className="text-sm text-slate-500">Scheduled maintenance protocols.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Users className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">Expert Training</h4>
                                        <p className="text-sm text-slate-500">Staff competency workshops.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Award className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">Certified Engineers</h4>
                                        <p className="text-sm text-slate-500">Factory-trained specialists.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-slate-100 rounded-[2rem] min-h-[300px] relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                                alt="Support Engineer"
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                                <div className="text-white">
                                    <div className="text-3xl font-black mb-1">98%</div>
                                    <div className="text-sm font-medium opacity-80">First-Time Fix Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Strategic CTA */}
            <section className="py-32 bg-primary relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 opacity-30 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                        Let's Build <span className="text-accent">Smarter Healthcare</span> Together.
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                        Upgrade your clinical infrastructure with a partner that understands the precision required to save lives.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="btn btn-secondary px-10 py-5 rounded-2xl text-lg shadow-xl hover:scale-105 transition-transform text-white bg-accent border-none">
                            Get a Custom Quote
                        </Link>
                        <Link to="/contact" className="px-10 py-5 rounded-2xl text-lg font-bold text-white border border-white/20 hover:bg-white/5 transition-colors">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
