import { Check, Shield, Clock, Users, Zap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Shield,
            title: 'Uncompromised Quality',
            desc: 'We only partner with ISO/CE/FDA certified global manufacturers to ensure patient safety and equipment longevity.'
        },
        {
            icon: Users,
            title: 'Expert Engineering Team',
            desc: 'Our team consists of factory-trained biomedical engineers capable of handling complex installations and repairs.'
        },
        {
            icon: Clock,
            title: 'Maximum Uptime',
            desc: 'With our rapid-response service network, we ensure your critical equipment stays operational 24/7.'
        },
        {
            icon: Zap,
            title: 'Comprehensive Solutions',
            desc: 'From initial consultation and site planning to procurement, installation, and end-of-life disposal.'
        },
        {
            icon: Award,
            title: 'Industry Reputation',
            desc: 'Over 15 years of trust built with the leading hospitals and diagnostic chains in the country.'
        },
        {
            icon: Check,
            title: 'Transparent Pricing',
            desc: 'No hidden costs. We provide clear, competitive quotations with detailed specifications.'
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-primary py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Alliance?</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We don't just sell equipment; we build long-lasting partnerships based on trust and performance.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionTitle title="The Alliance Difference" subtitle="Our Value Proposition" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="mb-6 text-accent">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;
