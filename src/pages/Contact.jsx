import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Loader, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        description: '',
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors({});
        setSuccess(false);

        try {
            const res = await fetch('https://alliancehealthcare.anoopinnovations.com/api/v1/front/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const json = await res.json();
            if (res.ok && json.success) {
                setSuccess(true);
                setForm({ first_name: '', last_name: '', email: '', phone: '', subject: 'General Inquiry', description: '' });
            } else if (json.errors) {
                setErrors(json.errors);
            } else {
                setErrors({ form: json.message || 'Submission failed. Please try again.' });
            }
        } catch (err) {
            setErrors({ form: 'Network error. Please check your connection and try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col">
            {/* Simple Header */}
            <section className="bg-primary py-16 lg:py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-slate-300 text-lg">We are here to assist with your healthcare technology needs.</p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        {/* Contact Info & Map */}
                        <div className="lg:w-1/3 bg-primary text-white p-8 lg:p-12 relative flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-accent shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Our Headquarters</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                123 Healthcare Ave, Tech Park<br />
                                                Kathmandu, Nepal
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="text-accent shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Call Us</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                +977 1 4XXXXXX<br />
                                                Mon-Fri from 9am to 6pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="text-accent shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Email Us</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                info@alliancehealthcare.com<br />
                                                support@alliancehealthcare.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-slate-400 text-sm">
                                    Looking for career opportunities?<br />
                                    <a href="#" className="text-white hover:text-accent underline decoration-accent decoration-2 underline-offset-4">Join our team</a>
                                </p>
                            </div>

                            {/* Abstract Pattern */}
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <div className="w-32 h-32 rounded-full border-8 border-white/20"></div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3 p-8 lg:p-12">
                            <SectionTitle alignment="left" subtitle="Inquiry Form" title="Send us a Message" />

                            {success && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 font-medium">
                                    <CheckCircle2 size={20} className="shrink-0" />
                                    Thank you! Your message has been sent successfully. We'll get back to you shortly.
                                </div>
                            )}

                            {errors.form && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium text-sm">
                                    {errors.form}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={form.first_name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.first_name ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="John"
                                        />
                                        {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name[0]}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={form.last_name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.last_name ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="Doe"
                                        />
                                        {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name[0]}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors`}
                                            placeholder="+977 98XXXXXXXX"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white`}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Request a Quote</option>
                                        <option>Service & Maintenance Support</option>
                                        <option>Partnership Proposal</option>
                                    </select>
                                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject[0]}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-400' : 'border-slate-300'} focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none`}
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description[0]}</p>}
                                </div>

                                <button type="submit" disabled={submitting} className="btn btn-primary w-full md:w-auto px-8 flex items-center justify-center gap-2 disabled:opacity-60">
                                    {submitting ? (
                                        <><Loader className="animate-spin" size={18} /> Sending...</>
                                    ) : (
                                        <>Send Message <ArrowRight size={18} /></>
                                    )}
                                </button>

                                <p className="text-xs text-slate-500 mt-4 max-w-md">
                                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never spam you.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Frame */}
            <div className="h-[400px] w-full bg-slate-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625952136!2d85.3239605!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1683792345678!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
