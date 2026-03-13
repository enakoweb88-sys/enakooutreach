import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { School, ChevronDown, Menu, X, Heart, Globe, Award, Users, BookOpen, GraduationCap } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        {
            name: 'Programs',
            href: '/programs',
            isMega: true,
            dropdown: [
                {
                    title: 'Our Focus Areas',
                    items: [
                        { name: 'Scholarships', href: '/programs/scholarships', icon: <GraduationCap className="w-5 h-5" />, desc: 'Supporting academic excellence' },
                        { name: 'Teacher Awards', href: '/programs/teacher-awards', icon: <Award className="w-5 h-5" />, desc: 'Honoring education leaders' },
                        { name: 'Community Dev', href: '/programs/community-dev', icon: <Globe className="w-5 h-5" />, desc: 'Sustainable infrastructure' },
                        { name: 'Orphanage Support', href: '/programs/orphanage-support', icon: <Heart className="w-5 h-5" />, desc: 'Care for the vulnerable' },
                    ]
                },
                {
                    title: 'Strategic Goals',
                    items: [
                        { name: 'Impact Report', href: '/impact', icon: <BookOpen className="w-5 h-5" />, desc: 'Measure our success' },
                        { name: 'Success Stories', href: '/stories', icon: <Users className="w-5 h-5" />, desc: 'Voices of transformation' },
                        { name: 'School Registration', href: '/school-registration', icon: <School className="w-5 h-5" />, desc: 'Join our network' },
                    ]
                }
            ],
            featured: {
                title: 'Featured Initiative',
                name: 'Village Solar Project',
                desc: 'Bringing sustainable power to over 50 rural schools this year.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4'
            }
        },
        { name: 'Blog', href: '/blog' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Contact', href: '/contact' },
    ];

    const isHome = location.pathname === '/';
    // Navbar is transparent only on home when NOT scrolled and menu is closed
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

    return (
        <>
            {/* Fixed Navbar */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent
                        ? 'bg-transparent py-5'
                        : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-navy/5 border-b border-slate-100 py-3'
                    }`}
            >
                <div className="container mx-auto px-5 md:px-10 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <School className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className={`text-xl font-black tracking-tight leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-navy'}`}>
                                Enako
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Outreach
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group/nav"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.href}
                                    className={`px-4 py-2.5 text-sm font-black transition-all duration-300 rounded-xl flex items-center gap-1.5 ${location.pathname === link.href || (link.dropdown && link.dropdown.some(d => d.items.some(i => i.href === location.pathname)))
                                            ? 'text-primary bg-primary/5'
                                            : isTransparent
                                                ? 'text-white/90 hover:text-white hover:bg-white/10'
                                                : 'text-navy hover:text-primary hover:bg-slate-50'
                                        }`}
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {/* Desktop Mega Dropdown */}
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[820px]"
                                        >
                                            <div className="bg-white rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden p-8 flex gap-8">
                                                <div className="flex-grow grid grid-cols-2 gap-8">
                                                    {link.dropdown.map((section) => (
                                                        <div key={section.title} className="space-y-4">
                                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-2">
                                                                {section.title}
                                                            </h4>
                                                            <div className="space-y-1">
                                                                {section.items.map((sub) => (
                                                                    <Link
                                                                        key={sub.name}
                                                                        to={sub.href}
                                                                        className="group/sub flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-all"
                                                                    >
                                                                        <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/sub:bg-primary group-hover/sub:text-white transition-all flex-shrink-0">
                                                                            {sub.icon}
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-navy font-bold text-sm">{sub.name}</div>
                                                                            <div className="text-xs text-slate-400 font-medium">{sub.desc}</div>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {link.featured && (
                                                    <div className="w-72 p-5 bg-slate-50 rounded-2xl flex flex-col gap-4 flex-shrink-0">
                                                        <div className="h-36 rounded-xl overflow-hidden shadow-md">
                                                            <img src={link.featured.image} alt={link.featured.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">{link.featured.title}</span>
                                                            <h5 className="text-navy font-bold text-base mt-1">{link.featured.name}</h5>
                                                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{link.featured.desc}</p>
                                                        </div>
                                                        <Link to="/impact" className="mt-auto flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform">
                                                            Learn More <Globe className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side: Donate + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/donate"
                            className={`hidden sm:flex items-center justify-center rounded-2xl h-11 px-7 font-black text-sm tracking-wide transition-all duration-300 ${isTransparent
                                    ? 'bg-white text-primary hover:bg-slate-50 hover:scale-105'
                                    : 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95'
                                }`}
                        >
                            Donate
                        </Link>

                        {/* Mobile Hamburger — positioned naturally in header */}
                        <button
                            className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 active:scale-90 ${isTransparent && !isMobileMenuOpen
                                    ? 'text-white bg-white/15 border border-white/30'
                                    : 'text-navy bg-slate-100 border border-slate-200'
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Portal */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-[55]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Slide-in Panel */}
                        <motion.nav
                            key="panel"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                            className="fixed right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white z-[60] flex flex-col shadow-[-30px_0_60px_-10px_rgba(10,15,44,0.12)]"
                        >
                            {/* Panel Header */}
                            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                                        <School className="w-5 h-5" />
                                    </div>
                                    <span className="text-navy font-black text-lg">Enako <span className="text-primary">Outreach</span></span>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-navy"
                                    aria-label="Close Menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 overflow-y-auto px-5 py-4">
                                {navLinks.map((link, idx) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <div className="mb-1">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="w-full text-left text-navy text-lg font-black py-3.5 px-4 flex items-center justify-between rounded-2xl hover:bg-slate-50 transition-colors"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-slate-400 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="mx-2 mb-2 bg-slate-50 rounded-2xl p-4 space-y-4">
                                                                {link.dropdown.map((section) => (
                                                                    <div key={section.title}>
                                                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3">{section.title}</p>
                                                                        <div className="space-y-1">
                                                                            {section.items.map((sub) => (
                                                                                <Link
                                                                                    key={sub.name}
                                                                                    to={sub.href}
                                                                                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white transition-colors group"
                                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                                >
                                                                                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                                                                                        {sub.icon}
                                                                                    </div>
                                                                                    <div>
                                                                                        <p className="text-navy font-bold text-sm">{sub.name}</p>
                                                                                        <p className="text-slate-400 text-xs">{sub.desc}</p>
                                                                                    </div>
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className={`flex items-center justify-between py-3.5 px-4 rounded-2xl mb-1 text-lg font-black transition-colors ${location.pathname === link.href
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-navy hover:bg-slate-50'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                                <ChevronDown className="-rotate-90 w-5 h-5 text-slate-300" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="p-5 border-t border-slate-100">
                                <Link
                                    to="/donate"
                                    className="flex items-center justify-center w-full h-16 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/25 hover:bg-primary/90 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
