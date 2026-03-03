import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    ChevronRight,
    ArrowRight,
    Download,
    Link as LinkIcon,
    ChevronLeft,
    ChevronDown,
    Activity,
    FileText
} from 'lucide-react';
import criticalCareImg from '../assets/critical-care.webp';

const ProductDetail = () => {
    const { productId } = useParams();
    const [activeTab, setActiveTab] = useState('Description');
    const [mainImage, setMainImage] = useState(null);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);

    // Simplified mock data based on reference image
    const product = {
        name: "PRIMA 465",
        category: "Critical Care",
        company: "PENLON",
        model: "PRIMA 465",
        image: criticalCareImg,
        thumbnails: [
            criticalCareImg,
            "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
        ],
        description: [
            "The Prima 465 is the latest update to the Penlon anaesthetic machine range, providing the ideal solution for today's busy operating room.",
            "Clinician-focused choices and benefits, including intuitive 15.6\" high-definition touchscreen with virtual flow display and up to three waveform and respiratory loop display.",
            "Electronic gas mixer with electronic anti-hypoxic device and digital flowmeters",
            "Improved 12.1\" touchscreen user interface",
            "Eight ventilation modes",
            "Suitable for adult, paediatric and neonates",
            "Multiple anaesthetic gas monitoring options",
            "NOW with anaesthetic agent consumption"
        ]
    };

    // Set initial main image
    useEffect(() => {
        if (!mainImage) {
            setMainImage(product.image);
        }
    }, [product.image]);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPos({ x, y });
    };

    const categories = [
        'CRITICAL CARE', 'CSSD', 'DENTAL', 'ENT', 'GENERAL SURGERY', 'GYNECOLOGY',
        'HOSPITAL FURNITURE', 'NEUROLOGY', 'NEUROSURGERY', 'OPHTHALMOLOGY',
        'OR ROOMS', 'ORTHOPAEDICS', 'PEDIATRICS & NEONATOLOGY', 'PHYSIOTHERAPY',
        'RADIOLOGY', 'WASTE MANAGEMENT', 'WOUND MANAGEMENT'
    ];

    const brands = [
        'ACRACUT', 'ARJOHUNTLEIGH', 'BENQ', 'BIOLIGHT', 'BRAIN LAB', 'CANON',
        'COVIDIEN', 'DMS GROUP'
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. DARK HERO SECTION */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=1600"
                        className="w-full h-full object-cover brightness-[0.4] scale-105"
                        alt="Hero background"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
                        {product.name}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/80 font-bold text-sm md:text-base">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>//</span>
                        <span className="text-secondary">{product.name}</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* 2. SIDEBAR */}
                    <aside className="lg:w-1/4 space-y-10">
                        {/* Product Search */}
                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold text-xl flex items-center gap-2">
                                Product Search
                            </h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full border-2 border-slate-100 bg-slate-50 py-3 pl-4 pr-12 rounded-lg focus:border-secondary transition-colors outline-none font-medium"
                                />
                                <button className="absolute right-0 top-0 bottom-0 px-4 bg-secondary text-white rounded-r-lg hover:bg-secondary-dark transition-colors">
                                    <Search size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Categories List */}
                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold text-xl uppercase">Categories</h3>
                            <ul className="divide-y divide-slate-100 border-t border-slate-100">
                                {categories.map((cat, idx) => (
                                    <li key={idx}>
                                        <button className="w-full flex items-center justify-between py-3 text-slate-700 hover:text-secondary font-bold text-sm transition-colors group">
                                            <span className={cat === product.category.toUpperCase() ? 'text-secondary' : ''}>{cat}</span>
                                            <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${cat === product.category.toUpperCase() ? 'text-secondary' : 'text-slate-300'}`} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Brands List */}
                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold text-xl uppercase">Brands</h3>
                            <ul className="divide-y divide-slate-100 border-t border-slate-100">
                                {brands.map((brand, idx) => (
                                    <li key={idx}>
                                        <button className="w-full flex items-center justify-between py-3 text-slate-700 hover:text-secondary font-bold text-sm transition-colors group">
                                            <span>{brand}</span>
                                            <ChevronRight size={16} className="text-slate-300 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* 3. MAIN CONTENT AREA */}
                    <main className="lg:w-3/4 space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                            {/* Product Images */}
                            <div className="md:w-1/2 space-y-4">
                                <div
                                    className="aspect-square bg-white border-2 border-slate-100 rounded-xl overflow-hidden p-4 shadow-sm cursor-zoom-in relative"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                >
                                    <img
                                        src={mainImage || product.image}
                                        className="w-full h-full object-contain transition-transform duration-200"
                                        style={{
                                            transform: isZoomed ? 'scale(2)' : 'scale(1)',
                                            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                                        }}
                                        alt={product.name}
                                    />
                                    {!isZoomed && (
                                        <div className="absolute bottom-6 right-6 bg-white/80 p-2 rounded-full shadow-md text-secondary">
                                            <Search size={18} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex gap-4">
                                    {product.thumbnails.map((thumb, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setMainImage(thumb)}
                                            className={`w-24 h-24 border-2 rounded-lg overflow-hidden p-2 bg-white cursor-pointer transition-all ${mainImage === thumb ? 'border-secondary shadow-md scale-105' : 'border-slate-100 hover:border-secondary/50'}`}
                                        >
                                            <img src={thumb} className="w-full h-full object-contain" alt="Thumbnail" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Summary & Specs */}
                            <div className="md:w-1/2 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-black text-secondary leading-tight uppercase">{product.name}</h2>
                                    <p className="text-slate-600 font-bold text-sm mt-1">Category : {product.category}</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="border-b-2 border-secondary inline-block pb-1 text-primary font-black text-lg">
                                        Product Specification
                                    </h4>
                                    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-y-4 text-sm md:text-base">
                                        <div className="font-black text-primary uppercase">COMPANY :</div>
                                        <div className="font-bold text-slate-600 uppercase">{product.company}</div>

                                        <div className="font-black text-primary uppercase">MODEL NAME/NUMBER :</div>
                                        <div className="font-bold text-slate-600 uppercase">{product.model}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Section */}
                        <div className="border-t border-slate-100 pt-8">
                            <div className="flex border-b border-slate-100">
                                {['Description', 'Brochures'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-8 py-3 font-bold text-sm md:text-base border-t border-x rounded-t-lg transition-colors -mb-[1px] ${activeTab === tab
                                            ? 'bg-white border-slate-100 text-secondary border-t-2 border-t-secondary'
                                            : 'bg-slate-50 border-transparent text-slate-500 hover:text-primary'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="py-8">
                                {activeTab === 'Description' ? (
                                    <div className="space-y-6">
                                        <h4 className="text-primary font-black text-xl">Product Description:</h4>
                                        <div className="space-y-4">
                                            {product.description.slice(0, 2).map((para, i) => (
                                                <p key={i} className="text-slate-600 font-medium leading-relaxed">
                                                    {para}
                                                </p>
                                            ))}
                                            <ul className="space-y-3 pt-2">
                                                {product.description.slice(2).map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                                        <ChevronRight size={18} className="text-secondary shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-4">
                                        <button className="flex items-center gap-3 bg-white border-2 border-slate-100 px-6 py-4 rounded-xl hover:border-secondary hover:text-secondary group transition-all">
                                            <FileText className="text-secondary" />
                                            <div className="text-left">
                                                <p className="font-black text-primary group-hover:text-secondary text-sm uppercase">Technical Brochure</p>
                                                <p className="text-xs text-slate-500 font-bold uppercase">PDF Format (4.2 MB)</p>
                                            </div>
                                            <Download size={18} className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* QUICK CONTACT STRIP */}
            <section className="bg-primary py-12 md:py-16 mt-20">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase">Ready to get started?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/get-quote" className="bg-secondary text-white px-10 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-secondary-dark transition-colors shadow-lg shadow-secondary/20">
                            Get A Quote
                        </Link>
                        <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
