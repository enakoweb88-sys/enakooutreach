import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';

const StoryHighlight = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-background-light overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Community Voices</span>
                        <h2 className="text-navy text-4xl font-black">Stories of Impact</h2>
                    </div>
                </FadeIn>
                <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/2 h-72 lg:h-auto w-full">
                        <FadeIn direction="right" className="h-full">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf36m3k6OIJWgQJnMGVHWXJXz5cQVL1FU4mVwbkZ5l0IJarktCFr78ZR2kFmSnxpLVENEXKCAzIinLHE3H4oJFe6MmOPVzf9Sik8nUO7XFujIqsGExm87DQ6IYXM45-r69fvInAFBKOgXq11jSQyWEiNlqZIPMDGjG3dHfzJG7HiwNHQsD_FdNQRIKQ3jVvAbfG4Nxq-bxOK6GRatjfJbshyF7L44Q1JjqjCiQE5QAIHXRXjhUjQAOa9cE2-vn2LOqAYlDCvPOkE"
                                alt="Student success"
                                className="w-full h-full object-cover"
                            />
                        </FadeIn>
                    </div>
                    {/* Content */}
                    <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-navy text-white w-full">
                        <FadeIn direction="left" delay={0.2}>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase mb-6 w-fit">
                                Student Success
                            </span>
                            <blockquote className="text-xl font-medium leading-relaxed mb-6 italic text-slate-200">
                                "When I was selected as the top student in my district, I never imagined it would open doors I had only dreamed of. The Enako Outreach scholarship didn't just pay my fees — it changed my entire family's trajectory."
                            </blockquote>
                            <p className="text-primary font-bold">Abena Osei · Scholarship Recipient</p>
                            <p className="text-slate-400 text-sm mb-8">Ghana, 2023</p>
                            <Link to="/stories" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all w-fit">
                                Read more stories <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoryHighlight;
