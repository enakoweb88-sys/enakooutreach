import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const programDetails = [
    {
        id: 'scholarships',
        badge: '2024 Academic Year',
        title: 'Scholarships for Academic Excellence',
        desc: 'Our program identifies and supports the top-5-students from underserved communities, fostering the next generation of African leaders through a rigorous merit-based selection process and comprehensive annual awards.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf36m3k6OIJWgQJnMGVHWXJXz5cQVL1FU4mVwbkZ5l0IJarktCFr78ZR2kFmSnxpLVENEXKCAzIinLHE3H4oJFe6MmOPVzf9Sik8nUO7XFujIqsGExm87DQ6IYXM45-r69fvInAFBKOgXq11jSQyWEiNlqZIPMDGjG3dHfzJG7HiwNHQsD_FdNQRIKQ3jVvAbfG4Nxq-bxOK6GRatjfJbshyF7L44Q1JjqjCiQE5QAIHXRXjhUjQAOa9cE2-vn2LOqAYlDCvPOkE',
        highlights: ['Merit-based Selection', 'Annual Awards', 'Educational Support'],
        stats: ['150+ Schools Partnered', '2.4k Applications Yearly', '98% Graduation Rate', '12 Countries Targeted'],
        imageCaption: '+500 Scholars Supported',
    },
    {
        id: 'teacher-awards',
        badge: 'Recognition Program',
        title: 'Teacher Excellence Awards',
        desc: 'Recognizing and rewarding outstanding educators who demonstrate commitment to student success and pedagogical innovation. We believe great teachers are the foundation of great communities.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMGcVwFYUe-lACRbwLg0aey91CJPqM5sShYGA6Brmd7AF8A3O3pqIqyqsw6PpZL4bMXokYm7yttOMQvGY7329YvjfhuKxkzc5V2TKdpKMg4dNUqJ6NbjVIcbp2Aq3OTaC8R9qshcngnhqImNqTMkIfRCo5AEEsxzi6vE8xfcTba9Ngm9D46GlrEvP5yhE8_eb3MR6oaAambK6lQ2oofxonzNahHWUbNWxz9CvfXwxZ06k4okzg8ExCUuv4PrzqD1wjYCrgLK2Zc',
        highlights: ['Annual Awards Ceremony', 'Financial Grants', 'Professional Development'],
        stats: ['450+ Teachers Rewarded', '12 Countries', '100% Community Voted', 'XAF 500 Average Grant'],
        imageCaption: 'Teachers across Africa',
    },
    {
        id: 'community',
        badge: 'Development Initiative',
        title: 'Community Development',
        desc: 'Investing in sustainable infrastructure and local initiatives to foster long-term growth within rural African communities. From solar power to clean water, we build the foundations for thriving villages.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA',
        highlights: ['Solar Energy Projects', 'Clean Water Systems', 'Infrastructure Building'],
        stats: ['85+ Communities', '120 Projects', '12 Countries', '50k+ Beneficiaries'],
        imageCaption: 'Community projects across Africa',
    },
    {
        id: 'orphanage',
        badge: 'Child Welfare',
        title: 'Orphanage Support',
        desc: 'Ensuring vulnerable children receive the care, nutrition, and educational foundation they need to thrive in a safe environment. Every child deserves a future full of hope and possibility.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8',
        highlights: ['Safe Housing', 'Nutrition Programs', 'Education Access'],
        stats: ['200+ Children Supported', '15 Orphanages', '100% Non-profit', '12 Countries'],
        imageCaption: 'Children in safe care',
    },
];

const ProgramsOverview = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">
                {programDetails.map((prog, idx) => (
                    <div
                        key={prog.id}
                        className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                    >
                        {/* Image */}
                        <div className="lg:w-1/2 relative w-full">
                            <FadeIn direction={idx % 2 === 0 ? "right" : "left"}>
                                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-navy   " />
                                    <div className="absolute bottom-6 left-6 bg-white backdrop-blur-sm rounded-xl px-5 py-3">
                                        <p className="text-navy font-bold text-sm">{prog.imageCaption}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                        {/* Content */}
                        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
                            <FadeIn direction={idx % 2 === 0 ? "left" : "right"}>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase tracking-widest w-fit">
                                    {prog.badge}
                                </span>
                                <h2 className="text-navy text-3xl lg:text-4xl font-extrabold leading-tight mt-4">
                                    {prog.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mt-4">{prog.desc}</p>
                                <div className="space-y-3 mt-4">
                                    <p className="font-bold text-navy text-sm">Program Highlights</p>
                                    {prog.highlights.map((h) => (
                                        <div key={h} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100">
                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                            <span className="text-navy text-sm font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4 mt-2">
                                    {prog.stats.map((s) => (
                                        <div key={s} className="text-center py-3 bg-white rounded-lg border border-slate-100">
                                            <p className="text-primary text-lg font-extrabold">{s.split(' ')[0]}</p>
                                            <p className="text-slate-500 text-xs">{s.split(' ').slice(1).join(' ')}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Link to="/school-registration" className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white font-bold hover:bg-primary transition-all text-sm">
                                        Apply Now <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </Link>
                                    <Link to="/impact" className="flex items-center justify-center rounded-lg h-12 px-8 border border-slate-200 text-navy font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                                        Learn More
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramsOverview;
