import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CameroonMap from '../components/CameroonMap';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Users, Droplets, Heart, GraduationCap, HeartHandshake, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';

const regionCards = [
    {
        name: 'Littoral Region',
        city: 'Douala',
        color: 'bg-cyan-500',
        colorLight: 'bg-cyan-50',
        colorText: 'text-cyan-700',
        colorBorder: 'border-cyan-200',
        icon: <Droplets className="w-5 h-5" />,
        tags: ['Clean Water', 'Healthcare', 'Emergency Relief'],
        stat: '12,000+ people served',
        description: 'Delivering clean water systems and mobile healthcare across rapidly growing urban communities.',
    },
    {
        name: 'Centre Region',
        city: 'Yaoundé',
        color: 'bg-blue-500',
        colorLight: 'bg-blue-50',
        colorText: 'text-blue-700',
        colorBorder: 'border-blue-200',
        icon: <GraduationCap className="w-5 h-5" />,
        tags: ['Scholarships', 'School Rehab', 'Teacher Rewards'],
        stat: '800+ students funded',
        description: 'Our scholarship hub supporting students from primary through university level education.',
    },
    {
        name: 'North West Region',
        city: 'Bamenda',
        color: 'bg-orange-500',
        colorLight: 'bg-orange-50',
        colorText: 'text-orange-700',
        colorBorder: 'border-orange-200',
        icon: <AlertTriangle className="w-5 h-5" />,
        tags: ['Emergency Relief', 'Women Support', 'Healthcare'],
        stat: '3,500 families reached',
        description: 'Critical humanitarian assistance for communities facing emergency situations and displacement.',
    },
    {
        name: 'South West Region',
        city: 'Buea',
        color: 'bg-red-500',
        colorLight: 'bg-red-50',
        colorText: 'text-red-700',
        colorBorder: 'border-red-200',
        icon: <AlertTriangle className="w-5 h-5" />,
        tags: ['Emergency Relief', 'Clean Water', 'School Rehab'],
        stat: '5 schools rehabilitated',
        description: 'Emergency response and infrastructure restoration across communities in Buea and surroundings.',
    },
    {
        name: 'West Region',
        city: 'Bafoussam',
        color: 'bg-purple-500',
        colorLight: 'bg-purple-50',
        colorText: 'text-purple-700',
        colorBorder: 'border-purple-200',
        icon: <HeartHandshake className="w-5 h-5" />,
        tags: ['Women Empowerment', 'Scholarships', 'Healthcare'],
        stat: '400+ women empowered',
        description: 'Our flagship women and single mothers programme with micro-grants and skills training.',
    },
];

const interventionTypes = [
    { icon: <Droplets className="w-6 h-6" />, label: 'Clean Water Access', count: '18 boreholes drilled', color: 'text-cyan-600 bg-cyan-100' },
    { icon: <Heart className="w-6 h-6" />, label: 'Healthcare Outreach', count: '14 mobile clinics', color: 'text-red-600 bg-red-100' },
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Education Support', count: '1,200 scholarships', color: 'text-blue-600 bg-blue-100' },
    { icon: <HeartHandshake className="w-6 h-6" />, label: 'Women & Mothers', count: '600 beneficiaries', color: 'text-purple-600 bg-purple-100' },
    { icon: <Users className="w-6 h-6" />, label: 'Community Relief', count: '8,000 families', color: 'text-orange-600 bg-orange-100' },
];

const FocusCommunities = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative pt-40 pb-24 bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <FadeIn direction="up">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                            <MapPin className="w-3.5 h-3.5" /> Cameroon Focus Regions
                        </span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.0] tracking-tight mb-6 max-w-4xl">
                            Where We Work
                            <span className="block text-green-400">Across Cameroon</span>
                        </h1>
                        <p className="text-slate-300 text-xl font-medium max-w-2xl leading-relaxed mb-10">
                            From Douala's coast to the highlands of Bafoussam, Enako Outreach brings targeted humanitarian programs to the communities that need it most.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/donate" className="flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30">
                                <Heart className="w-4 h-4" /> Support a Region
                            </Link>
                            <Link to="/contact" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                                Partner With Us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── KEY STATS ── */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {interventionTypes.map((item) => (
                            <FadeIn key={item.label} direction="up">
                                <div className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-all duration-300 group">
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div className="font-black text-slate-900 text-sm mb-0.5">{item.count}</div>
                                    <div className="text-slate-500 text-xs font-medium">{item.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTERACTIVE MAP ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Map */}
                        <FadeIn direction="right">
                            <div>
                                <span className="text-green-600 font-bold text-xs uppercase tracking-widest block mb-3">Interactive Map</span>
                                <h2 className="text-slate-900 font-black text-3xl md:text-4xl mb-3">
                                    Click to Explore Our Regions
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    Click any marker on the map to see what programs are active in that region. Use the filter buttons to overlay a heatmap of our focus areas.
                                </p>
                                <CameroonMap />
                            </div>
                        </FadeIn>

                        {/* Right: What we do */}
                        <FadeIn direction="left">
                            <div className="space-y-5">
                                <span className="text-green-600 font-bold text-xs uppercase tracking-widest block">Types of Intervention</span>
                                <h2 className="text-slate-900 font-black text-3xl md:text-4xl mb-6">
                                    How We Help Communities
                                </h2>
                                {[
                                    { icon: <Droplets className="w-5 h-5 text-cyan-600" />, title: 'Clean Water Support', desc: 'We fund, drill, and maintain boreholes and water purification systems in water-scarce communities.' },
                                    { icon: <Heart className="w-5 h-5 text-red-600" />, title: 'Healthcare Assistance', desc: 'Mobile clinics, medication supply, and preventive health campaigns reach thousands quarterly.' },
                                    { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, title: 'Scholarship Support', desc: 'Full and partial scholarships for primary, secondary, and university students across Cameroon.' },
                                    { icon: <HeartHandshake className="w-5 h-5 text-purple-600" />, title: 'Women & Single Mothers', desc: 'Micro-grants, skills training, trauma support, and childcare assistance for vulnerable women.' },
                                    { icon: <Users className="w-5 h-5 text-green-600" />, title: 'School Rehabilitation', desc: 'Rebuilding classrooms, providing furniture, books, and equipping school labs for better learning.' },
                                    { icon: <AlertTriangle className="w-5 h-5 text-orange-600" />, title: 'Emergency Relief', desc: 'Rapid response food packages, shelter support, and displacement assistance for crisis-affected families.' },
                                ].map((item) => (
                                    <motion.div
                                        key={item.title}
                                        whileHover={{ x: 4 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group cursor-default"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── REGION CARDS ── */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <FadeIn direction="up" className="text-center mb-14">
                        <span className="text-green-600 font-bold text-xs uppercase tracking-widest block mb-3">Our Regions</span>
                        <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">Focus Communities</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Each region has a tailored intervention approach based on community needs and resources.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regionCards.map((region, i) => (
                            <FadeIn key={region.name} direction="up" delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className={`bg-white rounded-3xl border ${region.colorBorder} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500`}
                                >
                                    {/* Card Header */}
                                    <div className={`${region.colorLight} p-6 border-b ${region.colorBorder}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl ${region.color} text-white flex items-center justify-center`}>
                                                {region.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-black text-slate-900 text-base">{region.name}</h3>
                                                <div className={`flex items-center gap-1 text-xs font-semibold ${region.colorText}`}>
                                                    <MapPin className="w-3 h-3" />{region.city}
                                                </div>
                                            </div>
                                        </div>
                                        <p className={`text-xs font-bold ${region.colorText} flex items-center gap-1.5`}>
                                            <CheckCircle className="w-3.5 h-3.5" /> {region.stat}
                                        </p>
                                    </div>
                                    {/* Card Body */}
                                    <div className="p-6">
                                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{region.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {region.tags.map((tag) => (
                                                <span key={tag} className={`px-2.5 py-1 ${region.colorLight} ${region.colorText} text-[10px] font-bold rounded-full border ${region.colorBorder}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-white font-black text-4xl md:text-5xl mb-6">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
                            Partner with us to expand our reach across Cameroon. Every contribution helps a community.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/donate" className="bg-white text-green-700 font-bold px-10 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-xl">
                                Donate to a Region
                            </Link>
                            <Link to="/contact" className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors">
                                Report a Community Need
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FocusCommunities;
