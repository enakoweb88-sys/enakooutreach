import FadeIn from './FadeIn';

const ImpactTimeline = () => {
    const milestones = [
        {
            year: "Phase 1: Launch",
            title: "Foundation Establishment",
            description: "Establishing our central mission in Africa and identifying our key community hubs for 2024.",
            icon: "foundation",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcb4_DWsHwYKp5Omrx-8zeQoQggGtfHZSNX3wTBJ75NQI95GCqBkQ9fK2C1MPpoe2Su7cZ0mqGvttOfZkfzQsDf-J7NBMb_bsbOXrsWzbFXPAjv-FJVVGCzJBHMhLRXprOslvSn9byXJLSvy3JQTNx2rf_7URK1RZ3FbfI4G8Ht-sk673WQuVGEsHAu7opYtb2Gn5xy18vIDmlxbes_RtCIFiGB70JRjWY8vRb_qK-28i-2NGrygyjbfN2ygsnNBNSr1kMiawllBg"
        },
        {
            year: "Phase 2: Pilot",
            title: "Inaugural Scholarships",
            description: "Targeting the first 50 scholarship recipients with full tuition and resource coverage.",
            icon: "school",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvCd5Ii-UK1txKen80PgfMJgMIuU5IuLt4mICdFZX-TllxKclyVyh2nmxBQdEsdc31j4vHO2dRHg7mE7GOEITyLf021lxPPHMOIcTg0-ExUmVJ1rA-ZhfxmG97SJ1D1rIPiLKylU23ny_trTzZjF6y6dWBToWFucmRRcd5fvteOV8XjeFKRPli1XsQ61ZdBIKvh9uJFjnZWwQup5JIIkksgsIacHszx5H37XMt-Edjh6g5dpQnVhemtwQPRQ20zPVh7IjvEnsJ02I"
        },
        {
            year: "Phase 3: Community",
            title: "Infrastructure Initiative",
            description: "Implementing sustainable solar power and clean water systems in target local villages.",
            icon: "handyman",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTHi4Xw_xuTiFGD5e8afeYjqiN8Wrljxy4ELa4zpboozdVOK_VIW1LtuFtByq8idH_FWoL7tk2PBP_ae8ibl8D91yfGjgN7Y93gla1I9n3vTAzmF9hjN35DWROWgEtdytNcNBcHcUCmg_RAw1FVx6egET4_H8pU81v6FffBX2jDPEasYVycNOfFqt7OleQQvxQfi4OhczOlY6xW9Y-Cmhg4NdC2uuhhVkWGkHA_dWmDjk9a4oj5xpjiv3lYnCk6GIzzcUb6NpFFIo"
        },
        {
            year: "Phase 4: Expansion",
            title: "Cross-Border Scaling",
            description: "Expanding our proven humanitarian models across 12 countries in the region.",
            icon: "public",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs3vL2n2GmIDwl6YqLA6Gxz6Q6bMAvSrXLwif8Fz7RROk8nexrkg3Oa8KVMDPb2TStg9xMsdWezF0_t6X-cHj_eshbVWGAYirtQoy9wtdz4STbIHMT_qBZ8ATZ6EjGBn6F0dAG01nAZhHG8kmvWQbi1hT9b53UZR6sZ6TVI99xExr3edJCE0NEBQU-t2jTqFChNzBa8QKQXZ2IVAgQ7IIKCbgbsMM-d_TaxzPNRc7CvFLTozI1mVyNZxV4C1EtSWtVHstxKdcPo88"
        }
    ];

    return (
        <section className="bg-slate-50 dark:bg-background-dark py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-16 lg:mb-24">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-white border border-primary text-primary rounded-full">Our Story</span>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-navy dark:text-white">Our Journey of Impact</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto">
                            Our strategic roadmap for empowering communities and fostering education across Africa, one phase at a time.
                        </p>
                    </div>
                </FadeIn>

                <div className="relative">
                    {/* Vertical Center Line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

                    <div className="space-y-16 lg:space-y-24">
                        {milestones.map((milestone, index) => (
                            <FadeIn key={milestone.year} direction={index % 2 === 0 ? "right" : "left"} fullWidth delay={index * 0.2}>
                                <div className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16 pl-12 md:pl-0' : 'md:text-left md:pl-16 pl-12 md:pl-0'} mb-4 md:mb-0`}>
                                        <span className="text-primary text-3xl font-black block mb-1">{milestone.year}</span>
                                        <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">{milestone.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{milestone.description}</p>
                                    </div>
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center size-12 rounded-full bg-white dark:bg-background-dark border-4 border-primary z-10 shadow-xl">
                                        <span className="material-symbols-outlined text-primary text-2xl">{milestone.icon}</span>
                                    </div>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} hidden md:block`}>
                                        <div className="w-full h-48 rounded-2xl bg-slate-800 overflow-hidden shadow-lg group">
                                            <img
                                                alt={milestone.title}
                                                className="w-full h-full object-cover  group-hover: group-hover:scale-105 transition-all duration-500"
                                                src={milestone.image}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactTimeline;
