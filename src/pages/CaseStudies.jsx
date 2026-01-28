import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const CaseStudies = () => {
    const projects = [
        {
            title: 'National Cardiac Centre Modernization',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
            client: 'National Medical College',
            desc: 'End-to-end upgrade of the Cardiac Care Unit with state-of-the-art Cath Labs and patient monitoring systems.',
            tags: ['Turnkey Project', 'Medical Equipment']
        },
        {
            title: 'District Hospital HIS Implementation',
            image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=600',
            client: 'District Health Office',
            desc: 'Digitizing patient records and hospital workflows for a 100-bed government hospital.',
            tags: ['Healthcare IT', 'Software']
        },
        {
            title: 'Advanced Diagnostic Lab Setup',
            image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600',
            client: 'City Diagnostic Chain',
            desc: 'Installation of fully automated biochemistry and hematology analyzers for high-throughput testing.',
            tags: ['Diagnostics', 'Laboratory']
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-primary py-16 lg:py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
                    <p className="text-xl text-slate-300">Success stories from our partners.</p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="h-56 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="p-8">
                                    <div className="flex gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                                    <p className="text-sm font-medium text-slate-500 mb-4">{project.client}</p>
                                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.desc}</p>
                                    <Link to="/contact" className="text-accent font-medium text-sm hover:underline">
                                        Read Full Story &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
