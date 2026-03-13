import { Link } from 'react-router-dom';
import { GraduationCap, Award, Globe, Heart, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const programs = [
    {
        id: "01",
        name: "Scholarships for Students",
        desc: "Providing financial support and critical resources to empower the next generation of African leaders through higher education access.",
        icon: <GraduationCap className="w-8 h-8" />,
        href: "/programs/scholarships",
        image: "/assets/images/scholarship-success.png"
    },
    {
        id: "02",
        name: "Teacher Excellence Awards",
        desc: "Recognizing and rewarding outstanding educators who demonstrate commitment to student success and pedagogical innovation.",
        icon: <Award className="w-8 h-8" />,
        href: "/programs/teacher-awards",
        image: "/assets/images/teacher-excellence.png"
    },
    {
        id: "03",
        name: "Community Development",
        desc: "Investing in sustainable infrastructure and local initiatives to foster long-term growth within rural African communities.",
        icon: <Globe className="w-8 h-8" />,
        href: "/programs/community-dev",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA"
    },
    {
        id: "04",
        name: "Orphanage Support",
        desc: "Ensuring vulnerable children receive the care, nutrition, and educational foundation they need to thrive in a safe environment.",
        icon: <Heart className="w-8 h-8" />,
        href: "/programs/orphanage-support",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4"
    }
];

const ProgramsGrid = () => {
    return (
        <section className="bg-transparent py-24 px-6 md:px-12 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <FadeIn direction="right" className="max-w-2xl">
                        <span className="text-slate-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Commitment to Change</span>
                        <h2 className="text-navy text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
                            Strategic <br />
                            <span className="text-primary italic">Transformation</span> Programs
                        </h2>
                    </FadeIn>
                    <FadeIn direction="left" className="max-w-sm">
                        <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                            We are dedicated to creating sustainable impact through targeted educational and social initiatives designed to empower local communities.
                        </p>
                        <div className="flex w-20 h-2 bg-navy rounded-full"></div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {programs.map((program, i) => (
                        <FadeIn key={program.id} delay={i * 0.1} direction="up">
                            <Link to={program.href} className="group relative flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-white border border-slate-100/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all duration-700 h-full overflow-hidden">
                                {/* Translucent Number */}
                                <div className="absolute -top-4 -right-4 text-[12rem] font-black text-navy/[0.03] leading-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-8">
                                    {program.id}
                                </div>

                                <div className="relative z-10 w-full md:w-2/5 aspect-[4/5] rounded-[2rem_8rem_4rem_10rem] overflow-hidden shadow-premium transform group-hover:-rotate-2 transition-transform duration-1000 border border-slate-100/50">
                                    <img src={program.image} alt={program.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col justify-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                        {program.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-navy text-2xl font-black leading-tight tracking-tight">{program.name}</h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                                            {program.desc}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-navy font-black text-[10px] uppercase tracking-widest group-hover:gap-5 group-hover:text-primary transition-all">
                                        Explore Details <ArrowRight className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsGrid;
