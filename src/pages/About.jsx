import { motion } from 'framer-motion';
import {
    Award,
    Users,
    Globe,
    ShieldCheck,
    Zap,
    Stethoscope,
    Server,
    Wrench,
    Target,
    Eye,
    ChevronRight,
    TrendingUp,
    CheckCircle2,
    ClipboardCheck,
    DraftingCompass,
    Rocket,
    Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const ValueCard = ({ icon: Icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
    >
        <div className="w-14 h-14 bg-accent/5 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const About = () => {
    return (
        <div className="flex flex-col">
            {/* Premium Enterprise Hero Section - Level 2 Refinement */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
                {/* Advanced Multi-Layered Background Architecture */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Layer 1: Base Noise & Institutional Grid */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]" />

                    {/* Layer 2: Twin Mesh Blobs - Breathing Animation */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[120px] mix-blend-screen"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                            rotate: [0, -45, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-primary-light/10 rounded-full blur-[140px] mix-blend-screen"
                    />

                    {/* Layer 3: Kinetic Tech Beams */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent rotate-[15deg] opacity-60"
                    />
                    <motion.div
                        animate={{ x: ['200%', '-100%'] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-light/30 to-transparent -rotate-[15deg] opacity-60"
                    />
                </div>

                {/* Drifting Tech Node Constellations */}
                <div className="absolute inset-0 z-5 pointer-events-none">
                    {[
                        { top: '20%', left: '15%', size: 3, delay: 0 },
                        { top: '15%', left: '85%', size: 4, delay: 2 },
                        { top: '80%', left: '10%', size: 2, delay: 4 },
                        { top: '75%', left: '90%', size: 3, delay: 1 },
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.6, 0.2]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                            className="absolute bg-white/20 rounded-full blur-[1px]"
                            style={{
                                top: node.top,
                                left: node.left,
                                width: `${node.size * 2}px`,
                                height: `${node.size * 2}px`
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        {/* Premium Glass Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white font-medium text-xs tracking-[0.25em] uppercase mb-10 shadow-2xl group hover:bg-white/10 transition-colors"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">Institutional Authority & Excellence</span>
                            <div className="h-px w-8 bg-gradient-to-r from-accent/50 to-transparent" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]"
                        >
                            The Technological Foundation <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary-light italic pb-2">
                                of Modern Healthcare.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12"
                        >
                            Alliance Healthcare Technologies is Nepal's premier enterprise partner for high-precision medical technology. We engineer reliability into every layer of clinical infrastructure.
                        </motion.p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent/10" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Explore</span>
                </motion.div>
            </section>

            {/* Authority Overview */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] -rotate-2" />
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
                                alt="Institutional Healthcare Meeting"
                                className="relative z-10 rounded-[2rem] shadow-2xl border border-slate-100"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-xl text-white hidden md:block z-20">
                                <div className="text-4xl font-black mb-1">14+</div>
                                <div className="text-xs uppercase font-bold tracking-widest text-accent">Years of Authority</div>
                            </div>
                        </div>
                        <div>
                            <SectionTitle alignment="left" subtitle="Institutional Partner" title="Redefining Clinical Reliability" />
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                                Since our inception, we have bridged the gap between global innovations and local clinical requirements. We do not just provide equipment; we engineer environments where healthcare professionals can focus on their most critical task—saving lives.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="border-l-2 border-accent/20 pl-6">
                                    <div className="text-3xl font-black text-primary mb-1">500+</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Installations</div>
                                </div>
                                <div className="border-l-2 border-accent/20 pl-6">
                                    <div className="text-3xl font-black text-primary mb-1">24/7</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Support</div>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary group px-8 py-4">
                                Partner With Excellence
                                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission / Vision / Purpose Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 bg-accent/5 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                                To empower healthcare providers with cutting-edge medical technologies and reliable support services, enabling them to deliver superior patient care through technological precision.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-primary p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
                            <div className="w-16 h-16 bg-white/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
                            <p className="text-slate-300 leading-relaxed font-light">
                                To be the region's most trusted healthcare technology partner, recognized for unwavering integrity, zero-downtime commitment, and setting the benchmark for clinical engineering.
                            </p>
                        </motion.div>

                        {/* Values Statement */}
                        <div className="flex flex-col justify-center p-10">
                            <h4 className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-4">The Alliance Code</h4>
                            <h2 className="text-3xl font-black text-primary leading-tight mb-6 italic">Driven by Integrity. <br />Measured by Impact.</h2>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                We believe that in healthcare, reliability is not optional. It is essential. Every decision we make is guided by the understanding that our technology impacts lives.
                            </p>
                            <ul className="space-y-3">
                                {['Zero-Compromise Quality', 'Institutional Transparency', 'Clinical Domain Expertise'].map((value, v) => (
                                    <li key={v} className="flex items-center gap-3 text-sm font-bold text-primary">
                                        <CheckCircle2 size={16} className="text-accent" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Expertise Pillars */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Strategic Domains of Expertise" subtitle="Multidisciplinary Excellence" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-center">
                        <div className="space-y-6 flex flex-col items-center">
                            <div className="w-20 h-20 bg-accent/5 text-accent rounded-3xl flex items-center justify-center border border-accent/10">
                                <Stethoscope size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Advanced Diagnostics</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto font-light">
                                From state-of-the-art MRI and CT systems to surgical imaging and precision lab equipment.
                            </p>
                        </div>

                        <div className="space-y-6 flex flex-col items-center pt-8 md:pt-0">
                            <div className="w-20 h-20 bg-accent/5 text-accent rounded-3xl flex items-center justify-center border border-accent/10">
                                <Server size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Healthcare IT & Interoperability</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto font-light">
                                Seamless HIS/RIS/PACS integration and data infrastructure designed for institutional scalability.
                            </p>
                        </div>

                        <div className="space-y-6 flex flex-col items-center pt-8 md:pt-0">
                            <div className="w-20 h-20 bg-accent/5 text-accent rounded-3xl flex items-center justify-center border border-accent/10">
                                <Wrench size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Life-Cycle Engineering</h3>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto font-light">
                                World-class preventive maintenance, rapid AMC services, and certified technical support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Alliance Standard (Our Approach) - Refined Timeline */}
            <section className="py-32 bg-primary text-white relative overflow-hidden">
                {/* Background Tech Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 pointer-events-none skew-x-12 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-blue-500/5 pointer-events-none -skew-x-12 mix-blend-overlay" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mb-24 text-center mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            The Alliance Standard
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Our Protocol for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Operational Excellence.</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                            A rigorous, four-stage methodology designed to ensure clinical precision and maximize institutional ROI for every deployment.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Connector - Desktop */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: '01', icon: ClipboardCheck, title: 'Consultation', desc: 'In-depth assessment of clinical & institutional goals.' },
                                { step: '02', icon: DraftingCompass, title: 'Architecture', desc: 'Strategic procurement & integration trajectory planning.' },
                                { step: '03', icon: Rocket, title: 'Deployment', desc: 'Precision installation with clinical workflow training.' },
                                { step: '04', icon: Activity, title: 'Optimization', desc: 'Proactive lifecycle management & performance tuning.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative group perspective-1000"
                                >
                                    {/* Holographic Card */}
                                    <div className="relative bg-[#0a1929]/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,135,68,0.2)] h-full overflow-hidden">
                                        {/* Hover Gradient Bloom */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 group-hover:via-accent/10 transition-all duration-500" />

                                        {/* Step Number Badge */}
                                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="text-5xl font-black text-white stroke-text-transparent">{item.step}</span>
                                        </div>

                                        {/* Icon Container */}
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500 relative z-10">
                                            <item.icon size={28} className="text-accent" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors relative z-10">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Connector Dot (Desktop) */}
                                    <div className="absolute top-1/2 -left-4 w-3 h-3 rounded-full bg-accent border-4 border-[#020617] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity delay-100 z-20" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Commitment / CTA */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tighter italic">"A healthier future built on <span className="text-accent">unwavering reliability.</span>"</h2>
                        <p className="text-xl text-slate-500 leading-relaxed mb-12 font-light">
                            We believe that every piece of equipment we install and every system we implement contributes to saving lives. This responsibility drives our commitment to quality, safety, and continuous support.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/services" className="btn btn-primary px-12 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Explore Our Capabilities
                            </Link>
                            <Link to="/contact" className="px-12 py-5 bg-slate-50 border border-slate-200 text-primary font-black rounded-2xl text-lg hover:bg-slate-100 transition-all">
                                Contact Our Strategists
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
