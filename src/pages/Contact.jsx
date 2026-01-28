import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
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

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="+977 98XXXXXXXX" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white">
                                        <option>General Inquiry</option>
                                        <option>Request a Quote</option>
                                        <option>Service & Maintenance Support</option>
                                        <option>Partnership Proposal</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full md:w-auto px-8">
                                    Send Message
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
