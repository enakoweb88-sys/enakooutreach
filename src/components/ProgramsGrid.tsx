import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const ProgramsGrid = () => {
    return (
        <>
            <section className="bg-slate-50 dark:bg-slate-900 py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <FadeIn direction="up">
                        <div className="mb-12">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Commitment to Change</span>
                            <h2 className="text-navy dark:text-slate-100 text-4xl font-extrabold mt-2 tracking-tight">Our Programs</h2>
                            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                                We are dedicated to creating sustainable impact across Africa through targeted educational and social initiatives designed to empower local communities.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} direction="up" fullWidth>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <div className="w-14 h-14 bg-white border border-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">school</span>
                                </div>
                                <h3 className="text-navy dark:text-slate-100 text-xl font-bold mb-4">Scholarships for Students</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    Providing financial support and critical resources to empower the next generation of African leaders through higher education access.
                                </p>
                                <Link to="/programs/scholarships" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all mt-auto">
                                    Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} direction="up" fullWidth>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <div className="w-14 h-14 bg-white border border-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">emoji_events</span>
                                </div>
                                <h3 className="text-navy dark:text-slate-100 text-xl font-bold mb-4">Teacher Excellence Awards</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    Recognizing and rewarding outstanding educators who demonstrate commitment to student success and pedagogical innovation.
                                </p>
                                <Link to="/programs/teacher-awards" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all mt-auto">
                                    Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="up" fullWidth>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <div className="w-14 h-14 bg-white border border-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">location_city</span>
                                </div>
                                <h3 className="text-navy dark:text-slate-100 text-xl font-bold mb-4">Community Development</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    Investing in sustainable infrastructure and local initiatives to foster long-term growth within rural African communities.
                                </p>
                                <Link to="/programs/community-dev" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all mt-auto">
                                    Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" fullWidth>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                <div className="w-14 h-14 bg-white border border-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white">volunteer_activism</span>
                                </div>
                                <h3 className="text-navy dark:text-slate-100 text-xl font-bold mb-4">Orphanage Support</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                    Ensuring vulnerable children receive the care, nutrition, and educational foundation they need to thrive in a safe environment.
                                </p>
                                <Link to="/programs/orphanage-support" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all mt-auto">
                                    Learn More <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 lg:px-20 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <FadeIn direction="right" className="lg:w-1/2 w-full">
                        <div className="aspect-video w-full rounded-2xl bg-slate-200 overflow-hidden relative">
                            <img alt="Impactful humanitarian work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMGcVwFYUe-lACRbwLg0aey91CJPqM5sShYGA6Brmd7AF8A3O3pqIqyqsw6PpZL4bMXokYm7yttOMQvGY7329YvjfhuKxkzc5V2TKdpKMg4dNUqJ6NbjVIcbp2Aq3OTaC8R9qshcngnhqImNqTMkIfRCo5AEEsxzi6vE8xfcTba9Ngm9D46GlrEvP5yhE8_eb3MR6oaAambK6lQ2oofxonzNahHWUbNWxz9CvfXwxZ06k4okzg8ExCUuv4PrzqD1wjYCrgLK2Zc" />
                            <div className="absolute inset-0 bg-navy  "></div>
                            <div className="absolute bottom-6 left-6 text-white text-left">
                                <p className="text-xl font-bold">Goal: 50,000 Lives Targeted</p>
                                <p className="text-sm ">Annual report 2023 summary</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" className="lg:w-1/2 w-full">
                        <h2 className="text-navy dark:text-slate-100 text-3xl font-extrabold mb-6">Our work is guided by transparency and radical empathy.</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                            We believe that by providing the right tools—education, infrastructure, and healthcare—communities can build their own prosperous futures. Every donation goes directly toward our program execution.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <p className="text-primary text-3xl font-extrabold">92%</p>
                                <p className="text-slate-500 text-sm font-medium">Funds to programs</p>
                            </div>
                            <div>
                                <p className="text-primary text-3xl font-extrabold">12</p>
                                <p className="text-slate-500 text-sm font-medium">Countries active</p>
                            </div>
                        </div>
                        <Link to="/impact" className="inline-block bg-navy dark:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-navy transition-all text-center">
                            Read Our Impact Report
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
};

export default ProgramsGrid;
