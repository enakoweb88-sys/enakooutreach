import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const programData = {
    'scholarships': {
        title: 'Academic Scholarship Fund',
        icon: 'school',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf36m3k6OIJWgQJnMGVHWXJXz5cQVL1FU4mVwbkZ5l0IJarktCFr78ZR2kFmSnxpLVENEXKCAzIinLHE3H4oJFe6MmOPVzf9Sik8nUO7XFujIqsGExm87DQ6IYXM45-r69fvInAFBKOgXq11jSQyWEiNlqZIPMDGjG3dHfzJG7HiwNHQsD_FdNQRIKQ3jVvAbfG4Nxq-bxOK6GRatjfJbshyF7L44Q1JjqjCiQE5QAIHXRXjhUjQAOa9cE2-vn2LOqAYlDCvPOkE',
        longDesc: 'Our flagship program provides full-tuition coverage, textbooks, and uniforms for high-achieving students from low-income families. We believe that financial constraints should never be a barrier to academic excellence.',
        stats: [
            { label: 'Students Funded', value: '2,400+' },
            { label: 'Graduation Rate', value: '98%' },
            { label: 'Partner Schools', value: '150+' }
        ],
        milestones: [
            { year: '2021', event: 'Launched with initial 50 students in rural Ghana.' },
            { year: '2022', event: 'Expanded to covers secondary and tertiary education.' },
            { year: '2023', event: 'First cohort of university graduates enters the local workforce.' }
        ]
    },
    'teacher-awards': {
        title: 'Outstanding Teacher Awards',
        icon: 'emoji_events',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFR0QTKvNV4GOw9sX-n_9mIqckE3jMKgSzq08SURTaH69Jp50VgosTp3u5NzSGM2LAHmUvJxjD9oh3-HXPYS2FJyf8PnZg-uJrwFHcGj0F2IFlelkJsmQHOHdr5z69FkIZeLa0B_Jdf1NCHYzJgWZ88hHsjvo1njVNIWxmdFSoepBlKWYnc0z3246U6qDKiYnciWJTU6qjWB8vtjxc-wR4HLEJ0FIxSB2mkHYoc4bssx3EXFa05jY087xbs5V0phA8kPNwb-4Olcw',
        longDesc: 'Recognizing the backbone of education. We provide financial grants and professional development opportunities to teachers who go above and beyond for their students in underserved communities.',
        stats: [
            { label: 'Teachers Awarded', value: '450+' },
            { label: 'Regions Covered', value: '12' },
            { label: 'Training Hours', value: '5,000+' }
        ],
        milestones: [
            { year: '2021', event: 'Inaugural ceremony honoring 20 local educators.' },
            { year: '2022', event: 'Introduced the Excellence in Rural Education grant.' },
            { year: '2023', event: 'Partnership with Ministry of Education for teacher certification.' }
        ]
    },
    'community-dev': {
        title: 'Community Development',
        icon: 'location_city',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqUI7Nsy_NUrIR9ucG4uQxu06L2x_jP-BNwRSTUDZ-ZeTonML2YpUc2eU_mZfgqvDY1keTRrrd_e3p2jA4BNjxZA7ejHmhSEo5RHE0jAphDghefQb3JRtRGUBAq6QwS7CIsbac2dqxSyhluiqLZ78saU9ql8wCvLBG9WdEKsOywvU9vwx1YRfQnhpNVlvtDe6kbq8t68rKLkGHP6oRxGGHN2A9v1ql2Ef0y_5hQ45odn_gXopKzazEQjJg1-tLyCq-72oq9GXE6a4',
        longDesc: 'Building sustainable infrastructure for schools, including clean water points, computer labs, and renewable energy systems to ensure a conducive learning environment.',
        stats: [
            { label: 'Schools Renovated', value: '85' },
            { label: 'Clean Water Points', value: '42' },
            { label: 'Communities Targeted', value: '1.2M' }
        ],
        milestones: [
            { year: '2021', event: 'First solar-powered library completed in Nakuru.' },
            { year: '2022', event: 'Clean water initiative reached its 30th school milestone.' },
            { year: '2023', event: 'Launched "Digital Classroom" mobile unit for remote areas.' }
        ]
    },
    'orphanage-support': {
        title: 'Humanitarian & Orphanage Support',
        icon: 'volunteer_activism',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI36dZk3o8pFm81RpiydOkx4W5qB-beBt6-KaRy0a6iKfXTLJZVG-Nc_-yXlBnJ-b1PuZqmVZ2J4n_T3hBOamL-IC4NjdtAxB6HfS3ijTKY8o134I-SEXe2kRknzxglVcgfTZzKPkBEbde8fDlhiRpwaM4BOul5_n1FJdlv5qIhP3jiQAC6rG_B51VrO9IBA_-qubCAoqImZ_64HTishR5ZZXQFwCf2sHy6jMWiyC4Nsjcfpo4sawTdvatMoF2Avw4zaVnyyupRd8',
        longDesc: 'Providing essential resources, food security, and emotional support to orphanages. We aim to ensure every child has a safe place to sleep and a path toward a brighter future.',
        stats: [
            { label: 'Children Supported', value: '3,500+' },
            { label: 'Meals Provided', value: '250k+' },
            { label: 'Orphanage Partners', value: '22' }
        ],
        milestones: [
            { year: '2021', event: 'Critical food aid response during regional drought.' },
            { year: '2022', event: 'Started the Mental Health and Counseling pilot program.' },
            { year: '2023', event: 'Secured permanent housing grants for 3 partner orphanages.' }
        ]
    }
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
                        <h1 className="text-4xl font-bold text-navy mb-4">Program Not Found</h1>
                        <Link to="/programs" className="text-primary font-bold hover:underline">Back to Programs</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Header */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                    <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />
                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <FadeIn direction="up">
                            <span className="material-symbols-outlined text-primary text-6xl mb-6">{program.icon}</span>
                            <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">{program.title}</h1>
                            <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">{program.longDesc}</p>
                        </FadeIn>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="py-20 px-6 lg:px-20 -mt-10 relative z-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {program.stats.map((s, i) => (
                                <FadeIn key={i} direction="up" delay={i * 0.1}>
                                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl text-center">
                                        <div className="text-primary text-4xl font-black mb-2">{s.value}</div>
                                        <div className="text-navy text-sm font-bold uppercase tracking-wider">{s.label}</div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-20 px-6 lg:px-20 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <FadeIn direction="right">
                                <h2 className="text-navy text-4xl font-black mb-8">Program Roadmap</h2>
                                <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                                    {program.milestones.map((m, i) => (
                                        <div key={i} className="relative pl-12 group">
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary group-hover:bg-primary transition-colors" />
                                            <div className="text-primary font-black text-xs mb-1 uppercase tracking-widest">{m.year}</div>
                                            <p className="text-navy font-bold leading-relaxed">{m.event}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn direction="left">
                                <div className="bg-background-light p-10 rounded-3xl border border-slate-200">
                                    <h3 className="text-navy text-2xl font-black mb-6">How You Can Help</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">Your support enables us to scale this program and reach more communities. 100% of your donation toward this fund goes directly to the project costs.</p>
                                    <ul className="space-y-4 mb-10">
                                        {['Direct Financial Support', 'Equipment Donation', 'Volunteering Your Expertise'].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-navy font-bold">
                                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/donate" className="flex items-center justify-center h-14 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                        Donate to this Fund
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Navigation Back */}
                <section className="py-20 px-6 bg-background-light text-center border-t border-slate-100">
                    <FadeIn direction="up">
                        <Link to="/programs" className="inline-flex items-center gap-2 text-navy font-bold hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back to All Programs
                        </Link>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProgramDetailPage;
