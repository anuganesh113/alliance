import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, ShieldCheck, Zap, Activity, Microscope, Cpu, CheckCircle2, Award } from 'lucide-react';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        'All',
        'Diagnostic Equipment',
        'Medical Devices',
        'Healthcare IT Solutions',
        'Laboratory Systems',
        'Hospital Infrastructure',
        'Monitoring & Imaging'
    ];

    const products = [
        {
            id: 1,
            name: "Alliance MR-3T High-Field Scanner",
            category: "Diagnostic Equipment",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Advanced 3 Tesla magnetic resonance imaging system.",
            highlight: "Ultra-High Resolution",
            icon: Microscope,
            tag: "Advanced"
        },
        {
            id: 2,
            name: "VitaCare ICU Ventilator Pro",
            category: "Medical Devices",
            image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Comprehensive respiratory support for critical care.",
            highlight: "Adaptive Lung Protection",
            icon: Activity,
            tag: "Popular"
        },
        {
            id: 3,
            name: "OmniNet Enterprise PACS",
            category: "Healthcare IT Solutions",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Scalable picture archiving and communication system.",
            highlight: "Zero-Footprint Viewer",
            icon: Cpu,
            tag: "New"
        },
        {
            id: 4,
            name: "AutoLab BioAnalyzer 5000",
            category: "Laboratory Systems",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
            shortDesc: "High-throughput biochemistry analysis workstation.",
            highlight: "800 Tests/Hour",
            icon: Zap,
            tag: null
        },
        {
            id: 5,
            name: "ModuCare Modular OT",
            category: "Hospital Infrastructure",
            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Antibacterial, seamless steel panel operating theaters.",
            highlight: "Class 100 Cleanroom",
            icon: ShieldCheck,
            tag: null
        },
        {
            id: 6,
            name: "AeroSense Patient Monitor",
            category: "Monitoring & Imaging",
            image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Continuous multi-parameter vital signs monitoring.",
            highlight: "Wireless Telemetry",
            icon: Activity,
            tag: "Popular"
        },
        {
            id: 7,
            name: "Lumina 128-Slice CT Scanner",
            category: "Diagnostic Equipment",
            image: "https://images.unsplash.com/photo-1530432999454-015a31a5eb23?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Low-dose, high-speed computed tomography system.",
            highlight: "AI Artifact Reduction",
            icon: Microscope,
            tag: null
        },
        {
            id: 8,
            name: "Alliance HIS Platform Architecture",
            category: "Healthcare IT Solutions",
            image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
            shortDesc: "Integrated hospital management and billing software.",
            highlight: "HL7 Compliant",
            icon: Cpu,
            tag: "Enterprise"
        }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="flex flex-col font-sans bg-slate-50 min-h-screen">
            {/* 1. PAGE HERO / INTRO SECTION */}
            <section className="relative pt-32 pb-20 bg-white border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[120px] opacity-50 translate-y-1/3 -translate-x-1/4" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6"
                        >
                            <ShieldCheck size={14} className="text-primary" />
                            <span>Enterprise Solutions Catalog</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                        >
                            Healthcare Technologies <br />
                            <span className="text-primary">& Equipment.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl"
                        >
                            Explore our comprehensive portfolio of clinical innovations. Designed for high-reliability environments, our systems deliver precision, interoperability, and operational excellence for modern medical institutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* 6. SUPPORTING INFORMATION SECTION */}
            <section className="bg-primary py-4 border-y border-primary-light/20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-center sm:text-left">
                        <div className="flex items-center gap-3 text-white/90 text-sm font-medium">
                            <CheckCircle2 size={18} className="text-accent" />
                            <span>Certified Installation & Calibration</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-3 text-white/90 text-sm font-medium">
                            <Zap size={18} className="text-accent" />
                            <span>Comprehensive Clinical Training</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                        <div className="flex items-center gap-3 text-white/90 text-sm font-medium">
                            <Activity size={18} className="text-accent" />
                            <span>24/7 Priority Technical Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CATALOG AREA */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* 2 & 4. PRODUCT CATEGORY NAVIGATION / QUICK FILTERING */}
                        <div className="lg:w-1/4 shrink-0">
                            <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-6 pb-4 border-b border-slate-100">
                                    <Filter size={20} />
                                    Categories
                                </div>
                                <ul className="space-y-2">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setActiveCategory(cat)}
                                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex justify-between items-center ${activeCategory === cat
                                                        ? 'bg-primary text-white shadow-md'
                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                                    }`}
                                            >
                                                {cat}
                                                {activeCategory === cat && <ChevronRight size={16} className="text-accent" />}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 3. PRODUCT GRID */}
                        <div className="lg:w-3/4">
                            {/* Grid Header */}
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{activeCategory} Solutions</h2>
                                    <p className="text-slate-500 text-sm mt-1">Showing {filteredProducts.length} technologies</p>
                                </div>
                            </div>

                            {/* The Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {filteredProducts.map((product) => {
                                        const Icon = product.icon;
                                        return (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                key={product.id}
                                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group cursor-pointer"
                                            >
                                                {/* Image Area */}
                                                <div className="h-48 relative overflow-hidden bg-slate-100 p-6 flex items-center justify-center">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    {product.tag && (
                                                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                                            {product.tag}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content Area */}
                                                <div className="p-6 flex flex-col flex-grow">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                                                            <Icon size={12} />
                                                        </div>
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{product.category}</span>
                                                    </div>

                                                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 group-hover:text-primary transition-colors">
                                                        {product.name}
                                                    </h3>

                                                    <p className="text-sm text-slate-600 mb-6 flex-grow">
                                                        {product.shortDesc}
                                                    </p>

                                                    {/* Highlight Box */}
                                                    <div className="bg-slate-50 rounded-lg px-4 py-2 mb-6 border border-slate-100 flex items-center gap-2">
                                                        <Award size={14} className="text-accent shrink-0" />
                                                        <span className="text-xs font-semibold text-slate-700">{product.highlight}</span>
                                                    </div>

                                                    <Link to={`/products/${product.id}`} className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-primary transition-all text-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                                        View Details
                                                        <ChevronRight size={16} className="-ml-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="text-center py-20">
                                    <div className="inline-flex w-16 h-16 rounded-full bg-slate-100 items-center justify-center text-slate-400 mb-4">
                                        <Filter size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">No solutions found</h3>
                                    <p className="text-slate-500">Please select a different category to view available technologies.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FEATURED PRODUCTS STRIP (Integrated into a section) */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-accent/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-md">
                        <div className="lg:w-1/2">
                            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">Flagship Innovation</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                                Next-Gen AI Pathology System
                            </h2>
                            <p className="text-slate-300 mb-8 max-w-lg leading-relaxed">
                                Accelerate diagnostic throughput by 60% with our new multi-slide digital scanning architecture, featuring integrated AI lesion detection and remote collaborative viewing.
                            </p>
                            <Link to="/contact" className="btn btn-secondary px-8 py-3 rounded-xl text-primary font-bold shadow-lg hover:shadow-xl bg-white hover:scale-105 transition-transform inline-block">
                                Explore Technical Overview
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800"
                                alt="AI Pathology"
                                className="rounded-2xl shadow-2xl mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CALL-TO-ACTION SECTION */}
            <section className="py-24 bg-white text-center border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">Need Help Selecting the Right Solution?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Our biomedical engineers and technical architects are available to help you evaluate specifications, integration requirements, and procurement options for your facility.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm">
                                Contact Our Specialists
                            </Link>
                            <Link to="/get-quote" className="px-8 py-4 bg-white text-primary border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                Request Product Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
