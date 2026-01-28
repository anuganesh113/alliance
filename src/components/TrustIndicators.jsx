import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Award, Building2, Users, CheckCircle2, Zap, Globe, Shield } from 'lucide-react';
import { useState, useRef } from 'react';

const TrustCard = ({ item, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col p-8 rounded-[2rem] bg-white/40 border border-slate-200/50 backdrop-blur-md hover:bg-white/80 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.05), transparent 70%)' }} />

            <div
                style={{ transform: "translateZ(50px)" }}
                className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-slate-900 text-white shadow-xl transition-transform duration-500 group-hover:scale-110`}
            >
                <item.icon size={30} strokeWidth={1.5} />
            </div>

            <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-normal">
                    {item.description}
                </p>
            </div>

            {/* Subtle decorative line */}
            <div className="mt-8 w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-20 group-hover:opacity-100 group-hover:w-full transition-all duration-700" />
        </motion.div>
    );
};

const TrustIndicators = () => {
    const indicators = [
        {
            title: "Global Distribution",
            description: "Strategically partnered with world-leading manufacturers for seamless supply chain delivery.",
            icon: Globe,
        },
        {
            title: "ISO Quality Standards",
            description: "Stringent adherence to ISO 9001:2015, ensuring the highest level of service and safety.",
            icon: Shield,
        },
        {
            title: "Enterprise Authority",
            description: "Managing over 500+ specialized medical installations across primary & tertiary care centers.",
            icon: Building2,
        },
        {
            title: "24/7 Engineering Support",
            description: "A nationwide network of factory-trained biomedical engineers at your service.",
            icon: Zap,
        }
    ];

    return (
        <section className="relative py-32 bg-slate-50 overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

                {/* Moving Mesh Gradients */}
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[0%] right-[0%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-6 border border-accent/10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Reliability at Scale
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]"
                        >
                            Engineered for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Institutional Excellence</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:max-w-xs"
                    >
                        <p className="text-slate-500 leading-relaxed font-normal text-sm md:text-base border-l-2 border-accent/20 pl-6">
                            We provide the technological backbone for healthcare institutions that demand zero-compromise reliability and expert engineering.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[2000px]">
                    {indicators.map((item, index) => (
                        <TrustCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustIndicators;
