import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Award, Globe, ArrowRight, Play, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const HomeHero = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* MAIN HERO SECTION */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy pt-20">
                <div className="absolute inset-0 z-0 text-white">
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4")' }}
                        ></div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10"></div>

                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                </div>

                <div className="container relative z-20 mx-auto px-6 md:px-12 py-24">
                    <div className="max-w-4xl flex flex-col gap-10">
                        <FadeIn delay={0.1} direction="up">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] w-fit shadow-2xl">
                                <Sparkles className="w-3 h-3" /> Foundation for Change
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} direction="up">
                            <h1 className="text-white text-5xl sm:text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter break-words">
                                Empowering <br />
                                <span className="text-primary italic">Futures.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="up">
                            <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl opacity-90">
                                Enako Outreach supports students, rewards educators, and uplifts communities through education and humanitarian action across Cameroon.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up">
                            <div className="flex flex-wrap gap-6 pt-6">
                                <Link to="/donate" className="group relative flex min-w-[200px] items-center justify-center overflow-hidden rounded-2xl h-20 px-10 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                                    Donate Now
                                </Link>
                                <Link to="/impact" className="flex min-w-[200px] items-center justify-center rounded-2xl h-20 px-10 border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all group">
                                    Our Impact <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5} direction="up" className="pt-12">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
                                <div className="space-y-1">
                                    <span className="text-primary text-4xl font-black tracking-tighter block">15k+</span>
                                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Students Targeted</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-primary text-4xl font-black tracking-tighter block">5</span>
                                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Partner Schools</span>
                                </div>
                                <div className="space-y-1 hidden md:block">
                                    <span className="text-primary text-4xl font-black tracking-tighter block">XAF 2.4M</span>
                                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Funding Goal</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Floating Video Link */}
                <FadeIn delay={0.6} direction="left" className="absolute bottom-12 right-12 hidden xl:flex flex-col gap-6 z-20 items-center">
                    <button className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary backdrop-blur-xl hover:bg-primary hover:text-white transition-all duration-500 group shadow-2xl">
                        <Play className="w-6 h-6 fill-current ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 rotate-90 mt-10 origin-center whitespace-nowrap">Watch Film</span>
                </FadeIn>
            </section>

            {/* FEATURES SECTION OVERHAUL */}
            <section className="bg-white py-32 px-6 md:px-12 relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: School, title: "Education Goals", desc: "Providing learning materials and infrastructure to schools in remote areas.", color: "primary" },
                            { icon: Award, title: "Teacher Rewards", desc: "Incentivizing excellence through professional development and performance grants.", color: "primary" },
                            { icon: Globe, title: "Community Uplift", desc: "Sustainable solar power and clean water initiatives for villages across the region.", color: "primary" }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={0.2 + (i * 0.1)} direction="up" fullWidth>
                                <div className="group p-12 rounded-[3rem] bg-slate-50 border border-slate-100/50 flex flex-col gap-8 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-primary/10 transition-colors" />
                                    <div className="w-20 h-20 rounded-2xl bg-white shadow-inner flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                        <feature.icon className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black text-navy tracking-tight">{feature.title}</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed leading-relaxed">{feature.desc}</p>
                                    </div>
                                    <Link to="/programs" className="pt-4 flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                                        Learn More <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
