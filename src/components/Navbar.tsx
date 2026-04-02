import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Menu, X, Heart, Globe, Award, Users, BookOpen,
    GraduationCap, Droplets, Phone, Mail, Facebook, Twitter,
    Instagram, Linkedin, Youtube, Leaf, HeartHandshake, Zap
} from 'lucide-react';

/* ─── Language Switcher state ─── */
type Lang = 'EN' | 'FR';

/* ─── Nav structure ─── */
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Programs',
        href: '/programs',
        dropdown: [
            {
                title: 'Education',
                items: [
                    {
                        name: 'Scholarships',
                        href: '/programs/scholarships',
                        icon: <GraduationCap className="w-4 h-4" />,
                        desc: 'Primary, Secondary & University',
                        sub: [
                            { name: 'Primary School Support', href: '/programs/scholarships-primary' },
                            { name: 'Secondary School Support', href: '/programs/scholarships-secondary' },
                            { name: 'University Support', href: '/programs/scholarships-university' },
                        ],
                    },
                    {
                        name: 'Teacher Rewards',
                        href: '/programs/teacher-rewards',
                        icon: <Award className="w-4 h-4" />,
                        desc: 'Honouring dedicated educators',
                    },
                    {
                        name: 'Youth Empowerment',
                        href: '/programs/youth-empowerment',
                        icon: <Zap className="w-4 h-4" />,
                        desc: 'Skills & leadership for youth',
                    },
                ],
            },
            {
                title: 'Community & Health',
                items: [
                    {
                        name: 'Clean Water Initiative',
                        href: '/programs/clean-water-initiative',
                        icon: <Droplets className="w-4 h-4" />,
                        desc: 'Safe water for every family',
                    },
                    {
                        name: 'Community Health Support',
                        href: '/programs/community-health-support',
                        icon: <Heart className="w-4 h-4" />,
                        desc: 'Healthcare & medical outreach',
                    },
                    {
                        name: 'Single Mothers Assistance',
                        href: '/programs/single-mothers-assistance',
                        icon: <HeartHandshake className="w-4 h-4" />,
                        desc: 'Support for women & families',
                    },
                ],
            },
        ],
    },
    { name: 'Projects', href: '/impact' },
    { name: 'Focus Communities', href: '/focus-communities' },
    {
        name: 'Blog',
        href: '/blog',
        dropdown: [
            {
                title: 'Articles',
                items: [
                    { name: 'Latest News', href: '/blog/latest-news', icon: <BookOpen className="w-4 h-4" />, desc: 'Breaking stories & updates' },
                    { name: 'Blog Posts', href: '/blog/posts', icon: <Globe className="w-4 h-4" />, desc: 'Insights & community stories' },
                    { name: 'Archives', href: '/blog/archives', icon: <Users className="w-4 h-4" />, desc: 'Past articles & resources' },
                ],
            },
        ],
    },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact Us', href: '/contact' },
];

const socialLinks = [
    { icon: <Facebook className="w-3.5 h-3.5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-3.5 h-3.5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-3.5 h-3.5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-3.5 h-3.5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-3.5 h-3.5" />, href: '#', label: 'YouTube' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSub, setActiveSub] = useState<string | null>(null);
    const [lang, setLang] = useState<Lang>('EN');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSub(null);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

    return (
        <>
            {/* ═══════════════════ FIXED HEADER WRAPPER ═══════════════════ */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-xl shadow-black/10' : ''}`}>

                {/* ── TOP INFO BAR ── */}
                <div className={`bg-green-700 text-white transition-all duration-500 ${isScrolled ? 'h-0 overflow-hidden py-0' : 'py-2'}`}>
                    <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
                        {/* Left: Contact */}
                        <div className="flex items-center gap-5 text-xs font-medium">
                            <a href="tel:+237600000000" className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
                                <Phone className="w-3 h-3" />
                                <span className="hidden sm:inline">+237 600 000 000</span>
                            </a>
                            <a href="mailto:info@enakooutreach.org" className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
                                <Mail className="w-3 h-3" />
                                <span className="hidden md:inline">info@enakooutreach.org</span>
                            </a>
                        </div>

                        {/* Right: Socials + Language */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 mr-2 border-r border-white/20 pr-3">
                                {socialLinks.map((s) => (
                                    <a key={s.label} href={s.href} aria-label={s.label}
                                        className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/20 transition-colors">
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                            {/* Language Switcher */}
                            <div className="flex items-center gap-0.5 bg-white/10 rounded-full p-0.5">
                                {(['EN', 'FR'] as Lang[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLang(l)}
                                        className={`px-3 py-0.5 rounded-full text-[11px] font-bold transition-all ${lang === l ? 'bg-white text-green-700' : 'text-white/80 hover:text-white'}`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── MAIN NAVBAR ── */}
                <header className={`transition-all duration-500 ${isTransparent
                    ? 'bg-transparent py-4'
                    : 'bg-white/98 backdrop-blur-xl border-b border-slate-100 py-0'
                    }`}>
                    <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between" style={{ minHeight: isTransparent ? 'auto' : '80px' }}>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className={`text-lg font-black tracking-tight leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
                                    Enako
                                </h2>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">
                                    Outreach
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden xl:flex items-center gap-0.5">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                    onMouseLeave={() => { setActiveDropdown(null); setActiveSub(null); }}
                                >
                                    <Link
                                        to={link.href}
                                        className={`px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-200 rounded-xl flex items-center gap-1 whitespace-nowrap ${location.pathname === link.href ||
                                            (link.dropdown && link.dropdown.some(d => d.items.some(i => i.href === location.pathname)))
                                            ? 'text-green-600 bg-green-50'
                                            : isTransparent
                                                ? 'text-white/90 hover:text-white hover:bg-white/10'
                                                : 'text-slate-700 hover:text-green-600 hover:bg-green-50'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {/* Mega Dropdown */}
                                    <AnimatePresence>
                                        {link.dropdown && activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                                                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute top-full left-0 pt-3 min-w-[520px]"
                                            >
                                                <div className="bg-white rounded-2xl shadow-2xl shadow-black/15 border border-slate-100 overflow-hidden p-5">
                                                    <div className={`grid gap-6 ${link.dropdown.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                        {link.dropdown.map((section) => (
                                                            <div key={section.title}>
                                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 border-b border-slate-100 pb-2 mb-3">
                                                                    {section.title}
                                                                </h4>
                                                                <div className="space-y-0.5">
                                                                    {section.items.map((sub) => (
                                                                        <div
                                                                            key={sub.name}
                                                                            className="relative"
                                                                            onMouseEnter={() => 'sub' in sub && sub.sub && setActiveSub(sub.name)}
                                                                            onMouseLeave={() => setActiveSub(null)}
                                                                        >
                                                                            <Link
                                                                                to={sub.href}
                                                                                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-green-50 transition-all"
                                                                            >
                                                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all flex-shrink-0">
                                                                                    {sub.icon}
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <div className="flex items-center gap-1">
                                                                                        <span className="text-slate-800 font-semibold text-sm group-hover:text-green-700">{sub.name}</span>
                                                                                        {'sub' in sub && sub.sub && (
                                                                                            <ChevronDown className="w-3 h-3 text-slate-400 -rotate-90" />
                                                                                        )}
                                                                                    </div>
                                                                                    <div className="text-xs text-slate-400">{sub.desc}</div>
                                                                                </div>
                                                                            </Link>
                                                                            {/* Sub-dropdown */}
                                                                            <AnimatePresence>
                                                                                {'sub' in sub && sub.sub && activeSub === sub.name && (
                                                                                    <motion.div
                                                                                        initial={{ opacity: 0, x: 8 }}
                                                                                        animate={{ opacity: 1, x: 0 }}
                                                                                        exit={{ opacity: 0, x: 8 }}
                                                                                        transition={{ duration: 0.18 }}
                                                                                        className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2 z-10"
                                                                                    >
                                                                                        {sub.sub.map((s) => (
                                                                                            <Link
                                                                                                key={s.name}
                                                                                                to={s.href}
                                                                                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-green-50 hover:text-green-700 text-sm text-slate-700 font-medium transition-colors"
                                                                                            >
                                                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                                                                                {s.name}
                                                                                            </Link>
                                                                                        ))}
                                                                                    </motion.div>
                                                                                )}
                                                                            </AnimatePresence>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        {/* Right: Donate + Hamburger */}
                        <div className="flex items-center gap-3">
                            <Link
                                to="/donate"
                                className={`hidden sm:flex items-center justify-center rounded-xl h-11 px-6 font-bold text-sm tracking-wide transition-all duration-300 ${isTransparent
                                    ? 'bg-white text-green-700 hover:bg-green-50 hover:scale-105'
                                    : 'bg-green-600 text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:scale-105 active:scale-95'
                                    }`}
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Donate
                            </Link>

                            <button
                                className={`xl:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 active:scale-90 ${isTransparent && !isMobileMenuOpen
                                    ? 'text-white bg-white/15 border border-white/30'
                                    : 'text-slate-700 bg-slate-100 border border-slate-200'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isMobileMenuOpen ? (
                                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <X className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <Menu className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {/* ═══════════════════ MOBILE MENU ═══════════════════ */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            key="panel"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                            className="fixed right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white z-[60] flex flex-col shadow-2xl"
                        >
                            {/* Panel Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-green-600">
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white">
                                        <Leaf className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-white font-black text-base block leading-none">Enako</span>
                                        <span className="text-green-200 text-[10px] font-bold uppercase tracking-widest">Outreach</span>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/15 text-white"
                                    aria-label="Close Menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Contact bar */}
                            <div className="flex items-center gap-4 px-6 py-3 bg-green-50 border-b border-green-100 text-xs text-green-700 font-medium">
                                <a href="tel:+237600000000" className="flex items-center gap-1.5">
                                    <Phone className="w-3 h-3" />+237 600 000 000
                                </a>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 overflow-y-auto px-4 py-4">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <div className="mb-1">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="w-full text-left text-slate-800 text-base font-semibold py-3 px-4 flex items-center justify-between rounded-xl hover:bg-green-50 transition-colors"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-slate-400 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.22 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="mx-2 mb-2 bg-slate-50 rounded-xl p-3 space-y-3">
                                                                {link.dropdown.map((section) => (
                                                                    <div key={section.title}>
                                                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-2">{section.title}</p>
                                                                        <div className="space-y-0.5">
                                                                            {section.items.map((sub) => (
                                                                                <div key={sub.name}>
                                                                                    <Link
                                                                                        to={sub.href}
                                                                                        className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white transition-colors"
                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                    >
                                                                                        <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-green-600 flex-shrink-0">
                                                                                            {sub.icon}
                                                                                        </div>
                                                                                        <span className="text-slate-700 font-semibold text-sm">{sub.name}</span>
                                                                                    </Link>
                                                                                    {'sub' in sub && sub.sub && (
                                                                                        <div className="ml-10 space-y-0.5 mt-0.5">
                                                                                            {sub.sub.map((s) => (
                                                                                                <Link
                                                                                                    key={s.name}
                                                                                                    to={s.href}
                                                                                                    className="flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-green-50 text-slate-500 text-xs font-medium transition-colors"
                                                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                                                >
                                                                                                    <span className="w-1 h-1 rounded-full bg-green-400" />
                                                                                                    {s.name}
                                                                                                </Link>
                                                                                            ))}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
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
                                                className={`flex items-center justify-between py-3 px-4 rounded-xl mb-1 text-base font-semibold transition-colors ${location.pathname === link.href
                                                    ? 'text-green-600 bg-green-50'
                                                    : 'text-slate-800 hover:bg-slate-50'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                                <ChevronDown className="-rotate-90 w-4 h-4 text-slate-300" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Language + Donate CTA */}
                            <div className="p-5 border-t border-slate-100 space-y-3">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xs text-slate-400 font-medium">Language:</span>
                                    {(['EN', 'FR'] as Lang[]).map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => setLang(l)}
                                            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${lang === l ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-600 border-slate-200 hover:border-green-400'}`}
                                        >
                                            {l}
                                        </button>
                                    ))}
                                </div>
                                <Link
                                    to="/donate"
                                    className="flex items-center justify-center gap-2 w-full h-14 bg-green-600 text-white font-bold text-base rounded-xl shadow-lg shadow-green-600/25 hover:bg-green-700 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Heart className="w-5 h-5" /> Donate Now
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
