import { Target, Eye, CheckCircle2, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedNetworkBg from './AnimatedNetworkBg';

const MissionVision = () => {
    return (
        <section className="bg-background-light flex flex-col items-center px-6 py-16 md:px-20 lg:px-40 relative overflow-hidden">
            <AnimatedNetworkBg particleCount={40} />
            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Header */}
                <FadeIn direction="up">
                    <div className="max-w-4xl text-center mb-16">
                        <span className="text-primary font-semibold tracking-widest uppercase text-xs">Our Purpose</span>
                        <h2 className="text-navy tracking-tight text-4xl md:text-5xl font-extrabold leading-tight mt-4 mb-6">
                            Building a Legacy of Hope in Cameroon
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
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-white shadow-soft border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Target className="w-10 h-10" />
                            </div>
                            <h3 className="text-navy text-3xl font-bold mb-6">Our Mission</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                To empower Cameroonian communities by providing sustainable access to quality education, essential resources, and innovative development programs.
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                                <ul className="space-y-3">
                                    {['Equitable Resource Distribution', 'Sustainable Education Models'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
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
                            <div className="mb-8 w-20 h-20 rounded-2xl bg-white shadow-soft border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Eye className="w-10 h-10" />
                            </div>
                            <h3 className="text-navy text-3xl font-bold mb-6">Our Vision</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                A future where every child in Cameroon has the opportunity to reach their full potential through world-class education and comprehensive community support.
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                                <ul className="space-y-3">
                                    {['100% Literacy and Literacy Access', 'Innovation Hubs for Youth'].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Community image section */}
                <FadeIn direction="up" className="w-full max-w-7xl">
                    <div className="mt-20 w-full aspect-[21/9] rounded-[3rem] overflow-hidden relative shadow-soft group">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc1JcXtKDNQV5qEdW6xfvhZCw3J3IQ31IqldJEQyBh2MmkpFrTNH9wC3i5XWZ7Gl1ZeWbztEjm1PphirlSbZbsaKtMNDmQ9FRITrqdKIo7j3e6BC0EsyBM08Tm7dDlL7IMBAjtxrIX5ZOmpfq0RdWQe40cI0CHCNLgAUQuGpnWK0cg5iy_W-kpxXq07OXBrjWF-T7vqc6I4d1gARE7MEbAc63-15U2Ex0aoK1jQri2OxOhwwXNSOHQjCX7WjOXNFvobV1SR2M7-LE"
                            alt="African community gathering"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-all duration-700" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default MissionVision;
