import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: 'The Future of AI in Diagnostic Imaging',
            date: 'January 10, 2026',
            summary: 'How artificial intelligence is revolutionizing the speed and accuracy of radiology...',
            category: 'Technology'
        },
        {
            title: 'Maintenance Best Practices for ICU Equipment',
            date: 'December 15, 2025',
            summary: 'A guide to extending the lifespan of critical care devices through preventive maintenance...',
            category: 'Maintenance'
        },
        {
            title: 'Alliance Healthcare Expands to Western Region',
            date: 'November 20, 2025',
            summary: 'We are proud to announce the opening of our new support center in Pokhara...',
            category: 'Company News'
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-primary py-16 lg:py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & News</h1>
                    <p className="text-xl text-slate-300">Latest updates from the world of healthcare technology.</p>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-12">
                        {posts.map((post, index) => (
                            <article key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
                                <div className="md:w-3/4">
                                    <span className="text-accent text-sm font-semibold uppercase tracking-wide mb-2 block">{post.category}</span>
                                    <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                                        <Link to="#">{post.title}</Link>
                                    </h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{post.summary}</p>
                                    <p className="text-slate-400 text-sm">{post.date}</p>
                                </div>
                                <div className="md:w-1/4 flex items-center justify-end w-full">
                                    <Link to="#" className="btn btn-outline text-sm px-6">Read More</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
