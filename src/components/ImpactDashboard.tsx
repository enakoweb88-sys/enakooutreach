import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
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
        { label: "Students Supported", value: "12,500", icon: "school", trend: "+12%" },
        { label: "Teachers Rewarded", value: "450", icon: "emoji_events", trend: "+8%" },
        { label: "Communities Helped", value: "85", icon: "location_city", trend: "+15%" },
        { label: "Projects Completed", value: "120", icon: "fact_check", trend: "+20%" }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <FadeIn direction="up">
                    <div className="w-full text-center mb-20 space-y-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary text-primary text-xs font-bold uppercase tracking-widest">Global Humanitarian Impact</span>
                        <h2 className="text-navy dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
                            Our Real-World <span className="text-primary italic">Change</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Transparency is at the heart of our mission. Every contribution fuels measurable progress in education and community development across Africa.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <FadeIn key={stat.label} direction="up" delay={i * 0.1}>
                            <div className="group flex flex-col items-center justify-center p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary transition-all duration-300 w-full h-full">
                                <div className="mb-8 text-slate-400 group-hover:text-primary transition-colors transform group-hover:scale-110 duration-300">
                                    <span className="material-symbols-outlined text-6xl">{stat.icon}</span>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="text-navy dark:text-white text-5xl font-black tracking-tighter">
                                        <Counter value={stat.value} suffix="+" />
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                                <span className="mt-4 text-emerald-500 text-xs font-bold bg-white border border-emerald-500 px-2 py-1 rounded-full">{stat.trend} Growth</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Impact Scaling Chart */}
                    <FadeIn direction="right">
                        <div className="flex flex-col gap-8 rounded-3xl bg-white dark:bg-slate-900 p-10 border border-slate-100 dark:border-slate-800 shadow-xl w-full h-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Impact Scaling</p>
                                    <h3 className="text-navy dark:text-white text-3xl font-bold tracking-tight">Annual Support Growth</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-primary text-4xl font-black leading-tight">+45%</p>
                                    <p className="text-emerald-500 text-xs font-bold">+12% vs last year</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between h-56 px-4 pt-10">
                                {[30, 55, 45, 85, 100].map((height, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 w-12 group">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                            className={`w-full rounded-t-xl relative overflow-hidden transition-all duration-500 ${i === 4 ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-white border border-primary'}`}
                                        />
                                        <p className={`text-xs font-bold ${i === 4 ? 'text-navy dark:text-white' : 'text-slate-400'}`}>202{i}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Efficiency Module */}
                    <FadeIn direction="left">
                        <div className="flex flex-col gap-8 rounded-3xl bg-white dark:bg-slate-900 p-10 border border-slate-100 dark:border-slate-800 shadow-xl w-full h-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Operational Health</p>
                                    <h3 className="text-navy dark:text-white text-3xl font-bold tracking-tight">Project Completion Rate</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-secondary text-4xl font-black leading-tight">98%</p>
                                    <p className="text-emerald-500 text-xs font-bold">Optimal Performance</p>
                                </div>
                            </div>
                            <div className="flex-1 min-h-[180px] py-4 flex items-center justify-center">
                                <div className="w-full h-full relative">
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 120">
                                        <defs>
                                            <linearGradient id="impact-gradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            d="M0 100 Q 50 20, 100 70 T 200 40 T 300 90 T 400 20"
                                            stroke="#D4AF37"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeLinecap="round"
                                        />
                                        <motion.path
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.5 }}
                                            d="M0 100 Q 50 20, 100 70 T 200 40 T 300 90 T 400 20 L 400 120 L 0 120 Z"
                                            fill="url(#impact-gradient)"
                                        />
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 2 }}
                                            cx="400" cy="20" r="8" fill="#D4AF37" stroke="white" strokeWidth="3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between mt-auto">
                                {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(month => (
                                    <p key={month} className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">{month}</p>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Regional Impact Map Placeholder */}
                <FadeIn direction="up">
                    <div className="w-full mt-20 relative overflow-hidden rounded-xl bg-navy dark:bg-slate-900 aspect-[21/9] flex items-center justify-center group">
                        <div
                            className="absolute inset-0 grayscale contrast-150 transition-transform duration-1000 group-hover:scale-110"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI36dZk3o8pFm81RpiydOkx4W5qB-beBt6-KaRy0a6iKfXTLJZVG-Nc_-yXlBnJ-b1PuZqmVZ2J4n_T3hBOamL-IC4NjdtAxB6HfS3ijTKY8o134I-SEXe2kRknzxglVcgfTZK Y8o134I-SEXe2kRknzxglVcgfTZKPkBEbde8fDlhiRpwaM4BOul5_n1FJdlv5qIhP3jiQAC6rG_B51VrO9IBA_-qubCAoqImZ_64HTishR5ZZXQFwCf2sHy6jMWiyC4Nsjcfpo4sawTdvatMoF2Avw4zaVnyyupRd8')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                        <div className="relative z-10 text-center px-6">
                            <h3 className="text-white text-3xl font-bold mb-4">Expanding our footprint across the continent</h3>
                            <button className="px-8 py-3 bg-white text-navy font-bold rounded-full hover:bg-primary hover:text-white transition-all transform group-hover:scale-105">View Local Project Details</button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ImpactDashboard;
