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

    return (
        <header
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled || !isHome
                ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-navy/5 border-b border-white py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <School className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className={`text-2xl font-black tracking-tight leading-none transition-colors duration-500 ${isScrolled || !isHome ? 'text-navy' : 'text-white'}`}>
                            Enako
                        </h2>
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled || !isHome ? 'text-primary' : 'text-primary'}`}>
                            Outreach
                        </span>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group/nav"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={link.href}
                                className={`px-5 py-3 text-sm font-black transition-all duration-300 rounded-xl flex items-center gap-2 ${location.pathname === link.href || (link.dropdown && link.dropdown.some(d => d.items.some(i => i.href === location.pathname)))
                                    ? 'text-primary bg-primary/5'
                                    : (isScrolled || !isHome ? 'text-navy hover:text-primary hover:bg-slate-50' : 'text-white/90 hover:text-white hover:bg-white/10')
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            <AnimatePresence>
                                {link.dropdown && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[850px]"
                                    >
                                        <div className="bg-white rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden p-8 flex gap-10">
                                            <div className="flex-grow grid grid-cols-2 gap-10">
                                                {link.dropdown.map((section) => (
                                                    <div key={section.title} className="space-y-6">
                                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-2">
                                                            {section.title}
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {section.items.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    to={sub.href}
                                                                    className="group/sub flex items-start gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-all"
                                                                >
                                                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/sub:bg-primary group-hover/sub:text-white transition-all">
                                                                        {sub.icon}
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-navy font-bold">{sub.name}</div>
                                                                        <div className="text-xs text-slate-400 font-medium">{sub.desc}</div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {link.featured && (
                                                <div className="w-80 p-6 bg-slate-50 rounded-2xl flex flex-col gap-4">
                                                    <div className="h-40 rounded-xl overflow-hidden shadow-lg shadow-navy/10">
                                                        <img src={link.featured.image} alt={link.featured.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{link.featured.title}</span>
                                                        <h5 className="text-navy font-bold text-lg mt-1">{link.featured.name}</h5>
                                                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{link.featured.desc}</p>
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

                <div className="flex items-center gap-4">
                    <Link
                        to="/donate"
                        className={`hidden sm:flex min-w-[140px] items-center justify-center rounded-2xl h-12 px-8 font-black tracking-wide transition-all duration-300 ${isScrolled || !isHome
                            ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105 active:scale-95'
                            : 'bg-white text-primary hover:bg-slate-50 hover:scale-105 active:scale-95'
                            }`}
                    >
                        Donate
                    </Link>
                    <button
                        className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-90 z-[70] ${isScrolled || !isHome || isMobileMenuOpen
                            ? 'text-navy bg-slate-100'
                            : 'text-white bg-white/10 backdrop-blur-md border border-white/20'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overhaul */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 top-0 bg-white z-[60] p-8 flex flex-col pt-24"
                    >
                        <div className="flex flex-col gap-4 overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-slate-50 last:border-none">
                                    {link.dropdown ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                className="text-navy text-2xl font-black py-4 flex items-center justify-between group w-full text-left"
                                            >
                                                {link.name}
                                                <ChevronDown className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : '-rotate-90'} text-slate-300 group-hover:text-primary`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 bg-slate-50/50 rounded-2xl"
                                                    >
                                                        {link.dropdown.map((section) => (
                                                            <div key={section.title} className="py-4 last:pb-8">
                                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">
                                                                    {section.title}
                                                                </h4>
                                                                <div className="flex flex-col gap-4">
                                                                    {section.items.map((sub) => (
                                                                        <Link
                                                                            key={sub.name}
                                                                            to={sub.href}
                                                                            className="flex items-center gap-4 py-2"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                                                                {sub.icon}
                                                                            </div>
                                                                            <span className="text-navy font-bold text-lg">{sub.name}</span>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="text-navy text-2xl font-black py-4 flex items-center justify-between group"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            <ChevronDown className="-rotate-90 text-slate-200 group-hover:text-primary" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/donate"
                                className="mt-8 flex items-center justify-center rounded-3xl h-20 bg-primary text-white font-black text-2xl shadow-2xl shadow-primary/30"
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
