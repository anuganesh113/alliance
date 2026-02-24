import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Zap, Activity, Microscope, Settings, Wrench, Download, ChevronRight, Building2 } from 'lucide-react';

const ProductDetail = () => {
    const { productId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    // Mock data for the specific product 
    
    const product = {
        name: "Alliance MR-3T High-Field Scanner",
        category: "Diagnostic Equipment",
        tag: "Advanced Series",
        shortDesc: "Advanced 3 Tesla magnetic resonance imaging system delivering unparalleled diagnostic clarity for neurological, musculoskeletal, and cardiovascular assessments.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=1600",
        highlights: [
            { icon: Activity, label: "0.1mm Resolution", value: "Ultra-High Precision" },
            { icon: Zap, label: "AI Assisted", value: "30% Faster Scans" },
            { icon: ShieldCheck, label: "Quiet Suite", value: "97% Noise Reduction" },
            { icon: Microscope, label: "Multi-nuclear", value: "Clinical Versatility" }
        ],
        overview: "The Alliance MR-3T represents the pinnacle of diagnostic imaging infrastructure. Engineered specifically for high-throughput tertiary care centers and specialized diagnostic hubs, this high-field magnetic resonance scanner eliminates the compromise between patient comfort and image resolution. Its proprietary AI-accelerated reconstruction algorithms dramatically reduce scan times while enhancing signal-to-noise ratios, allowing clinicians to detect minute pathologies earlier and with greater confidence.",
        features: [
            {
                title: "AI-Driven Image Reconstruction",
                desc: "Reconstructs complex morphological data using deep learning networks, significantly reducing artifacts.",
                benefit: "Accuracy"
            },
            {
                title: "Adaptive Coil Technology",
                desc: "Ultra-lightweight, flexible receiver coils that adapt to any patient morphology seamlessly.",
                benefit: "Patient Workflow"
            },
            {
                title: "Zero-Boil-Off Helium System",
                desc: "Advanced closed-loop cooling architecture virtually eliminates the need for helium refills.",
                benefit: "Reliability & ROI"
            },
            {
                title: "Interoperable Architecture",
                desc: "Native DICOM 3.0 and HL7 compliance integrating directly into existing HIS/PACS networks.",
                benefit: "Integration"
            }
        ],
        specifications: [
            { label: "Model Configuration", value: "MR-3T / Model: XR-9000" },
            { label: "Field Strength", value: "3.0 Tesla (High Field)" },
            { label: "Bore Diameter", value: "70 cm (Wide Bore)" },
            { label: "Gradient Strength", value: "45 mT/m @ 200 T/m/s" },
            { label: "System Dimensions", value: "1.95m (W) × 2.05m (H) × 1.73m (D)" },
            { label: "Power Requirements", value: "480V, 3-Phase, 150 kVA Peak" },
            { label: "Operating Environment", value: "Controlled Temp: 18-22°C, Humidity: 40-60%" },
            { label: "Certifications", value: "FDA Cleared, CE Marked (MDR), ISO 13485" }
        ],
        applications: [
            "Tertiary Academic Hospitals",
            "Specialized Neurology Centers",
            "Advanced Orthopedic Clinics",
            "Dedicated Independent Diagnostic Facilities"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
            {/* 1. PRODUCT HERO SECTION */}
            <section className="bg-white pt-24 pb-16 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
                        <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1">
                            <ArrowLeft size={16} /> Products Catalog
                        </Link>
                        <ChevronRight size={14} className="text-slate-300 mx-1" />
                        <span className="text-slate-800">{product.category}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">
                        {/* Hero Image */}
                        <div className="lg:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative rounded-3xl overflow-hidden bg-slate-100 p-8 border border-slate-200 aspect-square flex items-center justify-center mix-blend-multiply"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply drop-shadow-2xl"
                                />
                                <div className="absolute top-6 left-6 flex gap-3">
                                    <div className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                                        {product.tag}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Hero Content */}
                        <div className="lg:w-1/2 w-full space-y-6">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">{product.category}</span>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                                    {product.shortDesc}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                className="grid grid-cols-2 gap-4 mb-10"
                            >
                                {product.highlights.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1 text-ellipsis overflow-hidden whitespace-nowrap">{item.label}</p>
                                                <p className="text-sm font-bold text-slate-900 leading-none">{item.value}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to="/get-quote" className="btn btn-primary px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center flex-1 sm:flex-none justify-center font-bold">
                                    Request a Quote
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-white text-primary border border-slate-300 rounded-xl font-bold hover:bg-slate-50 hover:border-primary transition-colors text-center flex-1 sm:flex-none justify-center">
                                    Schedule Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:w-2/3 space-y-20">

                        {/* 2. PRODUCT OVERVIEW */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1.5 h-6 bg-accent rounded-full" />
                                <h2 className="text-2xl font-bold text-slate-900">Clinical Overview</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed font-normal">
                                {product.overview}
                            </p>
                        </section>

                        {/* 3. KEY FEATURES & BENEFITS */}
                        <section>
                            <div className="flex items-center gap-3 my-8">
                                <div className="w-1.5 h-6 bg-accent rounded-full" />
                                <h2 className="text-2xl font-bold text-slate-900">Key Advancements & Benefits</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-4">
                                            <Settings size={18} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature.desc}</p>
                                        <div className="bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded inline-block">
                                            Outcomes: {feature.benefit}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 8. VISUAL GALLERY */}
                        <section>
                            <div className="flex items-center justify-between my-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                                    <h2 className="text-2xl font-bold text-slate-900">System Visuals</h2>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {product.gallery.map((img, idx) => (
                                    <div key={idx} className={`rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 aspect-[4/3] ${idx === 0 ? 'sm:col-span-2 aspect-[21/9]' : ''}`}>
                                        <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Specs & Sticky Info */}
                    <div className="lg:w-1/3 space-y-8">

                        {/* 4. TECHNICAL SPECIFICATIONS */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Activity size={20} className="text-primary" />
                                Technical Specifications
                            </h3>
                            <div className="space-y-4">
                                {product.specifications.map((spec, idx) => (
                                    <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                                        <p className="text-sm font-semibold text-slate-900">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 hover:bg-slate-100 text-primary font-bold rounded-xl text-sm transition-colors border border-slate-200">
                                <Download size={16} /> Download Spec Sheet
                            </button>
                        </div>

                        {/* 5. CLINICAL/OPERATIONAL APPLICATIONS */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Building2 size={20} className="text-primary" />
                                Ideal Environments
                            </h3>
                            <ul className="space-y-3">
                                {product.applications.map((app, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                                        {app}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 6 & 7. INSTALLATION & SUPPORT (Why it stands out) */}
                        <div className="bg-primary text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                                <Wrench size={20} className="text-accent" />
                                Alliance Assurance
                            </h3>
                            <div className="space-y-4 relative z-10">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={14} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Turnkey Installation</h4>
                                        <p className="text-xs text-slate-300 mt-1">Complete site-prep and commissioning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Activity size={14} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">24/7 Remote Monitoring</h4>
                                        <p className="text-xs text-slate-300 mt-1">Predictive maintenance prevents downtime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 9. FINAL CALL-TO-ACTION SECTION */}
            <section className="bg-white py-24 border-t border-slate-200 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto border border-slate-100 bg-white/50 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-xl">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck size={32} className="text-accent" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Equip Your Facility with Proven Technology</h2>
                        <p className="text-lg text-slate-600 mb-10 font-medium">
                            Our architecture and procurement specialists are ready to help you validate integration requirements and calculate total cost of ownership.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/get-quote" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                Request Official Pricing
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-white text-primary border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                Talk to a Specialist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Missing import fix for Building2 - adding to the top locally if required based on use, but it's used so it must be imported. Let's fix imports in the replace_file_content if I missed any. Wait, I imported it in the top list? No I didn't import Building2 in my initial list. Let me check: `import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Zap, Activity, Microscope, Settings, Wrench, Download, ChevronRight } from 'lucide-react';`. Ah, I need to add Building2. I will do a quick replace.
export default ProductDetail;
