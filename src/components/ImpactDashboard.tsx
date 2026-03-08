import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { School, Award, Globe, CheckCircle2, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import FadeIn from './FadeIn';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
    const numericValue = parseInt(value.replace(/,/g, ''));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const spring = useSpring(0, { stiffness: 40, damping: 20 });
    const displayValue = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (inView) {
            spring.set(numericValue);
        }
    }, [inView, numericValue, spring]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ImpactDashboard: React.FC = () => {
    const stats = [
        { label: "Partner Schools", value: "5", icon: <School className="w-8 h-8" />, trend: "Active" },
        { label: "Planned Beneficiaries", value: "15,000", icon: <Award className="w-8 h-8" />, trend: "Goal" },
        { label: "Support Communities", value: "12", icon: <Globe className="w-8 h-8" />, trend: "Phase 1" },
        { label: "Inaugural Charity", value: "1", icon: <CheckCircle2 className="w-8 h-8" />, trend: "Upcoming" }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-navy relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
                    <FadeIn direction="right" className="max-w-2xl text-center lg:text-left">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">Cameroon Humanitarian Impact</span>
                        <h2 className="text-white text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
                            Measurable <br />
                            <span className="text-primary italic">Change</span> in Real-Time
                        </h2>
                    </FadeIn>
                    <FadeIn direction="left" className="max-w-md text-center lg:text-left">
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Transparency is the bedrock of our foundation. We track every initiative with surgical precision to ensure maximum impact for every community we touch.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
                    {stats.map((stat, i) => (
                        <FadeIn key={stat.label} direction="up" delay={i * 0.1}>
                            <div className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary transition-all duration-700 text-center overflow-hidden">
                                <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-primary/10 transition-colors duration-700">
                                    <PieChart className="w-32 h-32" />
                                </div>
                                <div className="mb-8 p-4 rounded-2xl bg-white/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 inline-flex">
                                    {stat.icon}
                                </div>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <span className="text-white text-6xl font-black tracking-tighter">
                                        <Counter value={stat.value} suffix="+" />
                                    </span>
                                </div>
                                <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black italic">
                                    <TrendingUp className="w-3 h-3" /> {stat.trend} Growth
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <FadeIn direction="right">
                        <div className="relative p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-2xl overflow-hidden h-full">
                            <div className="flex items-start justify-between mb-12">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest">
                                        <BarChart3 className="w-4 h-4" /> Impact Scaling
                                    </div>
                                    <h3 className="text-navy text-4xl font-black tracking-tight leading-none">Annual Support Growth</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-primary text-5xl font-black">+45%</p>
                                    <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest italic">Exceptional Performance</p>
                                </div>
                            </div>

                            <div className="flex items-end justify-between h-64 gap-6 px-4">
                                {[40, 65, 50, 90, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-6 group">
                                        <div className="relative w-full h-full flex items-end">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                className={`w-full rounded-2xl relative transition-all duration-700 ${i === 4 ? 'bg-primary shadow-2xl shadow-primary/40' : 'bg-slate-100 group-hover:bg-slate-200'}`}
                                            >
                                                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-navy/20 font-black text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {height}%
                                                </div>
                                            </motion.div>
                                        </div>
                                        <span className={`text-[10px] font-black tracking-widest uppercase ${i === 4 ? 'text-primary' : 'text-slate-400'}`}>202{i}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left">
                        <div className="relative p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-2xl overflow-hidden h-full flex flex-col">
                            <div className="flex items-start justify-between mb-12">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest">
                                        <Globe className="w-4 h-4" /> Regional Reach
                                    </div>
                                    <h3 className="text-navy text-4xl font-black tracking-tight leading-none">Operational Health</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-navy text-5xl font-black">98%</p>
                                    <p className="text-primary text-[10px] font-black uppercase tracking-widest italic tracking-tighter">Efficiency Target Met</p>
                                </div>
                            </div>

                            <div className="flex-grow flex items-center justify-center p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <div className="w-full max-w-sm aspect-square relative flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border-[20px] border-slate-200" />
                                    <svg className="w-full h-full -rotate-90">
                                        <motion.circle
                                            cx="50%" cy="50%" r="45%"
                                            fill="none"
                                            stroke="currentColor"
                                            className="text-primary"
                                            strokeWidth="20"
                                            strokeDasharray="100 100"
                                            initial={{ strokeDashoffset: 100 }}
                                            whileInView={{ strokeDashoffset: 2 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                            strokeLinecap="round"
                                            style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
                                        />
                                    </svg>
                                    <div className="absolute text-center">
                                        <span className="text-5xl font-black text-navy block tracking-tighter">98.4%</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Survival Rate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                <span>Infrastructure</span>
                                <div className="h-px bg-slate-100 flex-grow mx-4" />
                                <span>Education</span>
                                <div className="h-px bg-slate-100 flex-grow mx-4" />
                                <span>Health</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ImpactDashboard;
