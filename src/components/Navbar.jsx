import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Industries', path: '/industries' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-2'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="group">
                    <img
                        src="/src/assets/logo.png"
                        alt="Alliance Healthcare"
                        className={clsx(
                            "w-auto object-contain transition-all duration-300 group-hover:scale-105",
                            scrolled ? "h-14" : "h-20"
                        )}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-accent relative py-1",
                                location.pathname === link.path ? "text-accent font-semibold" : "text-slate-600"
                            )}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-sm font-medium">
                        <Phone size={18} />
                        <span>(123) 456-7890</span>
                    </a>
                    <Link to="/contact" className="btn btn-primary text-sm py-2 px-5">
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-base font-medium py-2 border-b border-slate-50",
                                location.pathname === link.path ? "text-accent" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-3">
                        <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-600 justify-center py-2">
                            <Phone size={18} />
                            <span>(123) 456-7890</span>
                        </a>
                        <Link to="/contact" className="btn btn-primary w-full justify-center">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
