import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const VolunteerCTA = () => {
    return (
        <section className="py-24 px-6 md:px-16 bg-transparent overflow-hidden relative">
            {/* Ghost text */}
            <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none overflow-hidden select-none">
                <span className="text-[15vw] font-black text-slate-50 tracking-tighter whitespace-nowrap">Join</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Circular image with decorative shapes */}
                    <FadeIn direction="right">
                        <div className="relative flex items-center justify-center">
                            {/* Yellow/green decorative blob */}
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
                            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-100 blur-2xl" />

                            {/* Circular photo */}
                            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(10,15,44,0.15)] border-4 border-white z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=700&auto=format&fit=crop&q=80"
                                    alt="Volunteer with children"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8';
                                    }}
                                />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                                className="absolute bottom-8 -right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 z-20"
                            >
                                <p className="text-navy font-black text-2xl">500+</p>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Active Volunteers</p>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* RIGHT — Form / CTA area */}
                    <FadeIn direction="left" delay={0.2}>
                        {/* Ghost heading behind */}
                        <div className="relative">
                            <span className="absolute -top-8 right-0 text-[8rem] font-black text-slate-50 tracking-tighter leading-none pointer-events-none select-none">
                                Join
                            </span>

                            <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-3 relative">
                                Community First
                            </p>

                            <h2 className="text-navy text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 relative">
                                Join the <span className="text-primary italic">Movement.</span>
                            </h2>

                            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md relative">
                                Let's take Cameroon's education and humanitarian mission to the next level — together. Share your skills and change a child's future.
                            </p>

                            {/* Mini form */}
                            <div className="space-y-4 mb-8 relative">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full px-5 py-4 border border-slate-200 rounded-2xl text-navy font-medium placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="w-full px-5 py-4 border border-slate-200 rounded-2xl text-navy font-medium placeholder-slate-400 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                                <textarea
                                    placeholder="How would you like to help? ..."
                                    rows={3}
                                    className="w-full px-5 py-4 border border-slate-200 rounded-2xl text-navy font-medium placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                                />
                            </div>

                            <div className="flex flex-wrap gap-4 relative">
                                <button className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/30">
                                    Get in Touch <ArrowRight className="w-4 h-4" />
                                </button>
                                <Link
                                    to="/volunteer"
                                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-navy text-navy font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-navy hover:text-white transition-all"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default VolunteerCTA;
