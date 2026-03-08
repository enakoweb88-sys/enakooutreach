import { Link } from 'react-router-dom';
import { Users, PlayCircle, ArrowRight, Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const VolunteerCTA = () => {
    return (
        <section className="bg-white py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[4rem] bg-navy p-12 md:p-24 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                            <FadeIn direction="right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                                    <Users className="w-3 h-3" /> Community First
                                </div>
                                <h2 className="text-white text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
                                    Join the <br />
                                    <span className="text-primary italic">Movement.</span>
                                </h2>
                                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg mb-12">
                                    Your time and talent can change the course of a child's future. Join our global network of volunteers and build stronger communities.
                                </p>

                                <div className="flex flex-wrap gap-6 items-center">
                                    <Link
                                        to="/volunteer"
                                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-white/5"
                                    >
                                        Apply Now <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        to="/impact"
                                        className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest group"
                                    >
                                        <PlayCircle className="w-8 h-8 group-hover:text-primary transition-colors" />
                                        See Our Impact
                                    </Link>
                                </div>

                                <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                                    {[
                                        { value: '500+', label: 'Active Volunteers' },
                                        { value: '12', label: 'Countries Active' },
                                        { value: '10k+', label: 'Projected Reach' },
                                    ].map((s) => (
                                        <div key={s.label} className="space-y-1">
                                            <p className="text-3xl font-black text-white tracking-tighter">{s.value}</p>
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <FadeIn direction="left" delay={0.2}>
                                <div className="relative">
                                    {/* Abstract Shapes */}
                                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy/20 rounded-full blur-[120px] pointer-events-none" />

                                    <div className="relative aspect-[4/5.5] rounded-[999px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-1000 border-2 border-white/10">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
                                            alt="Volunteers with children"
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 p-10 rounded-[3rem] bg-white shadow-premium backdrop-blur-md w-full max-w-[320px] border border-slate-100 transform -rotate-2 group-hover:rotate-0 transition-all duration-700">
                                            <div className="flex items-center gap-5 mb-4">
                                                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30">
                                                    <Heart className="w-6 h-6 fill-current" />
                                                </div>
                                                <p className="text-navy font-black text-lg italic tracking-tighter leading-none">"Impactful."</p>
                                            </div>
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">— Sarah J., Volunteer</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerCTA;
