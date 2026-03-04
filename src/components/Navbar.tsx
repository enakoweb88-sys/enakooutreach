import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Programs',
            href: '/programs',
            dropdown: [
                { name: 'Overview', href: '/programs' },
                { name: 'Scholarships', href: '/programs/scholarships' },
                { name: 'Teacher Awards', href: '/programs/teacher-awards' },
                { name: 'Community Dev', href: '/programs/community-dev' },
                { name: 'Orphanage Support', href: '/programs/orphanage-support' },
            ]
        },
        { name: 'Impact', href: '/impact' },
        { name: 'Stories', href: '/stories' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Donate', href: '/donate' },
        { name: 'Register School', href: '/school-registration' },
    ];

    const isHome = location.pathname === '/';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ease-in-out ${isScrolled || !isHome
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <Link to="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">school</span>
                </div>
                <h2 className={`text-xl font-extrabold tracking-tight transition-colors duration-500 ${isScrolled || !isHome ? 'text-navy' : 'text-white'}`}>
                    Enako Outreach
                </h2>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <div
                        key={link.name}
                        className="relative group/nav"
                        onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <Link
                            to={link.href}
                            className={`text-sm font-bold transition-all duration-300 flex items-center gap-1 py-2 ${location.pathname === link.href || (link.dropdown && link.dropdown.some(d => d.href === location.pathname))
                                ? 'text-primary'
                                : (isScrolled || !isHome ? 'text-slate-600' : 'text-white/90')
                                } hover:text-primary`}
                        >
                            {link.name}
                            {link.dropdown && (
                                <span className="material-symbols-outlined text-sm transition-transform group-hover/nav:rotate-180">expand_more</span>
                            )}
                        </Link>

                        <AnimatePresence>
                            {link.dropdown && activeDropdown === link.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                                >
                                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden min-w-[200px] p-2">
                                        {link.dropdown.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                to={sub.href}
                                                className="block px-4 py-3 text-sm font-semibold text-navy hover:bg-slate-50 hover:text-primary rounded-xl transition-colors"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                <Link
                    to="/donate"
                    className={`hidden sm:flex min-w-[120px] items-center justify-center rounded-full h-11 px-6 font-bold tracking-wide transition-all ${isScrolled || !isHome
                            ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105'
                            : 'bg-white text-primary hover:bg-slate-50 hover:scale-105'
                        }`}
                >
                    Donate Now
                </Link>
                <button
                    className={`lg:hidden p-2 transition-colors ${isScrolled || !isHome ? 'text-navy' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 top-0 bg-white z-[60] p-6 flex flex-col pt-24"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <Link
                                        to={link.href}
                                        className="text-navy text-xl font-black py-4 border-b border-slate-50 flex items-center justify-between"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        {link.dropdown && <span className="material-symbols-outlined">chevron_right</span>}
                                    </Link>
                                </div>
                            ))}
                            <Link
                                to="/donate"
                                className="mt-8 flex items-center justify-center rounded-2xl h-16 bg-primary text-white font-black text-xl shadow-xl shadow-primary/30"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Donate Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
