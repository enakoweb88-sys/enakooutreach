import FadeIn from './FadeIn';

const StoriesHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <img
                    alt="African student studying in a modern library"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqT9S4M-N-oFz_Xo_7yF9m_VygUoUrI1Z7IkM_sDz_BR3KBC-Gnc65o12mtb60NNjjsPByYxnYbzgEy1ch2M-pm9scBNvu2Gup85SFJ8pqYdq-6ygE_VrXyswK9MiAzGjck5WqwrId3nm0ScFBKDcebvrW1i-_WfYdceApUE0XRTRRnP8LjTmwZsTivVmLfLssmHH0N0NtOFeoIMoqT4z9_cPOAaiq3keVd9tZBHrgkMYSud-qPHRGnnMcg1-4JgxpRPoeHexmU"
                />
                <div className="absolute inset-0 bg-navy   " />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
                <FadeIn direction="up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="material-symbols-outlined text-sm">auto_stories</span>
                        Human Impact
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter mb-6">
                        Real Stories. <br />
                        <span className="text-primary italic">Real Change.</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto ">
                        Discover the personal journeys of students, teachers, and communities empowered by Enako Outreach.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};

export default StoriesHero;
