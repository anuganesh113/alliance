import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Search,
    ChevronRight,
    ShieldCheck,
    Zap,
    Activity,
    Microscope,
    Cpu,
    CheckCircle2,
    Building2,
    ArrowRight,
    Loader
} from 'lucide-react';

const API_BASE = 'https://alliancehealthcare.anoopinnovations.com/api/v1/front/products';

const iconOptions = [Microscope, Activity, Cpu, Zap, ShieldCheck, Activity, ShieldCheck, Microscope];

const productImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0a60427?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530432999454-015a31a5eb23?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
];

const categoryKeywords = {
    'x-ray': 'Diagnostic Equipment',
    'digital x-ray': 'Diagnostic Equipment',
    'ultrasound': 'Diagnostic Equipment',
    'ecg': 'Medical Devices',
    'ventilator': 'Medical Devices',
    'patient monitor': 'Monitoring & Imaging',
    'infusion pump': 'Medical Devices',
    'defibrillator': 'Medical Devices',
    'surgical microscope': 'Diagnostic Equipment',
    'anesthesia': 'Medical Devices',
    'centrifuge': 'Laboratory Systems',
    'autoclave': 'Laboratory Systems',
    'sterilizer': 'Laboratory Systems',
    'blood gas': 'Laboratory Systems',
};

const assignCategory = (name) => {
    const lower = name.toLowerCase();
    for (const [key, value] of Object.entries(categoryKeywords)) {
        if (lower.includes(key)) return value;
    }
    return 'Medical Devices';
};

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            let allProducts = [];
            let page = 1;
            let hasMore = true;

            while (hasMore) {
                const res = await fetch(`${API_BASE}?per_page=12&page=${page}`);
                const json = await res.json();
                if (json.success && json.data) {
                    allProducts = [...allProducts, ...json.data];
                    hasMore = json.pagination?.has_more_pages || false;
                    page++;
                } else {
                    break;
                }
            }

            const mapped = allProducts.map((p, i) => ({
                id: p.id,
                slug: p.slug,
                name: p.product_name,
                category: p.category || assignCategory(p.product_name),
                image: p.image || productImages[i % productImages.length],
                shortDesc: p.short_desc,
                highlight: p.specifications?.[0]?.details || 'Advanced Technology',
                icon: iconOptions[i % iconOptions.length],
                tag: p.new_arrival ? 'New' : null,
            }));

            setProducts(mapped);
        } catch (err) {
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const categories = [
        'All',
        'Diagnostic Equipment',
        'Medical Devices',
        'Healthcare IT Solutions',
        'Laboratory Systems',
        'Hospital Infrastructure',
        'Monitoring & Imaging'
    ];

    const brands = [
        'PENLON', 'PHILIPS', 'GE HEALTHCARE', 'SIEMENS', 'MINDRAY'
    ];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. DARK HERO SECTION */}
            <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover opacity-30 brightness-50"
                        alt="Hero background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <nav className="flex items-center justify-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
                            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                            <span>//</span>
                            <span className="text-white">Our Products</span>
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
                            Our <span className="text-secondary">Products</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* 2. SIDEBAR */}
                    <aside className="lg:w-1/4 space-y-10">
                        {/* Search Bar */}
                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold text-xl uppercase">Product Search</h3>
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="Search by keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-secondary focus:outline-none transition-all pr-12 text-sm font-medium group-hover:bg-slate-100 hover:border-slate-200"
                                />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-secondary transition-colors" size={20} />
                            </div>
                        </div>

                        {/* Categories List */}
                        <div className="space-y-4">
                            <h3 className="text-secondary font-bold text-xl uppercase">Categories</h3>
                            <ul className="divide-y divide-slate-100 border-t border-slate-100">
                                {categories.map((cat, idx) => (
                                    <li key={idx}>
                                        <button
                                            onClick={() => setActiveCategory(cat)}
                                            className="w-full flex items-center justify-between py-3 text-slate-700 hover:text-secondary font-bold text-sm transition-colors group text-left"
                                        >
                                            <span className={activeCategory === cat ? 'text-secondary font-black' : ''}>{cat.toUpperCase()}</span>
                                            <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${activeCategory === cat ? 'text-secondary translate-x-1' : 'text-slate-300'}`} />
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
                                        <div className="w-full flex items-center justify-between py-3 text-slate-700 hover:text-secondary font-bold text-sm transition-colors group">
                                            <span>{brand}</span>
                                            <ChevronRight size={16} className="text-slate-300 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Contact Box */}
                        <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                            <div className="relative z-10 space-y-6">
                                <Building2 size={32} className="text-secondary" />
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black uppercase">Need Help?</h4>
                                    <p className="text-white/70 text-sm font-medium leading-relaxed">
                                        Speak with our experts for specialized medical equipment solutions.
                                    </p>
                                </div>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl text-sm hover:bg-secondary-light transition-all shadow-lg hover:shadow-secondary/20">
                                    Contact Us
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* 3. MAIN CONTENT AREA */}
                    <main className="lg:w-3/4 space-y-8">
                        {/* Results Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6">
                            <div>
                                <h2 className="text-2xl font-black text-primary uppercase">
                                    {activeCategory === 'All' ? 'All Solutions' : activeCategory}
                                </h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">
                                    {loading ? 'Loading...' : `Found ${filteredProducts.length} Results`}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                                <span>SORT BY:</span>
                                <select className="bg-transparent text-primary focus:outline-none cursor-pointer">
                                    <option>DEFAULT</option>
                                    <option>NAME (A-Z)</option>
                                    <option>NEWEST</option>
                                </select>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                <Loader className="animate-spin text-secondary mb-6" size={48} />
                                <h3 className="text-2xl font-black text-primary uppercase">Loading Products</h3>
                                <p className="text-slate-500 font-bold text-sm mt-2">
                                    Please wait while we fetch the latest products...
                                </p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-400 mx-auto mb-6">
                                    <Search size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-primary uppercase">Something Went Wrong</h3>
                                <p className="text-slate-500 font-bold text-sm mt-2">
                                    {error}
                                </p>
                                <button
                                    onClick={fetchProducts}
                                    className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all uppercase text-xs tracking-widest"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                <AnimatePresence mode="popLayout">
                                    {filteredProducts.map((product) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            key={product.id}
                                            className="group"
                                        >
                                            <Link to={`/products/${product.slug}`} className="block bg-white border-2 border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300">
                                                {/* Image container */}
                                                <div className="aspect-[4/3] relative overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                                                    <img
                                                        src={product.image}
                                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                        alt={product.name}
                                                    />
                                                    {product.tag && (
                                                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                            {product.tag}
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                                                </div>

                                                {/* Content container */}
                                                <div className="p-6 space-y-4">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{product.category}</span>
                                                    </div>
                                                    <h3 className="text-lg font-black text-primary leading-tight uppercase group-hover:text-secondary transition-colors line-clamp-2 min-h-[3.5rem]">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                                                        {product.shortDesc}
                                                    </p>

                                                    <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                                            <CheckCircle2 size={14} className="text-secondary" />
                                                            Technical Specs
                                                        </span>
                                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:translate-x-1">
                                                            <ChevronRight size={18} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {!loading && !error && filteredProducts.length === 0 && (
                            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-6">
                                    <Search size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-primary uppercase">No Results Found</h3>
                                <p className="text-slate-500 font-bold text-sm mt-2">
                                    We couldn't find any products matching your criteria.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                                    className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all uppercase text-xs tracking-widest"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Quick Contact Strip */}
            <section className="bg-slate-50 border-t border-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            { icon: CheckCircle2, label: "Certified Installation" },
                            { icon: Zap, label: "Clinical Training" },
                            { icon: Activity, label: "24/7 Support" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <item.icon className="text-secondary" size={20} />
                                <span className="text-slate-900 font-black text-xs uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
