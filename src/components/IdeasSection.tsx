import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const steps = [
    {
        number: '01',
        title: 'Digital Equity Mission',
        desc: 'We identify remote schools with the greatest digital divide and deploy solar-powered computer labs to close the gap permanently.',
        illustration: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80',
        illFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4',
    },
    {
        number: '02',
        title: 'Micro‑Grant Engine',
        desc: 'A direct-giving platform connects donors with teachers for targeted classroom supplies and project funding — every franc is tracked.',
        illustration: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80',
        illFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8',
    },
    {
        number: '03',
        title: 'Vocation Hubs',
        desc: 'School facilities transform into evening vocational centres providing adult literacy, technical skill-building and community empowerment.',
        illustration: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&auto=format&fit=crop&q=80',
        illFallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA',
    },
];

const ArrowConnector = () => (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 mt-[-60px] px-2">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-slate-300">
            <path
                d="M0 20 Q20 5 40 20 Q60 35 80 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
            />
            <polygon points="74,14 80,20 74,26" fill="currentColor" />
        </svg>
    </div>
);

const IdeasSection = () => {
    return (
        <section className="bg-white py-28 px-6 md:px-16 relative overflow-hidden">
            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0A0F2C18 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <FadeIn direction="up">
                    <div className="text-center mb-20">
                        <span className="text-slate-500 font-black tracking-[0.4em] uppercase text-[10px] block mb-4">
                            Innovation Roadmap
                        </span>
                        <h2 className="text-navy text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                            Strategic <span className="text-primary italic">Ideas</span> for Change.
                        </h2>
                        <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
                            Our work process — discover the strategic pillars shaping a better Cameroon, step by step.
                        </p>
                    </div>
                </FadeIn>

                {/* Steps row */}
                <div className="flex flex-col lg:flex-row items-start justify-center gap-0">
                    {steps.map((step, i) => (
                        <div key={step.number} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                            <FadeIn direction="up" delay={i * 0.15} className="w-full lg:w-72 xl:w-80">
                                <div className="flex flex-col items-center text-center px-4 pb-10 lg:pb-0">
                                    {/* Number bubble */}
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/30 mb-6 relative z-10">
                                        {step.number}
                                    </div>

                                    {/* Illustration circle with light blue background */}
                                    <div className="relative w-44 h-44 mb-6">
                                        <div className="absolute inset-0 bg-blue-50 rounded-full" />
                                        <img
                                            src={step.illustration}
                                            alt={step.title}
                                            className="relative z-10 w-full h-full object-cover rounded-full shadow-md"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = step.illFallback;
                                            }}
                                        />
                                    </div>

                                    <h3 className="text-navy text-xl font-black tracking-tight mb-3">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </FadeIn>

                            {/* Arrow between steps */}
                            {i < steps.length - 1 && <ArrowConnector />}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <FadeIn direction="up" delay={0.4}>
                    <div className="text-center mt-16">
                        <Link
                            to="/programs"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-primary transition-all duration-300 shadow-xl shadow-navy/20 hover:shadow-primary/30 hover:scale-105"
                        >
                            Explore Full Roadmap
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default IdeasSection;
