import { motion } from 'framer-motion';
import { Building, Microscope, GraduationCap, Building2, ChevronRight, Activity } from 'lucide-react';

const IndustriesSection = () => {
    const industries = [
        {
            title: "Hospitals & Medical Centers",
            description: "End-to-end critical care infrastructure, advanced imaging, and unified hospital information systems for tertiary care facilities.",
            icon: Building,
            accent: "accent",
            colSpan: "md:col-span-2 lg:col-span-2",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Diagnostic & Imaging Centers",
            description: "High-throughput diagnostic solutions ensuring speed, precision accuracy, and patient comfort.",
            icon: Activity,
            accent: "primary",
            colSpan: "md:col-span-1 lg:col-span-1",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Medical Colleges & Research",
            description: "Cutting-edge technology installations for academic institutions and clinical research labs.",
            icon: GraduationCap,
            accent: "accent",
            colSpan: "md:col-span-1 lg:col-span-1",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Government & Public Health",
            description: "Execution of large-scale healthcare procurement and infrastructure projects for national health initiatives.",
            icon: Building2,
            accent: "primary",
            colSpan: "md:col-span-2 lg:col-span-2",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-2"
                        >
                            <span className="w-8 h-[1px] bg-accent/50"></span>
                            Sectors We Serve
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white leading-tight"
                        >
                            Powering Excellence Across <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">The Healthcare Spectrum</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:max-w-xs text-slate-400 text-sm leading-relaxed border-l border-slate-700 pl-6"
                    >
                        We tailor our technology solutions to strictly meet the unique regulatory and operational demands of distinct healthcare environments.
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative overflow-hidden rounded-3xl min-h-[320px] p-8 flex flex-col justify-end border border-white/10 ${item.colSpan}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 text-${item.accent}-400 group-hover:bg-${item.accent}-500 group-hover:text-white transition-all duration-300`}>
                                    <item.icon size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                    {item.description}
                                </p>

                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-white transition-colors">
                                    View Solutions <ChevronRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
