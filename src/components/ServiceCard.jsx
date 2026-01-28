import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, link, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl border border-slate-200 p-8 h-full flex flex-col hover:border-accent/30 hover:shadow-[0_10px_40px_-10px_rgba(0,135,68,0.1)] transition-all duration-500"
        >
            <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors duration-300">
                {title}
            </h3>

            <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-grow">
                {description}
            </p>

            <div className="mt-auto">
                <Link
                    to={link || '#'}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-accent transition-colors duration-300"
                >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>
    );
};

export default ServiceCard;
