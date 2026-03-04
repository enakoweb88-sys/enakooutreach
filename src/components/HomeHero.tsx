import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const HomeHero = () => {
    return (
        <>
            <main className="relative flex flex-1 items-center justify-center overflow-hidden min-h-[calc(100vh-80px)] xl:min-h-[800px]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy/70 z-10"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4")' }}></div>
                </div>
                <div className="container relative z-20 mx-auto px-6 md:px-12 pt-20 py-20">
                    <div className="max-w-2xl flex flex-col gap-8">
                        <FadeIn delay={0.1} direction="up">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase tracking-widest w-fit">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                Foundation for Change
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} direction="up">
                            <h1 className="text-navy dark:text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                Empowering Futures. <br />
                                <span className="text-primary">Transforming Communities.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="up">
                            <p className="text-navy dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Enako Outreach supports students, rewards educators, and uplifts communities through education and humanitarian action across Africa.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up">
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/donate" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                                    Donate Now
                                </Link>
                                <Link to="/impact" className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-navy dark:border-white text-navy dark:text-white text-base font-bold hover:bg-navy/5 dark:hover:bg-white/5 transition-all">
                                    Explore Our Impact
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5} direction="up">
                            <div className="flex items-center gap-8 pt-10 border-t border-navy dark:border-white">
                                <div className="flex flex-col">
                                    <span className="text-navy dark:text-white text-2xl font-bold">15k+</span>
                                    <span className="text-navy dark:text-slate-400 text-sm font-medium">Students Targeted</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-navy dark:text-white text-2xl font-bold">120+</span>
                                    <span className="text-navy dark:text-slate-400 text-sm font-medium">Schools Planned</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-navy dark:text-white text-2xl font-bold">XAF 2.4M</span>
                                    <span className="text-navy dark:text-slate-400 text-sm font-medium">Funding Goal</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={0.6} direction="left" className="absolute bottom-10 right-10 hidden xl:flex flex-col gap-4 z-20 items-center">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined pl-1">play_arrow</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-navy dark:text-white rotate-90 mt-8 translate-x-2">Watch Film</span>
                </FadeIn>
            </main>

            <section className="bg-white dark:bg-slate-900 py-16 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.2} direction="up" fullWidth>
                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white border border-navy border border-slate-200 dark:border-white flex flex-col gap-4 hover:shadow-xl transition-all h-full">
                                <div className="w-12 h-12 rounded-xl bg-white border border-primary flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">school</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white">Education Goals</h3>
                                <p className="text-navy dark:text-slate-400 text-sm leading-relaxed flex-grow">Providing learning materials and infrastructure to schools in remote areas.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3} direction="up" fullWidth>
                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white border border-navy border border-slate-200 dark:border-white flex flex-col gap-4 hover:shadow-xl transition-all h-full">
                                <div className="w-12 h-12 rounded-xl bg-white border border-green-500 flex items-center justify-center text-green-500">
                                    <span className="material-symbols-outlined text-3xl">verified</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white">Teacher Rewards</h3>
                                <p className="text-navy dark:text-slate-400 text-sm leading-relaxed flex-grow">Incentivizing excellence through professional development and performance-based grants.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up" fullWidth>
                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white border border-navy border border-slate-200 dark:border-white flex flex-col gap-4 hover:shadow-xl transition-all h-full">
                                <div className="w-12 h-12 rounded-xl bg-white border border-primary flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">diversity_3</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white">Community Uplift</h3>
                                <p className="text-navy dark:text-slate-400 text-sm leading-relaxed flex-grow">Sustainable solar power and clean water initiatives for villages across the region.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHero;
