import { Quote, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const stories = [
    {
        name: "Sarah Akot",
        role: "Entrepreneur",
        text: "The business training program helped me start my own community garden, providing fresh produce for my village and financial independence for my family.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7xaxrAqkCGSimD-YN1QYbpmdouNi4ZI0SgLMrNd5lnYg76qex7A8K98Kv2j4QCKc9AucXl6Lbal4YZDU3RJGNk8UAz5_BIJ4o9gigHpePjDA7T_97lpV50TQP7o_xoXFxfBcuG3avHFyb_7U7yvGwDJ3xUUrji5V2C6pwlzRv82-ZUpULExh35WFRE9gSJKi7H9OSVPi4z4Solk_qdySXOk_lE5aP2lQ0IwsPh3LaA5AmNFuPB-VO5DV2zSIn3mbGKP82IrzQnI"
    },
    {
        name: "David Obi",
        role: "Scholar",
        text: "Thanks to the technology grant, I was able to complete my computer science degree and launch a local tech hub that now trains fifty youth every month.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMGcVwFYUe-lACRbwLg0aey91CJPqM5sShYGA6Brmd7AF8A3O3pqIqyqsw6PpZL4bMXokYm7yttOMQvGY7329YvjfhuKxkzc5V2TKdpKMg4dNUqJ6NbjVIcbp2Aq3OTaC8R9qshcngnhqImNqTMkIfRCo5AEEsxzi6vE8xfcTba9Ngm9D46GlrEvP5yhE8_eb3MR6oaAambK6lQ2oofxonzNahHWUbNWxz9CvfXwxZ06k4okzg8ExCUuv4PrzqD1wjYCrgLK2Zc"
    }
];

const BeneficiaryStories = () => {
    return (
        <section className="bg-white py-32 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <FadeIn direction="up">
                        <div className="flex items-center justify-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                            Human Stories
                        </div>
                        <h2 className="text-navy text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                            Voices of <span className="text-primary italic">Transformation.</span>
                        </h2>
                        <div className="w-24 h-2 bg-primary mx-auto rounded-full mb-8" />
                        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Every impact we claim is mirrored in the eyes of a person whose life was changed forever.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {stories.map((story, i) => (
                        <FadeIn key={story.name} direction={i === 0 ? "right" : "left"} delay={i * 0.2}>
                            <div className="group relative flex flex-col md:flex-row gap-10 items-start md:items-center">
                                {/* Image with Artistic Mask */}
                                <div className="relative w-full md:w-2/5 aspect-[4/5] rounded-[10rem_4rem_12rem_4rem] overflow-hidden shadow-premium group-hover:-rotate-3 transition-all duration-1000 border border-slate-100/50">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="relative flex-1 py-4">
                                    <Quote className="absolute -top-6 -left-6 w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-colors" />
                                    <div className="space-y-6">
                                        <p className="text-navy text-2xl font-black leading-snug tracking-tight italic">
                                            "{story.text}"
                                        </p>
                                        <div className="pt-6 border-t border-slate-100 space-y-2">
                                            <h4 className="text-navy text-xl font-black uppercase tracking-widest">{story.name}</h4>
                                            <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <FadeIn direction="up">
                        <button className="inline-flex items-center gap-4 px-10 py-5 bg-navy text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-primary transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-navy/20">
                            Read All Stories <ArrowRight className="w-4 h-4" />
                        </button>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default BeneficiaryStories;
