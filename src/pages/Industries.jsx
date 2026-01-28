import { Building2, Activity, Microscope, UserPlus, HeartPulse, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Industries = () => {
    const sectors = [
        {
            icon: Building2,
            title: 'Hospitals & Medical Centers',
            content: 'Complete turnkey solutions for multi-specialty hospitals, from planning to equipment installation and AMC.'
        },
        {
            icon: Microscope,
            title: 'Diagnostic Laboratories',
            content: 'High-throughput analyzers and imaging systems designed for accuracy and speed in pathology and radiology centers.'
        },
        {
            icon: GraduationCap,
            title: 'Medical Colleges',
            content: 'Educational technology and simulation labs for teaching hospitals and medical universities.'
        },
        {
            icon: Activity,
            title: 'Specialty Clinics',
            content: 'Tailored equipment for Dental, Eye, Heart, and Skin clinics requiring specialized smaller-footprint devices.'
        },
        {
            icon: HeartPulse,
            title: 'Govt. Health Institutions',
            content: 'Reliable supply chain and bulk procurement services for government tenders and public health projects.'
        },
        {
            icon: UserPlus,
            title: 'NGOs & Aid Organizations',
            content: 'Robust, portable, and easy-to-maintain equipment for remote camps and humanitarian medical missions.'
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-primary py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Tailored technology solutions for every segment of the healthcare ecosystem.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                            <div key={index} className="p-8 border border-slate-100 rounded-xl hover:border-accent/30 transition-colors group">
                                <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6">
                                    <sector.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{sector.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {sector.content}
                                </p>
                                <Link to="/contact" className="text-sm font-medium text-accent hover:underline">
                                    Discuss Requirements &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
