import { Link } from 'react-router-dom';
import { GraduationCap, Award, Globe, Heart, ArrowRight, Droplets, HeartHandshake, Zap } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const programs = [
    {
        id: '01',
        name: 'Scholarships',
        desc: 'Full and partial scholarships for primary, secondary, and university students from low-income families across Cameroon.',
        icon: <GraduationCap className="w-7 h-7" />,
        href: '/programs/scholarships',
        image: '/assets/images/scholarship-success.png',
        color: 'from-blue-500 to-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        id: '02',
        name: 'Clean Water Initiative',
        desc: 'Installing boreholes, water purification systems and sanitation infrastructure in water-scarce communities.',
        icon: <Droplets className="w-7 h-7" />,
        href: '/programs/clean-water-initiative',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80',
        color: 'from-cyan-500 to-cyan-600',
        lightColor: 'bg-cyan-50',
        textColor: 'text-cyan-600',
    },
    {
        id: '03',
        name: 'Teacher Rewards',
        desc: 'Recognising and rewarding dedicated teachers with financial grants and professional development across all regions.',
        icon: <Award className="w-7 h-7" />,
        href: '/programs/teacher-rewards',
        image: '/assets/images/teacher-excellence.png',
        color: 'from-amber-500 to-orange-500',
        lightColor: 'bg-amber-50',
        textColor: 'text-amber-600',
    },
    {
        id: '04',
        name: 'Community Health Support',
        desc: 'Mobile health clinics, medication supply, and preventive care campaigns reaching thousands of families quarterly.',
        icon: <Heart className="w-7 h-7" />,
        href: '/programs/community-health-support',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
        color: 'from-red-500 to-red-600',
        lightColor: 'bg-red-50',
        textColor: 'text-red-600',
    },
    {
        id: '05',
        name: 'Single Mothers Assistance',
        desc: 'Empowering single mothers and widows with micro-grants, skills training, trauma support, and childcare assistance.',
        icon: <HeartHandshake className="w-7 h-7" />,
        href: '/programs/single-mothers-assistance',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
        color: 'from-purple-500 to-purple-600',
        lightColor: 'bg-purple-50',
        textColor: 'text-purple-600',
    },
    {
        id: '06',
        name: 'Youth Empowerment',
        desc: 'Leadership training, vocational skills, and entrepreneurship programmes for youth aged 15–35 across Cameroon.',
        icon: <Zap className="w-7 h-7" />,
        href: '/programs/youth-empowerment',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
        color: 'from-green-500 to-green-600',
        lightColor: 'bg-green-50',
        textColor: 'text-green-600',
    },
];

const ProgramsGrid = () => {
    return (
        <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <FadeIn direction="right" className="max-w-xl">
                        <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What We Do</span>
                        <h2 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Our Programs
                            <span className="block text-green-600">in Cameroon</span>
                        </h2>
                    </FadeIn>
                    <FadeIn direction="left" className="max-w-sm">
                        <p className="text-slate-500 text-lg leading-relaxed mb-6">
                            Six targeted programs designed to create lasting change in the communities that need it most.
                        </p>
                        <Link to="/programs" className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:gap-4 transition-all">
                            View All Programs <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeIn>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, i) => (
                        <FadeIn key={program.id} delay={i * 0.08} direction="up">
                            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                                <Link
                                    to={program.href}
                                    className="group relative flex flex-col rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-500 h-full"
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={program.image} alt={program.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                                        {/* Number badge */}
                                        <span className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-xs font-black">
                                            {program.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className={`w-12 h-12 rounded-2xl ${program.lightColor} ${program.textColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            {program.icon}
                                        </div>
                                        <h3 className="text-slate-900 text-xl font-black mb-2 group-hover:text-green-700 transition-colors">
                                            {program.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{program.desc}</p>
                                        <span className={`inline-flex items-center gap-2 ${program.textColor} font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all`}>
                                            Explore Program <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsGrid;
