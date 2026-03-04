import FadeIn from './FadeIn';

const BeneficiaryStories = () => {
    const stories = [
        {
            name: "Sarah Akot",
            role: "Entrepreneur",
            text: "The business training program helped me start my own community garden, providing fresh produce for my village.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7xaxrAqkCGSimD-YN1QYbpmdouNi4ZI0SgLMrNd5lnYg76qex7A8K98Kv2j4QCKc9AucXl6Lbal4YZDU3RJGNk8UAz5_BIJ4o9gigHpePjDA7T_97lpV50TQP7o_xoXFxfBcuG3avHFyb_7U7yvGwDJ3xUUrji5V2C6pwlzRv82-ZUpULExh35WFRE9gSJKi7H9OSVPi4z4Solk_qdySXOk_lE5aP2lQ0IwsPh3LaA5AmNFuPB-VO5DV2zSIn3mbGKP82IrzQnI"
        },
        {
            name: "David Obi",
            role: "Scholar",
            text: "Thanks to the technology grant, I was able to complete my computer science degree and launch a local tech hub.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj7xaxrAqkCGSimD-YN1QYbpmdouNi4ZI0SgLMrNd5lnYg76qex7A8K98Kv2j4QCKc9AucXl6Lbal4YZDU3RJGNk8UAz5_BIJ4o9gigHpePjDA7T_97lpV50TQP7o_xoXFxfBcuG3avHFyb_7U7yvGwDJ3xUUrji5V2C6pwlzRv82-ZUpULExh35WFRE9gSJKi7H9OSVPi4z4Solk_qdySXOk_lE5aP2lQ0IwsPh3LaA5AmNFuPB-VO5DV2zSIn3mbGKP82IrzQnI"
        }
    ];

    return (
        <section className="bg-white dark:bg-background-dark py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-navy dark:text-white text-3xl md:text-5xl font-black mb-6">More Lives Transformed</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Every story is a testament to the power of collective action and strategic support.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {stories.map((story, i) => (
                        <FadeIn key={story.name} direction="up" delay={i * 0.1}>
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary transition-all h-full w-full">
                                <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 space-y-4">
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed italic">"{story.text}"</p>
                                    <div>
                                        <h4 className="text-navy dark:text-white font-bold text-xl">{story.name}</h4>
                                        <p className="text-primary font-semibold">{story.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeneficiaryStories;
