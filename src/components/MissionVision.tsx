import FadeIn from './FadeIn';

const MissionVision = () => {
    return (
        <section className="bg-background-light flex flex-col items-center px-6 py-16 md:px-20 lg:px-40">
            {/* Header */}
            <FadeIn direction="up">
                <div className="max-w-4xl text-center mb-16">
                    <span className="text-primary font-semibold tracking-widest uppercase text-xs">Our Purpose</span>
                    <h2 className="text-navy tracking-tight text-4xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
                        Building a Legacy of Hope in Africa
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        We are dedicated to long-term sustainable growth by addressing the core pillars of community development and educational excellence.
                    </p>
                </div>
            </FadeIn>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px]">
                {/* Mission */}
                <FadeIn direction="up" fullWidth>
                    <div className="group bg-white rounded-xl border border-slate-200 p-10 flex flex-col items-start shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 h-full">
                        <div className="mb-8 p-4 rounded-2xl bg-white border border-primary text-primary">
                            <span className="material-symbols-outlined text-4xl">target</span>
                        </div>
                        <h3 className="text-navy text-3xl font-bold mb-6">Our Mission</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            To empower African communities by providing sustainable access to quality education, essential resources, and innovative development programs. We strive to foster an environment where local leaders can drive long-term growth and prosperity from within.
                        </p>
                        <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                            <ul className="space-y-3">
                                {['Equitable Resource Distribution', 'Sustainable Education Models'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                {/* Vision */}
                <FadeIn direction="up" delay={0.2} fullWidth>
                    <div className="group bg-white rounded-xl border border-slate-200 p-10 flex flex-col items-start shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300 h-full">
                        <div className="mb-8 p-4 rounded-2xl bg-white border border-green-500 text-green-500">
                            <span className="material-symbols-outlined text-4xl">visibility</span>
                        </div>
                        <h3 className="text-navy text-3xl font-bold mb-6">Our Vision</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            A future where every child in Africa has the opportunity to reach their full potential through world-class education and comprehensive community support. We envision a continent thriving with innovation, equity, and self-sufficient local economies.
                        </p>
                        <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                            <ul className="space-y-3">
                                {['100% Literacy and Literacy Access', 'Innovation Hubs for Youth'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                        <span className="material-symbols-outlined text-green-500 text-lg">stars</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Community image */}
            <FadeIn direction="up" className="w-full max-w-5xl">
                <div className="mt-20 w-full h-64 rounded-2xl overflow-hidden relative shadow-inner">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc1JcXtKDNQV5qEdW6xfvhZCw3J3IQ31IqldJEQyBh2MmkpFrTNH9wC3i5XWZ7Gl1ZeWbztEjm1PphirlSbZbsaKtMNDmQ9FRITrqdKIo7j3e6BC0EsyBM08Tm7dDlL7IMBAjtxrIX5ZOmpfq0RdWQe40cI0CHCNLgAUQuGpnWK0cg5iy_W-kpxXq07OXBrjWF-T7vqc6I4d1gARE7MEbAc63-15U2Ex0aoK1jQri2OxOhwwXNSOHQjCX7WjOXNFvobV1SR2M7-LE"
                        alt="African community gathering"
                        className="w-full h-full object-cover  grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-navy   " />
                </div>
            </FadeIn>
        </section>
    );
};

export default MissionVision;
