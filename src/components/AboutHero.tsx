import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const AboutHero = () => {
    return (
        <>
            {/* Full-bleed Hero */}
            <section className="relative w-full h-[75vh] min-h-[550px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy/60 z-10" />
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9kUuWfv7zSj9R2D_Fh-BHtIEE-Q8Gbc2mSuUzi3IRzYkrx4OX93HEakYZnPAyXgdvtREtt2ObiN-OgDl33rFL7ROPGpSHO3bFlEMuBIyWdctBE2c6BjemwWNGT2OdFgrT3Uqyzh0MMsxDL6js2DCAj-Qv064BAlgUliX5ELN660r1OFPaO7nG88npwpWRqEDc59m0zjc4bZBLGCOpOlHH-sH6rjPMv-ktR5jgExuEH4JgU2UUvL8FGBT5JZtfYqoMF5TvRwwzEBA"
                        alt="African community education"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6 w-full">
                    <FadeIn direction="up" delay={0.1}>
                        {/* Est badge */}
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Est. 2024</span>
                            <span className="h-px w-8 bg-primary" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                            Driven by Purpose.<br />
                            <span className="text-primary">Guided by Impact.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.3}>
                        <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl leading-relaxed mx-auto">
                            Empowering communities and advancing education across Africa through sustainable humanitarian initiatives that foster growth and resilience.
                        </p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                            <Link to="/stories" className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-navy text-base font-bold hover:bg-primary hover:shadow-lg shadow-primary/20 transition-all">
                                Learn Our Story
                            </Link>
                            <Link to="/impact" className="flex items-center justify-center rounded-lg h-14 px-8 border border-white bg-white border border-white text-white backdrop-blur-sm text-base font-bold hover:bg-white border border-white transition-all">
                                Our Impact Report
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Mission block below hero */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-slate-500 text-sm mb-12">
                    <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                        <span className="material-symbols-outlined text-base">home</span> Home
                    </Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-primary font-medium">About Us</span>
                </nav>

                {/* Mission split */}
                <FadeIn direction="up">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            <h4 className="text-primary text-sm font-bold leading-normal tracking-widest uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" /> Our Mission
                            </h4>
                            <h3 className="text-3xl font-bold text-navy leading-tight">
                                Building a foundation for the leaders of tomorrow.
                            </h3>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-slate-600 text-xl font-normal leading-relaxed">
                                Enako Outreach is dedicated to creating lasting change by focusing on grassroots education and holistic community development projects. We believe that sustainable impact starts with listening to local communities and providing them with the tools they need to thrive independently.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* 3 value pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: 'school', title: 'Education First', desc: 'Providing resources and building classrooms to ensure every child has access to quality learning environments.' },
                        { icon: 'volunteer_activism', title: 'Health & Wellness', desc: 'Implementing clean water projects and medical outreach programs to improve community well-being.' },
                        { icon: 'diversity_3', title: 'Local Partnership', desc: 'Working directly with community leaders to design programs that address specific local needs.' },
                    ].map((item, idx) => (
                        <FadeIn key={item.title} delay={idx * 0.1} direction="up" fullWidth>
                            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 transition-transform hover:-translate-y-1 h-full">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{item.icon}</span>
                                <h5 className="text-xl font-bold mb-3 text-navy">{item.title}</h5>
                                <p className="text-slate-500">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AboutHero;
