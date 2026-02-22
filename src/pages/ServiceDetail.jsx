import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    Cpu,
    Building2,
    Microscope,
    Wrench,
    Activity,
    ArrowRight,
    CheckCircle2,
    ArrowLeft,
    ShieldCheck,
    Zap,
    Users,
    Clock,
    Award
} from 'lucide-react';

const serviceData = {
    'medical-equipment': {
        title: 'Medical Equipment Supply',
        icon: Stethoscope,
        tagline: 'Precision diagnostic and therapeutic technology.',
        longDesc: 'Our medical equipment supply segment focuses on bridging the gap between cutting-edge technology and clinical accessibility. We partner with world-renowned manufacturers to deliver high-performance diagnostic imaging, life support systems, and specialized therapeutic units that clinicians rely on to save lives.',
        color: 'text-accent',
        bgColor: 'bg-accent/10',
        features: [
            { title: 'Diagnostic Imaging', desc: 'Advanced MRI, CT, and X-Ray systems for precise diagnostics.' },
            { title: 'Critical Care Units', desc: 'Complete ICU/NICU setups including ventilators and monitors.' },
            { title: 'Surgical Theaters', desc: 'Next-gen surgical lights, tables, and cautery systems.' },
            { title: 'Life Support', desc: 'Robust anesthesia machines and emergency resuscitation gear.' }
        ],
        benefits: ['Factory-Authorized Calibration', 'Extended Warranty Programs', 'Application Specialist Support'],
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000'
    },
    'healthcare-it': {
        title: 'Healthcare IT Solutions',
        icon: Cpu,
        tagline: 'Digital-first clinical ecosystems.',
        longDesc: 'Digital transformation is no longer optional. Our IT solutions provide the neurological system for modern hospitals—seamlessly connecting data, clinicians, and patients. We implement interoperable ecosystems that prioritize data security while maximizing operational throughput.',
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
        features: [
            { title: 'Enterprise HIS', desc: 'Comprehensive Hospital Information Systems for 360° management.' },
            { title: 'PACS/RIS', desc: 'High-speed imaging storage and retrieval protocols.' },
            { title: 'Telemedicine', desc: 'Low-latency remote consultation and monitoring platforms.' },
            { title: 'Data Security', desc: 'Industrial-grade encryption and HIPAA-compliant architecture.' }
        ],
        benefits: ['Cloud & On-Premise Stability', 'Seamless API Integration', '24/7 Cybersecurity Monitoring'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
    },
    'infrastructure': {
        title: 'Hospital Infrastructure',
        icon: Building2,
        tagline: 'Turnkey clinical facility engineering.',
        longDesc: 'From greenfield projects to specialized facility upgrades, we provide end-to-end design and engineering services. Our expertise in modular OT construction and medical gas pipeline systems (MGPS) ensures that your facility is non only functional but optimized for patient safety and clinical flow.',
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/10',
        features: [
            { title: 'Modular OT', desc: 'State-of-the-art sterile environments with integrated controls.' },
            { title: 'Medical Gas Systems', desc: 'High-integrity pipeline networks for critical gas delivery.' },
            { title: 'CSSD Planning', desc: 'Optimal sterilization workflows for surgical instrumentation.' },
            { title: 'HVAC/Clean Room', desc: 'Specialized air filtration and pressure management for labs.' }
        ],
        benefits: ['Consulting-to-Commissioning', 'Regulatory Compliance Audits', 'Space-Optimization Design'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000'
    },
    'diagnostics': {
        title: 'Diagnostic Systems',
        icon: Microscope,
        tagline: 'Precision laboratory command centers.',
        longDesc: 'Accelerate clinical decision-making with automated, high-throughput laboratory solutions. We design command centers that handle high sample volumes with zero margin for error, integrating molecular diagnostics and digital pathology into a unified workflow.',
        color: 'text-orange-400',
        bgColor: 'bg-orange-400/10',
        features: [
            { title: 'Automated Lab', desc: 'Robotic track systems for multi-modality sampling.' },
            { title: 'Molecular DX', desc: 'High-precision PCR and sequencing infrastructure.' },
            { title: 'Digital Pathology', desc: 'AI-assisted slide analysis and remote diagnostics.' },
            { title: 'Point-of-Care', desc: 'Rapid, accurate bedside testing modalities.' }
        ],
        benefits: ['LIMS Interoperability', 'Maintenance of Reagent Chains', 'Expert Workflow Mapping'],
        image: 'https://images.unsplash.com/photo-1579154273821-ad991fb9a565?auto=format&fit=crop&q=80&w=1000'
    },
    'support': {
        title: 'Maintenance & Support',
        icon: Wrench,
        tagline: 'Life-cycle reliability and zero downtime.',
        longDesc: 'Healthcare never stops, and neither do we. Our maintenance division is built on the premise of proactive prevention. With 24/7 technical rapid-response teams and factory-trained engineers, we ensure that your most critical assets are always operational when they matter most.',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-400/10',
        features: [
            { title: 'Annual Maintenance', desc: 'Structured preventive checkups to maximize uptime.' },
            { title: 'Calibration', desc: 'Certified precision adjustments for diagnostic accuracy.' },
            { title: 'Spare Parts', desc: 'Direct supply chain for high-integrity original components.' },
            { title: 'Emergency Repair', desc: 'Technical rapid-response teams available round the clock.' }
        ],
        benefits: ['Guaranteed Response Times', 'Online Asset Tracking', 'Staff Capability Training'],
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1000'
    },
    'consulting': {
        title: 'Strategic Consulting',
        icon: Activity,
        tagline: 'Operational intelligence and institutional ROI.',
        longDesc: 'Data-driven insights to optimize your clinical operations. We provide capability assessments, technology lifecycle planning, and workflow audits that help medical institutions maximize their return on investment while elevating the standard of patient care.',
        color: 'text-rose-400',
        bgColor: 'bg-rose-400/10',
        features: [
            { title: 'Tech Assessment', desc: 'Objective audits of current infrastructure capabilities.' },
            { title: 'Workflow Audit', desc: 'Identifying bottlenecks in patient and clinical flow.' },
            { title: 'Feasibility', desc: 'In-depth market and financial modeling for new projects.' },
            { title: 'Compliance', desc: 'Ensuring alignment with local and international standards.' }
        ],
        benefits: ['Unbiased Technology Review', 'Capital Budgeting Experts', 'Accreditation Preparedness'],
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000'
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceData[serviceId];

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="py-32 text-center text-primary text-2xl font-bold bg-white h-screen">
                Service not found
                <div className="mt-8">
                    <Link to="/services" className="btn btn-primary px-8 py-3 rounded-full">Back to Services</Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    return (
        <div className="bg-white text-slate-900 min-h-screen font-sans">
            {/* 1. Premium Hero Section - Light Mode */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
                    <div className={`absolute -top-[20%] -right-[10%] w-[800px] h-[800px] ${service.bgColor} rounded-full blur-[120px] opacity-20`} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group font-semibold">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Services</span>
                        </Link>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${service.bgColor} border border-slate-200 ${service.color} font-bold text-xs uppercase tracking-[0.2em] mb-8 shadow-sm`}
                            >
                                <Icon size={14} />
                                <span>Core Capability</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8 text-primary"
                            >
                                {service.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
                                    {service.tagline}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl"
                            >
                                {service.longDesc}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-2/5 relative"
                        >
                            <div className={`absolute inset-0 ${service.bgColor} blur-2xl rounded-full opacity-30 -z-10`} />
                            <div className="relative p-12 bg-white border border-slate-100 rounded-[3rem] shadow-2xl flex items-center justify-center">
                                <Icon size={160} className={`${service.color} opacity-40`} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Key Capabilities Grid - Light Mode */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">Solutions Focus</span>
                            <h2 className="text-4xl font-black tracking-tight text-primary">Technical Capabilities</h2>
                        </div>
                        <Link to="/get-quote" className="btn btn-primary px-8 py-3 rounded-full hover:scale-105 transition-transform">Request Technical Specs</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className={`w-12 h-12 ${service.bgColor} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Competitive Advantage - Light Mode */}
            <section className="py-24 bg-slate-50 relative border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/5 -rotate-3 rounded-[3rem]" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="relative rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-video object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl font-black tracking-tight leading-tight text-primary">
                                Why Partners Choose Alliance for <span className={service.color}>{service.title}.</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-light leading-relaxed">
                                We go beyond simple procurement. Our institutional partnerships are built on shared outcomes—ensuring that every technology investment translates into better patient results and operational efficiency.
                            </p>

                            <ul className="space-y-6">
                                {service.benefits.map((benefit, b) => (
                                    <li key={b} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform">
                                            <Award size={14} />
                                        </div>
                                        <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">Full Compliance</h4>
                                        <p className="text-sm text-slate-500">Global medical standards.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Zap className="text-accent shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-primary">Rapid Deployment</h4>
                                        <p className="text-sm text-slate-500">Optimized logistical flow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Strategic CTA - Light Premium */}
            <section className="py-24 bg-white relative overflow-hidden text-center rounded-t-[4rem]">
                <div className="absolute inset-0 bg-slate-50 opacity-[0.5] mix-blend-multiply pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tighter">
                        Architect Your <span className="text-accent">Clinical Infrastructure.</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-light">
                        Connect with our strategic consulting group to discuss specification sheets, institutional pricing, and deployment timelines.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/get-quote" className="btn btn-primary px-10 py-5 rounded-2xl text-lg shadow-xl hover:scale-105 transition-transform">
                            Request a Custom Quote
                        </Link>
                        <Link to="/contact" className="px-10 py-5 rounded-2xl text-lg font-bold text-primary border border-slate-200 hover:bg-slate-50 transition-colors">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
