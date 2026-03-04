import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImpactPage = () => {
    const stats = [
        { icon: 'school', value: '5,000+', label: 'Students Supported' },
        { icon: 'domain', value: '120+', label: 'Schools Target' },
        { icon: 'workspace_premium', value: '850+', label: 'Teachers Rewarded' },
        { icon: 'volunteer_activism', value: '45+', label: 'Communities Helped' },
    ];
    const milestones = [
        { year: 'Phase 1', title: 'Foundation Establishment', desc: 'Enako Outreach launches with its first strategic school partnerships.' },
        { year: 'Phase 2', title: 'Scholarship Launch', desc: 'Targeting higher education access for students in underserved communities.' },
        { year: 'Phase 3', title: 'Continental Scale', desc: 'Goal to operate in 12 countries with 15,000+ targeted beneficiaries.' },
    ];
    const dashboardStats = [
        { label: 'Schools Planned', value: '120', suffix: '+' },
        { label: 'Students Sponsored', value: '5,000', suffix: '+' },
        { label: 'Teachers Awarded', value: '850', suffix: '+' },
        { label: 'Countries Active', value: '12', suffix: '' },
    ];
    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <Navbar />
            <main className="flex-grow">
                {/* HERO */}
                <section className="relative w-full min-h-[65vh] flex flex-col items-start justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-navy    z-10" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA"
                            alt="Impact scene"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full pt-32 pb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">Measurable Change</span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                            Driving Real Progress<br /><span className="text-primary">Across the Continent</span>
                        </h1>
                        <p className="text-slate-200 text-lg max-w-xl leading-relaxed">
                            Our data-driven approach ensures every resource reaches the communities that need it most.
                        </p>
                        {/* Floating stats strip */}
                        <div className="flex gap-10 mt-12 border-t border-white pt-10">
                            {[{ v: '12k+', l: 'Lives Touched' }, { v: '45', l: 'Communities' }, { v: '89%', l: 'Success Rate' }].map((s) => (
                                <div key={s.l}>
                                    <p className="text-primary text-3xl font-black">{s.v}</p>
                                    <p className="text-white text-xs uppercase tracking-widest font-semibold">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KPI STATS */}
                <section className="py-20 px-6 lg:px-20 bg-background-light text-center">
                    <div className="max-w-7xl mx-auto">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">Our Numbers</span>
                        <h2 className="text-navy text-4xl md:text-5xl font-black mb-12">Our Impact in Numbers</h2>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col items-center gap-4 px-4">
                                        <span className="material-symbols-outlined text-primary text-5xl">{stat.icon}</span>
                                        <span className="text-navy text-4xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* TIMELINE */}
                <section className="py-20 px-6 lg:px-20 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">Our Journey</span>
                            <h2 className="text-navy text-4xl font-black">Our Story of Growth</h2>
                        </div>
                        <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />
                            <div className="space-y-12">
                                {milestones.map((item) => (
                                    <div key={item.year} className="flex gap-8 pl-14 relative">
                                        <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                                            {item.year.slice(2)}
                                        </div>
                                        <div className="flex-1 pb-12">
                                            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-1">{item.year}</p>
                                            <h3 className="text-navy text-xl font-black mb-2">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* IMPACT DASHBOARD */}
                <section className="py-20 px-6 lg:px-20 bg-navy">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/2">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-4">Live Dashboard</span>
                                <h2 className="text-white text-4xl font-black mb-4">Our Impact Dashboard</h2>
                                <p className="text-slate-400 leading-relaxed mb-8">Track how your contributions are making a difference across Africa in real time.</p>
                                <div className="grid grid-cols-2 gap-6">
                                    {dashboardStats.map((d) => (
                                        <div key={d.label} className="bg-white/5 border border-white rounded-xl p-6 text-center">
                                            <p className="text-primary text-4xl font-black">{d.value}{d.suffix}</p>
                                            <p className="text-white text-sm mt-1 uppercase tracking-widest font-semibold">{d.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Chart visualization */}
                            <div className="lg:w-1/2 bg-white/5 border border-white rounded-2xl p-8">
                                <p className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Program Distribution</p>
                                {[
                                    { label: 'Scholarships', pct: 40, color: 'bg-primary' },
                                    { label: 'Teacher Awards', pct: 25, color: 'bg-primary' },
                                    { label: 'Community Dev', pct: 22, color: 'bg-primary' },
                                    { label: 'Orphanage Support', pct: 13, color: 'bg-primary' },
                                ].map((bar, i) => (
                                    <div key={bar.label} className="mb-4">
                                        <div className="flex justify-between text-white text-xs mb-1">
                                            <span>{bar.label}</span>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                {bar.pct}%
                                            </motion.span>
                                        </div>
                                        <div className="w-full bg-white/10 border border-white/20 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                className={`${bar.color} h-2.5 rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${bar.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ANNUAL REPORTS */}
                <section className="py-20 px-6 lg:px-20 bg-background-light">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Transparency</span>
                                <h2 className="text-navy text-3xl font-black">Organization Prospectus</h2>
                            </div>
                            <Link to="/impact" className="inline-flex items-center gap-2 text-primary font-bold text-sm">
                                View All Reports <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {['2024-2025 Strategic Plan', 'Organization Prospectus'].map((title) => (
                                <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white border border-primary rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <p className="text-navy font-black">{title}</p>
                                            <p className="text-slate-500 text-sm">Enako Outreach Foundation</p>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 h-10 border-2 border-primary rounded-lg text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-base">download</span> Download PDF
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ImpactPage;
