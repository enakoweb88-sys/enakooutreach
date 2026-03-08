import { Link } from 'react-router-dom';
import { School, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-navy pt-32 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-2xl shadow-primary/20 group-hover:rotate-12 transition-transform">
                                <School className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">Enako Outreach</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter max-w-lg">
                            Building a <span className="text-primary italic">Better Cameroon</span>, One Life at a Time.
                        </h3>
                        <div className="flex gap-6">
                            {[
                                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                                { icon: <Youtube className="w-5 h-5" />, href: "#" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Foundation</h4>
                            <ul className="space-y-4">
                                {['About Us', 'Impact', 'Stories', 'Newsroom'].map((item) => (
                                    <li key={item}>
                                        <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                                            {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Programs</h4>
                            <ul className="space-y-4">
                                {['Scholarships', 'Teacher Awards', 'Communities', 'Orphanages'].map((item) => (
                                    <li key={item}>
                                        <Link to="/programs" className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                                            {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8 col-span-2 md:col-span-1">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Contact</h4>
                            <div className="space-y-4">
                                <p className="text-white text-sm font-medium">Headquarters</p>
                                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                                    Douala, Cameroon<br />
                                    Central Africa
                                </p>
                                <a href="mailto:hello@enako.org" className="block text-primary font-black text-sm hover:underline">hello@enako.org</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">
                        © 2024 Enako Outreach. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                            <a key={item} href="#" className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
