import { Lightbulb, Target, TrendingUp, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const ideas = [
    {
        icon: Lightbulb,
        title: "Digital Equity",
        desc: "Closing the digital divide by equipping remote schools with solar-powered computer labs and satellite internet access.",
        tag: "Prospective Idea",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZUyPMKzz97KSXoff8blkwYi-7OlEWfpoD7t_PzsC61jWkhj2aoRMySVto9QQdrpY6f7EYh6a4cqHsnm-o3zeNtfs3uG6QeFsyeH15m5nhO8m8-JntiIrj_aD55jYw7DAz7WRb9J9GXjUNmpAzlZH9UZn5AuWADN73TVPg2IN3yNxHwM3D4orshsXqwqsklVQb4kGch5pjGy6PlBqOeRViKw-YNjbBYm141n0bGV5EL3cj8pQ8y_Tmkk6hX9h7fnXuv9ttgJeFjV4"
    },
    {
        icon: TrendingUp,
        title: "Micro-Grant Engine",
        desc: "A planned platform to allow direct donor-to-teacher micro-grants for specialized classroom supplies and projects.",
        tag: "Strategic Vision",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
    },
    {
        icon: Target,
        title: "Vocation Hubs",
        desc: "Transforming school facilities into evening vocational hubs for adult literacy and technical skill-building.",
        tag: "Future Roadmap",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA"
    }
];

const IdeasSection = () => {
    return (
        <section className="bg-slate-50 py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <FadeIn direction="right" className="max-w-2xl">
                        <span className="text-slate-500 font-black tracking-[0.4em] uppercase text-[10px] mb-6 block font-display">Innovation Roadmap</span>
                        <h2 className="text-navy text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-4">
                            Strategic <span className="text-primary italic">Ideas</span> <br />
                            for Change.
                        </h2>
                        <div className="h-2 w-32 bg-primary rounded-full" />
                    </FadeIn>
                    <FadeIn direction="left" className="text-right">
                        <Link to="/roadmap" className="inline-flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest group">
                            Full Roadmap <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-3 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {ideas.map((idea, i) => (
                        <FadeIn key={idea.title} delay={i * 0.15} direction="up" fullWidth>
                            <div className="group bg-white rounded-[3rem] shadow-premium overflow-hidden transition-all duration-700 flex flex-col h-full border border-slate-100/50">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={idea.image} alt={idea.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-all duration-700" />
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase tracking-widest">
                                        {idea.tag}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-inner">
                                        <idea.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-navy tracking-tight leading-tight">{idea.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed flex-grow">{idea.desc}</p>
                                    <button className="flex items-center justify-center gap-3 w-full py-5 bg-slate-50 rounded-2xl text-navy font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
                                        <FileText className="w-4 h-4" /> View Concept Note
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IdeasSection;
