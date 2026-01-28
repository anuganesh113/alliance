import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, ShieldCheck, Zap, Globe, Shield, Building2, ChevronRight, Microscope, Stethoscope, CircuitBoard, Network, Cpu, Wrench, CheckCircle2, Play, MousePointer2 } from 'lucide-react';
import { useScroll, useTransform, useSpring, useMotionValue, motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';
import TrustIndicators from '../components/TrustIndicators';
import IndustriesSection from '../components/IndustriesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import CTASection from '../components/CTASection';

const Home = () => {
    // Mouse movement for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1000], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1500], [-5, 5]), springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const solutions = [
        {
            title: "Smart Diagnostic Ecosystems",
            description: "Advanced imaging workstations integrated with AI-driven analytics for precise, earlier detection.",
            icon: Microscope,
            link: "/products/diagnostics"
        },
        {
            title: "Critical Care Infrastructure",
            description: "End-to-end ICU and OT setups featuring interconnected monitoring systems and life-support units.",
            icon: Activity,
            link: "/services/infrastructure"
        },
        {
            title: "Enterprise IT Platforms",
            description: "Unified PACS, RIS, and HMIS solutions designed to streamline hospital workflows and data interoperability.",
            icon: Network,
            link: "/services/digital-health"
        },
        {
            title: "Turnkey Project Execution",
            description: "From architectural planning to equipment commissioning, we deliver fully operational medical facilities.",
            icon: Building2,
            link: "/services/projects"
        }
    ];

    const industries = [
        'General Hospitals',
        'Specialty Clinics',
        'Diagnostic Centers',
        'Government Institutions',
        'Research Laboratories',
        'Medical Colleges'
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.1 * custom, ease: [0.21, 0.45, 0.32, 0.9] }
        })
    };

    const floatingCard = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section - Redesigned for Premium Impact */}
            <section className="relative min-h-screen flex items-center bg-[#020617] overflow-hidden">
                {/* Advanced Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

                    {/* Animated Mesh Gradients */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-[140px] pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-30%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"
                    />

                    {/* Glowing Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                        {/* Left Content */}
                        <motion.div
                            className="lg:w-3/5 text-center lg:text-left"
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                variants={fadeIn}
                                custom={1}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs md:text-sm mb-10 backdrop-blur-md"
                            >
                                <Zap size={14} className="fill-accent animate-pulse" />
                                <span className="uppercase tracking-widest">Next-Generation Healthcare</span>
                            </motion.div>

                            <motion.h1
                                variants={fadeIn}
                                custom={2}
                                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tightest"
                            >
                                Precision <br />
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-primary-light">
                                        Engineering
                                    </span>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 1, duration: 1 }}
                                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-50"
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeIn}
                                custom={3}
                                className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                            >
                                Alliance bridges the gap between complex medical challenges and advanced technological solutions. From life-saving diagnostics to enterprise-scale IT infrastructure.
                            </motion.p>

                            <motion.div
                                variants={fadeIn}
                                custom={4}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                            >
                                <Link to="/contact" className="group relative px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,135,68,0.3)]">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10">Start Consultation</span>
                                </Link>
                                <Link to="/services" className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Play size={16} className="fill-white" />
                                    </div>
                                    View Our Solutions
                                </Link>
                            </motion.div>

                            <motion.div
                                variants={fadeIn}
                                custom={5}
                                className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-10 max-w-xl"
                            >
                                <div className="space-y-1">
                                    <p className="text-3xl md:text-4xl font-black text-white">500+</p>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Installations</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl md:text-4xl font-black text-white">99%</p>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Uptime</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl md:text-4xl font-black text-white">ISO</p>
                                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Certified</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Visuals - with Parallax */}
                        <motion.div
                            className="lg:w-2/5 relative perspective-[2000px] hidden lg:block"
                            style={{ rotateX, rotateY }}
                        >
                            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
                                {/* Decorative elements behind */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />

                                {/* Main Card Container */}
                                <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900 group">
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                                        alt="Modern Medical Tech"
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/40" />

                                    {/* Tech elements */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
                                        <div className="absolute inset-0 border border-teal-500/30 rounded-full animate-spin-slow" />
                                        <div className="absolute inset-[10%] border border-cyan-500/20 rounded-full animate-reverse-spin-slow" />
                                    </div>
                                </div>

                                {/* Floating Glass Cards - enhanced */}
                                <motion.div
                                    variants={floatingCard}
                                    animate="animate"
                                    className="absolute -left-16 top-1/4 z-20 bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-64 group hover:bg-slate-900/60 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest mb-0.5">Live Diagnostics</p>
                                        <p className="text-sm font-bold text-white">System Active</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={floatingCard}
                                    animate="animate"
                                    transition={{ delay: 0.8 }}
                                    className="absolute -right-8 bottom-1/4 z-20 bg-slate-900/40 border border-white/10 backdrop-blur-2xl p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-56 group hover:bg-slate-900/60 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-0.5">Verified</p>
                                        <p className="text-sm font-bold text-white">ISO Compliant</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={floatingCard}
                                    animate="animate"
                                    transition={{ delay: 1.5 }}
                                    className="absolute left-1/4 -bottom-6 z-20 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Expert" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Trusted by</p>
                                            <p className="text-xs text-white font-black">200+ Institutions</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Scroll</span>
                </motion.div>
            </section>

            <TrustIndicators />

            {/* Featured Solutions Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionTitle
                        subtitle="Impactful Innovation"
                        title="Featured Solutions & Technologies"
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {solutions.map((solution, index) => (
                            <ServiceCard key={index} {...solution} index={index} />
                        ))}
                    </div>

                    <div
                        className="mt-16 text-center"
                    >
                        <Link to="/services" className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-primary hover:text-accent transition-all text-lg group">
                            Explore All Capabilities
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <IndustriesSection />

            {/* Why Choose Us / Value Prop */}
            {/* Why Choose Alliance Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Visual Anchor Left */}
                        <div className="lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                                    alt="Advanced Medical Technology"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-10">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">Operational Efficiency</span>
                                        </div>
                                        <p className="text-white font-medium text-lg leading-snug">"Quality healthcare starts with reliable technology foundation."</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-slate-200 rounded-[2.5rem]" />
                            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                        </div>

                        {/* Content Right */}
                        <div className="lg:w-1/2">
                            <SectionTitle
                                alignment="left"
                                subtitle="Why Alliance"
                                title="Partnering for Excellence in Healthcare"
                            />
                            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl">
                                We understand that in healthcare, reliability is not optional. It is essential. That's why we go beyond just selling equipment to becoming a long-term technology partner for your institution.
                            </p>

                            <div className="space-y-8 mb-12">
                                {[
                                    {
                                        title: 'Authorized Distribution',
                                        desc: 'Official partners for premium global brands ensuring authentic parts & warranty.',
                                        icon: Globe,
                                        color: 'text-primary',
                                        bg: 'bg-primary/5'
                                    },
                                    {
                                        title: 'Expert Biomedical Team',
                                        desc: 'A nationwide network of factory-trained engineers for rapid response.',
                                        icon: Stethoscope,
                                        color: 'text-accent',
                                        bg: 'bg-accent/5'
                                    },
                                    {
                                        title: 'Lifecycle Management',
                                        desc: 'Comprehensive AMC & CMC packages to maximize equipment longevity.',
                                        icon: Activity,
                                        color: 'text-primary',
                                        bg: 'bg-primary/5'
                                    },
                                    {
                                        title: 'Financial Flexibility',
                                        desc: 'Tailored procurement solutions to match your institutional budget cycles.',
                                        icon: ShieldCheck,
                                        color: 'text-accent',
                                        bg: 'bg-accent/5'
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-5 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Schedule a Consultation
                                <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CaseStudiesSection />

            <CTASection />
        </div>
    );
};

export default Home;
