import { Award, ShieldCheck } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Certifications = () => {
    return (
        <div className="flex flex-col">
            <section className="bg-primary py-16 lg:py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Partners</h1>
                    <p className="text-xl text-slate-300">Recognized for quality, trusted by global leaders.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Quality Certifications" subtitle="Our Standards" />
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {/* Placeholders for Certifications */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="w-64 p-8 border border-slate-200 rounded-xl flex flex-col items-center text-center">
                                <Award size={48} className="text-accent mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-2">ISO 9001:2015</h3>
                                <p className="text-slate-600 text-sm">Quality Management System Certified</p>
                            </div>
                        ))}
                    </div>

                    <SectionTitle title="Global Technology Partners" subtitle="Authorized Distributor" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                        {/* Placeholders for Partner Logos using Text for now */}
                        {['GE Healthcare', 'Siemens Healthineers', 'Philips', 'Mindray', 'Drager', 'Karl Storz', 'Olympus', 'Fujifilm'].map((partner, i) => (
                            <div key={i} className="h-24 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400 text-lg">
                                {partner} Logo
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
