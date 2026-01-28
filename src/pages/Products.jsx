import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const Products = () => {
    const productCategories = [
        {
            title: 'Diagnostic Imaging',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=600',
            description: 'High-performance MRI, CT Scanners, Ultrasound Systems, and Digital X-Ray solutions.',
            items: ['MRI 1.5T / 3T', 'CT Scanners (16-128 Slice)', 'Color Doppler Ultrasound', 'Digital Radiography (DR)']
        },
        {
            title: 'Critical Care (ICU/NICU)',
            image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=600',
            description: 'Advanced life support systems including Ventilators, Patient Monitors, and Anesthesia Workstations.',
            items: ['ICU Ventilators', 'Multipara Monitors', 'Defibrillators', 'Infusion & Syringe Pumps']
        },
        {
            title: 'Operating Room (OR)',
            image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
            description: 'Integrated OT solutions ensuring precision and safety for surgical teams.',
            items: ['OT Tables & Lights', 'Electrosurgical Units', 'Laparoscopy Towers', 'Anesthesia Machines']
        },
        {
            title: 'Laboratory & Diagnostics',
            image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600',
            description: 'Automated analyzers and pathology equipment for accurate diagnostic results.',
            items: ['Hematology Analyzers', 'Biochemistry Analyzers', 'Microscopes', 'Centrifuges']
        },
        {
            title: 'Medical IT & Software',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
            description: 'Software solutions to manage hospital workflows and patient data securely.',
            items: ['Hospital Information System (HIS)', 'PACS / RIS', 'Telemedicine Kits', 'EMR Software']
        },
        {
            title: 'Hospital Furniture',
            image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600',
            description: 'Ergonomic and durable furniture for patient wards, OPDs, and waiting areas.',
            items: ['ICU Beds (Electric)', 'Ward Beds', 'Stretchers & Trolleys', 'Bedside Lockers']
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-primary py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Products & Solutions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Discover our extensive portfolio of world-class medical technologies tailored for every department.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productCategories.map((cat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all"
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-primary mb-3">{cat.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6">{cat.description}</p>
                                    <ul className="space-y-2 mb-8">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="text-accent font-medium text-sm hover:underline">
                                        Request Quote &rarr;
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
