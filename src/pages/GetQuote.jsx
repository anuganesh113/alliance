import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    ShieldCheck,
    Activity,
    Users,
    Building2,
    Stethoscope,
    Cpu,
    Clock,
    CheckCircle2,
    Briefcase,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';

const GetQuote = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        institutionName: '',
        serviceType: '',
        budgetRange: '',
        timeline: '',
        requirements: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm";
    const labelClasses = "block text-sm font-medium text-slate-300 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Content & Trust Signals */}
                    <div className="lg:w-5/12 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                                <ShieldCheck size={14} />
                                <span>Institutional Partnership</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
                                Invest in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400">
                                    Precision Excellence.
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 font-light leading-relaxed">
                                Ready to upgrade your medical infrastructure? Our team of experts is standing by to architect your custom technology roadmap.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Rapid Response</h3>
                                    <p className="text-sm text-slate-400">Personalized consultation within 24 business hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Tailored Architectures</h3>
                                    <p className="text-sm text-slate-400">Solutions designed for your specific clinical scale.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8 border-t border-white/10"
                        >
                            <div className="flex items-center gap-6 opacity-60">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">ISO</div>
                                    <div className="text-[10px] uppercase tracking-widest">Certified</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">24/7</div>
                                    <div className="text-[10px] uppercase tracking-widest">Support</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-2xl font-black text-white">150+</div>
                                    <div className="text-[10px] uppercase tracking-widest">Institutions</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-7/12 w-full"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h2 className="text-3xl font-black mb-4">Request Received.</h2>
                                    <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                                        An Alliance strategic partner will review your requirements and contact you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="btn btn-primary px-8 py-3 rounded-full"
                                    >
                                        Send Another Request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClasses}>Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Dr. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="john@hospital.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClasses}>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Institution Name</label>
                                            <input
                                                type="text"
                                                name="institutionName"
                                                required
                                                value={formData.institutionName}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="City General Hospital"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClasses}>Service Interest</label>
                                            <select
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleChange}
                                                className={inputClasses + " appearance-none"}
                                            >
                                                <option value="" className="bg-slate-900">Select Service</option>
                                                <option value="equipment" className="bg-slate-900">Medical Equipment Supply</option>
                                                <option value="it" className="bg-slate-900">Healthcare IT Solutions</option>
                                                <option value="infrastructure" className="bg-slate-900">Hospital Infrastructure</option>
                                                <option value="maintenance" className="bg-slate-900">Maintenance & Support</option>
                                                <option value="consulting" className="bg-slate-900">Strategic Consulting</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClasses}>Project Timeline</label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className={inputClasses + " appearance-none"}
                                            >
                                                <option value="" className="bg-slate-900">Select Timeline</option>
                                                <option value="immediate" className="bg-slate-900">Immediate (Within 1 Month)</option>
                                                <option value="quarter" className="bg-slate-900">Short-term (1-3 Months)</option>
                                                <option value="mid" className="bg-slate-900">Mid-term (3-6 Months)</option>
                                                <option value="planning" className="bg-slate-900">Planning Stage (6+ Months)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClasses}>Specific Requirements</label>
                                        <textarea
                                            name="requirements"
                                            rows="4"
                                            value={formData.requirements}
                                            onChange={handleChange}
                                            className={inputClasses + " resize-none"}
                                            placeholder="Describe your project needs, specific modalities, or institutional goals..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn btn-primary py-5 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold group shadow-[0_0_40px_-10px_rgba(0,135,68,0.4)] hover:shadow-[0_0_60px_-10px_rgba(0,135,68,0.6)]"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Initialize Quote Process
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-6">
                                        Data secured with industrial-grade encryption protocols
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GetQuote;
