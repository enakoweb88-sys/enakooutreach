import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft, CheckCircle, Users, Target, ImageIcon } from 'lucide-react';

/* ─── All Programs Data ─── */
const programData: Record<string, {
    title: string;
    subtitle: string;
    category: string;
    color: string;
    lightColor: string;
    textColor: string;
    image: string;
    description: string;
    longDesc: string;
    goals: string[];
    beneficiaries: string[];
    gallery: string[];
    stats: { label: string; value: string }[];
    milestones: { year: string; event: string }[];
}> = {
    'scholarships': {
        title: 'Scholarships Programme',
        subtitle: 'Education for Every Child in Cameroon',
        category: 'Education',
        color: 'bg-blue-600',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        image: '/assets/images/scholarship-success.png',
        description: 'Our flagship scholarship programme provides full-tuition coverage, textbooks, uniforms, and mentorship for high-achieving students from low-income families across Cameroon.',
        longDesc: 'Every talented child in Cameroon deserves the opportunity to pursue their education regardless of their family\'s financial situation. Our scholarship programme removes financial barriers by funding primary, secondary, and university education. We identify top-performing students through partner schools and community nominations, then provide comprehensive support that goes beyond fees to include stationery, uniforms, and access to mentorship networks.',
        goals: [
            'Fund education for 500 new students per academic year',
            'Achieve a 95%+ scholarship holder graduation rate',
            'Partner with 50 schools across 8 regions',
            'Create 100 mentorship pairings with professional alumni',
        ],
        beneficiaries: ['Primary school pupils aged 6–12', 'Secondary school students aged 13–18', 'University students aged 18–25', 'Students from displaced or conflict-affected families'],
        gallery: [
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
            'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
        ],
        stats: [{ label: 'Students Funded', value: '1,200+' }, { label: 'Graduation Rate', value: '97%' }, { label: 'Partner Schools', value: '35+' }],
        milestones: [
            { year: '2025', event: 'Launched with 50 inaugural scholarship recipients across 3 regions.' },
            { year: '2025', event: 'Expanded to cover university-level education in Yaoundé and Douala.' },
            { year: '2026', event: 'Reached 1,200 active scholarship holders across 6 regions.' },
        ],
    },
    'scholarships-primary': {
        title: 'Primary School Support',
        subtitle: 'Building Foundations for the Future',
        category: 'Education',
        color: 'bg-blue-500',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
        description: 'Covering full school fees, uniforms, textbooks, and school supplies for primary school children from families in financial hardship.',
        longDesc: 'Primary education is the critical foundation for lifelong learning. Our primary school support streams ensure that no child is turned away from school due to inability to pay fees. We work with community leaders to identify the most in-need families and provide complete academic packages so children can attend school with dignity.',
        goals: ['Keep 300 primary school children in school each year', 'Provide full stationery kits each term', 'Train supported children in digital literacy basics'],
        beneficiaries: ['Children aged 6–12', 'Orphans and children of single mothers', 'Children in rural and peri-urban areas'],
        gallery: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80'],
        stats: [{ label: 'Children Supported', value: '450+' }, { label: 'Schools Covered', value: '18' }, { label: 'Regions', value: '5' }],
        milestones: [{ year: '2025', event: 'First cohort of 50 primary pupils enrolled.' }, { year: '2026', event: 'Expanded to 450 supported children across 5 regions.' }],
    },
    'scholarships-secondary': {
        title: 'Secondary School Support',
        subtitle: 'Supporting the Critical Teen Years',
        category: 'Education',
        color: 'bg-indigo-600',
        lightColor: 'bg-indigo-50',
        textColor: 'text-indigo-700',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
        description: 'Comprehensive secondary school scholarship covering fees, boarding where needed, textbooks, and exam preparation support for BEPC and GCE candidates.',
        longDesc: 'Secondary school is where many Cameroonian students drop out due to financial pressure — especially when boarding school fees are involved. Our secondary programme provides holistic support including boarding allowances, examination preparation classes, and career guidance to help students make informed choices about higher education.',
        goals: ['Fund 200 secondary students each academic year', 'Achieve 90%+ pass rate for national exams', 'Provide career guidance to all supported students'],
        beneficiaries: ['Students aged 13–18', 'Students in boarding or distant schools', 'First-generation secondary students'],
        gallery: ['https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80'],
        stats: [{ label: 'Students Funded', value: '320+' }, { label: 'Exam Pass Rate', value: '91%' }, { label: 'Boarding Grants', value: '80+' }],
        milestones: [{ year: '2025', event: 'Secondary programme launched with 80 students.' }, { year: '2026', event: '91% national exam pass rate recorded.' }],
    },
    'scholarships-university': {
        title: 'University Support',
        subtitle: 'Fuelling the Next Generation of Leaders',
        category: 'Education',
        color: 'bg-blue-700',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80',
        description: 'University grants covering tuition, accommodation support, and access to professional mentorship networks for high-performing students at Cameroonian universities.',
        longDesc: 'University-level funding is among the most impactful interventions we make. A university-educated graduate changes the trajectory of their entire family. Our university grants are merit-based with financial need priority, covering fees at public and accredited private universities in Cameroon, supplemented by mentorship from professionals in the student\'s field of study.',
        goals: ['Fund 100 university students annually', 'Connect graduates to employment networks', 'Achieve 85%+ graduate employment within 1 year'],
        beneficiaries: ['Undergraduates at Cameroonian universities', 'Students in STEM, Healthcare, Law, and Education fields', 'First-generation university students'],
        gallery: ['https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80'],
        stats: [{ label: 'University Grants', value: '180+' }, { label: 'Graduate Rate', value: '94%' }, { label: 'Employment Rate', value: '87%' }],
        milestones: [{ year: '2025', event: 'First 30 university grants awarded in Yaoundé.' }, { year: '2026', event: '87% employment rate for programme graduates.' }],
    },
    'clean-water-initiative': {
        title: 'Clean Water Initiative',
        subtitle: 'Safe Water for Every Cameroonian Family',
        category: 'Infrastructure',
        color: 'bg-cyan-600',
        lightColor: 'bg-cyan-50',
        textColor: 'text-cyan-700',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80',
        description: 'Drilling boreholes, installing water purification systems, and building sanitation facilities in water-scarce communities across Cameroon.',
        longDesc: 'Access to clean water is a fundamental human right, yet millions of Cameroonians still walk hours daily to collect unsafe water. Our clean water initiative identifies communities with the highest need, funds borehole drilling and pump installation, trains local maintenance committees, and conducts hygiene education to ensure long-term sustainability of each project.',
        goals: ['Install 30 new boreholes by end of 2026', 'Reach 50,000 beneficiaries with clean water', 'Train maintenance committees in 100% of project communities', 'Conduct quarterly water quality testing'],
        beneficiaries: ['Rural households without pipe-borne water', 'Schools lacking safe drinking water', 'Health centres in underserved areas', 'Women who currently carry water over long distances'],
        gallery: ['https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80', 'https://images.unsplash.com/photo-1559131397-f94da358f7ca?w=600&q=80'],
        stats: [{ label: 'Boreholes Drilled', value: '18' }, { label: 'Beneficiaries', value: '28,000+' }, { label: 'Communities', value: '22' }],
        milestones: [
            { year: '2025', event: 'First 5 boreholes drilled in Littoral region.' },
            { year: '2025', event: 'Expanded to South West and North West regions.' },
            { year: '2026', event: '18 boreholes operational serving 28,000+ people.' },
        ],
    },
    'teacher-rewards': {
        title: 'Teacher Rewards Programme',
        subtitle: 'Honouring the Backbone of Education',
        category: 'Education',
        color: 'bg-amber-500',
        lightColor: 'bg-amber-50',
        textColor: 'text-amber-700',
        image: '/assets/images/teacher-excellence.png',
        description: 'Financial grants, professional development, and public recognition for outstanding teachers who go above and beyond for their students in underserved communities.',
        longDesc: 'Teachers are the most powerful force in any education system. In Cameroon, dedicated teachers often work in difficult conditions with minimal resources. Our Teacher Rewards Programme identifies, publicly celebrates, and financially supports exceptional teachers nominated by their school communities. Beyond financial rewards, we fund professional training, provide teaching materials, and create a peer network of excellence.',
        goals: ['Award 150 teachers annually across all 10 regions', 'Provide XAF 500,000 in grants to top 10 teachers', 'Fund professional training for 200 teachers per year', 'Create a national teacher excellence database'],
        beneficiaries: ['Primary and secondary school teachers', 'Teachers in rural and hard-to-reach areas', 'Recently-qualified teachers lacking resources'],
        gallery: ['/assets/images/teacher-excellence.png', 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'],
        stats: [{ label: 'Teachers Awarded', value: '220+' }, { label: 'Regions Covered', value: '8' }, { label: 'Training Hours', value: '3,200+' }],
        milestones: [{ year: '2025', event: 'Inaugural awards ceremony in Yaoundé, 40 teachers honoured.' }, { year: '2026', event: 'Programme expanded to 8 regions, 220 teachers reached.' }],
    },
    'community-health-support': {
        title: 'Community Health Support',
        subtitle: 'Bringing Healthcare Closer to Every Family',
        category: 'Healthcare',
        color: 'bg-red-600',
        lightColor: 'bg-red-50',
        textColor: 'text-red-700',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
        description: 'Mobile health clinics, medication supply campaigns, maternal health programmes, and preventive care outreach for underserved communities.',
        longDesc: 'Quality healthcare remains out of reach for millions of Cameroonians due to distance, cost, and lack of health workers. Our community health programme deploys mobile clinics to underserved areas, staffed by volunteer nurses, doctors, and community health workers. We run malaria prevention, maternal and child health, nutrition, and screening programmes — ensuring every family can access basic healthcare regardless of location or income.',
        goals: ['Deploy 8 mobile clinics across 5 regions', 'Reach 15,000 patients per quarter', 'Train 50 community health workers annually', 'Achieve 80% malaria net coverage in target areas'],
        beneficiaries: ['Pregnant women and new mothers', 'Children under 5', 'Elderly community members', 'Residents more than 5km from the nearest health facility'],
        gallery: ['https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80'],
        stats: [{ label: 'Patients Served', value: '42,000+' }, { label: 'Mobile Clinics', value: '6' }, { label: 'Health Workers Trained', value: '85' }],
        milestones: [{ year: '2025', event: 'First mobile clinic deployed in North West region.' }, { year: '2026', event: '6 clinics active, 42,000+ patients served.' }],
    },
    'single-mothers-assistance': {
        title: 'Single Mothers Assistance',
        subtitle: 'Supporting Women Who Support Families',
        category: 'Social Support',
        color: 'bg-purple-600',
        lightColor: 'bg-purple-50',
        textColor: 'text-purple-700',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
        description: 'Micro-grants, skills training, trauma counselling, childcare support, and livelihood assistance for single mothers and widows across Cameroon.',
        longDesc: 'Single mothers in Cameroon bear immense burdens — raising children alone, often with no income source, no formal education, and no support network. Our programme wraps around each beneficiary: financial micro-grants to start small businesses, practical skills training in tailoring, catering, cosmetology, and agriculture; trauma and psychosocial counselling; and access to childcare to free mothers for training and work. We track outcomes for 12 months post-programme to ensure lasting impact.',
        goals: ['Enrol 200 single mothers and widows annually', 'Achieve 90%+ programme completion rate', 'Support 150 micro-business start-ups per year', 'Establish childcare partnerships in 5 regions'],
        beneficiaries: ['Single mothers with children under 18', 'War widows and conflict-affected women', 'Women who have experienced domestic violence', 'Women with no formal income source'],
        gallery: ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80'],
        stats: [{ label: 'Women Enrolled', value: '480+' }, { label: 'Businesses Started', value: '320+' }, { label: 'Employment Rate', value: '95%' }],
        milestones: [{ year: '2025', event: 'Programme launched in Bafoussam with 60 participants.' }, { year: '2026', event: '480 women enrolled, 95% employment rate recorded.' }],
    },
    'youth-empowerment': {
        title: 'Youth Empowerment',
        subtitle: 'Building the Changemakers of Tomorrow',
        category: 'Youth',
        color: 'bg-green-600',
        lightColor: 'bg-green-50',
        textColor: 'text-green-700',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
        description: 'Leadership development, vocational training, digital skills, and entrepreneurship programmes for young people aged 15–35 across Cameroon.',
        longDesc: 'Youth account for over 60% of Cameroon\'s population yet face high unemployment and limited opportunities. Our Youth Empowerment programme combines leadership training, practical vocational skills (welding, plumbing, ICT, agriculture), digital literacy, and business mentorship with seed funding for promising youth entrepreneurs. We run residential bootcamps, apprenticeships, and ongoing coaching sessions throughout the year.',
        goals: ['Train 300 young people per programme cohort', 'Achieve 70%+ employment or self-employment within 6 months', 'Fund 50 youth businesses with seed grants', 'Build a mentorship network of 200+ professionals'],
        beneficiaries: ['Youth aged 15–35 without formal employment', 'School dropouts seeking vocational paths', 'Young entrepreneurs with business ideas', 'University graduates who are unemployed'],
        gallery: ['https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80'],
        stats: [{ label: 'Youth Trained', value: '650+' }, { label: 'Businesses Funded', value: '95' }, { label: 'Employment Rate', value: '73%' }],
        milestones: [{ year: '2025', event: 'First cohort of 120 youth completed 3-month bootcamp.' }, { year: '2026', event: '650 participants, 95 businesses seeded, 73% employment rate.' }],
    },
};

const ProgramDetailPage = () => {
    const { id } = useParams();
    const program = programData[id as keyof typeof programData];

    if (!program) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-20">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
                            <ImageIcon className="w-10 h-10 text-slate-400" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 mb-3">Programme Not Found</h1>
                        <p className="text-slate-500 mb-6">We couldn't locate this programme. Browse all our programmes below.</p>
                        <Link to="/programs" className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition-colors">
                            View All Programs
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-slate-900/10" />
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16">
                    <FadeIn direction="up">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${program.lightColor} ${program.textColor} mb-4`}>
                            {program.category}
                        </span>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-3">{program.title}</h1>
                        <p className="text-green-300 text-xl font-semibold">{program.subtitle}</p>
                    </FadeIn>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="bg-slate-900 py-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-3 gap-8 divide-x divide-white/10">
                        {program.stats.map((s) => (
                            <div key={s.label} className="text-center px-4">
                                <div className="text-green-400 text-3xl font-black mb-1">{s.value}</div>
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Description ── */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-10">
                            <FadeIn direction="right">
                                <h2 className="text-slate-900 text-3xl font-black mb-4">About This Programme</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">{program.description}</p>
                                <p className="text-slate-500 leading-relaxed">{program.longDesc}</p>
                            </FadeIn>

                            {/* Goals */}
                            <FadeIn direction="up">
                                <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h3 className="text-slate-900 text-xl font-black">Programme Goals</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {program.goals.map((goal, i) => (
                                            <motion.li key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                {goal}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* Beneficiaries */}
                            <FadeIn direction="up">
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
                                            <Users className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <h3 className="text-slate-900 text-xl font-black">Who We Serve</h3>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {program.beneficiaries.map((b, i) => (
                                            <div key={i} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-slate-100">
                                                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                                                <span className="text-slate-600 text-sm font-medium">{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Gallery */}
                            {program.gallery.length > 0 && (
                                <FadeIn direction="up">
                                    <h3 className="text-slate-900 text-xl font-black mb-5">Programme Gallery</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {program.gallery.map((img, i) => (
                                            <motion.div key={i}
                                                className="aspect-square rounded-2xl overflow-hidden"
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ duration: 0.3 }}>
                                                <img src={img} alt={`${program.title} gallery ${i + 1}`} className="w-full h-full object-cover" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </FadeIn>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Timeline */}
                            <FadeIn direction="left">
                                <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-7">
                                    <h3 className="text-slate-900 font-black text-lg mb-6">Milestones</h3>
                                    <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-green-100">
                                        {program.milestones.map((m, i) => (
                                            <div key={i} className="relative pl-10">
                                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-green-600 bg-white flex items-center justify-center">
                                                    <span className="w-2 h-2 rounded-full bg-green-600" />
                                                </div>
                                                <div className="text-green-600 font-black text-xs mb-1 uppercase tracking-widest">{m.year}</div>
                                                <p className="text-slate-600 text-sm font-medium leading-relaxed">{m.event}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Apply / Donate CTA */}
                            <FadeIn direction="left">
                                <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-3xl p-7 text-white">
                                    <h3 className="font-black text-xl mb-3">Apply for Support</h3>
                                    <p className="text-green-100 text-sm leading-relaxed mb-6">
                                        Think you or someone you know qualifies for this programme? Fill in our application form and our team will be in touch.
                                    </p>
                                    <Link to="/contact"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors mb-3 text-sm">
                                        Apply Now
                                    </Link>
                                    <Link to="/donate"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-800/50 text-white border border-white/20 font-bold rounded-xl hover:bg-green-800 transition-colors text-sm">
                                        <Heart className="w-4 h-4" /> Donate to This Programme
                                    </Link>
                                </div>
                            </FadeIn>

                            {/* Partner */}
                            <FadeIn direction="left">
                                <div className="bg-slate-50 rounded-3xl border border-slate-100 p-7">
                                    <h3 className="text-slate-900 font-black text-base mb-3">Partner or Volunteer</h3>
                                    <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                                        Organisations and individuals can partner with us to scale this programme.
                                    </p>
                                    <Link to="/partnership" className="flex items-center justify-center w-full py-3 border-2 border-green-600 text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors text-sm">
                                        Partner With Us
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back nav */}
            <section className="py-10 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <Link to="/programs" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-semibold transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to All Programmes
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProgramDetailPage;
