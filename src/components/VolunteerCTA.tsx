import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';

const VolunteerCTA = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left: Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <FadeIn direction="right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="material-symbols-outlined text-sm">group</span>
                            Community First
                        </div>
                        <h2 className="text-navy text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mt-6">
                            Join the Movement. <br />
                            <span className="text-primary">Make a Difference.</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mt-6">
                            Your time and talent can change the course of a child's future. Join our global network of volunteers and help us build stronger communities across Africa.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                to="/volunteer"
                                className="flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                            >
                                Become a Volunteer
                            </Link>
                            <Link
                                to="/impact"
                                className="flex items-center justify-center gap-2 rounded-xl h-14 px-8 border-2 border-slate-200 text-slate-700 text-base font-bold hover:bg-slate-50 transition-all"
                            >
                                <span className="material-symbols-outlined">play_circle</span>
                                See Our Impact
                            </Link>
                        </div>
                        {/* Trust stats */}
                        <div className="pt-8 mt-4 flex items-center gap-10 border-t border-slate-100">
                            {[
                                { value: '500+', label: 'Active Volunteers' },
                                { value: '12', label: 'Countries Reached' },
                                { value: '10k+', label: 'Lives Target' },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col">
                                    <span className="text-2xl font-bold text-navy">{s.value}</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Right: Image with overlay */}
                <div className="w-full lg:w-1/2 relative group">
                    <FadeIn direction="left" delay={0.2}>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white border border-primary rounded-full blur-3xl group-hover:bg-white border border-primary transition-all" />
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-navy/5 rounded-full blur-3xl" />
                        <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
                                alt="Volunteers with children"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white backdrop-blur-md p-6 rounded-xl border border-white shadow-xl hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-300" />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-navy">"The best decision I've made."</p>
                                        <p className="text-xs text-slate-500">— Sarah J., Volunteer since 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default VolunteerCTA;
