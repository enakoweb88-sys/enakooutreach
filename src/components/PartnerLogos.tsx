import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const logos = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPsWI18cMI5N2QR35B5dQPi8fViUlQrdeG2L8hLRp5CLhA64AqxelTGFJc2-cfPrpX5gaXcWaq5FdMqRBDaBlxkPUGfeUR3nTPOzsjt8Kwt6rOEAeMHYNvwcQ1yunajjBX2M--5ZpJbnkMttqDtS1kS2gw5Uur9stVSk_dmhPh6uqoUn9zE_Z_3rlPkAn26E8RABAu111IltVRkw_LIifHtHRSWBUEk5Wg9NdFSw7aY5hiD5xYZJLxGOKjMcPJ3RnZUpp0f8eYk1w', alt: 'Global Education Fund' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFR0QTKvNV4GOw9sX-n_9mIqckE3jMKgSzq08SURTaH69Jp50VgosTp3u5NzSGM2LAHmUvJxjD9oh3-HXPYS2FJyf8PnZg-uJrwFHcGj0F2IFlelkJsmQHOHdr5z69FkIZeLa0B_Jdf1NCHYzJgWZ88hHsjvo1njVNIWxmdFSoepBlKWYnc0z3246U6qDKiYnciWJTU6qjWB8vtjxc-wR4HLEJ0FIxSB2mkHYoc4bssx3EXFa05jY087xbs5V0phA8kPNwb-4Olcw', alt: 'African Development' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqUI7Nsy_NUrIR9ucG4uQxu06L2x_jP-BNwRSTUDZ-ZeTonML2YpUc2eU_mZfgqvDY1keTRrrd_e3p2jA4BNjxZA7ejHmhSEo5RHE0jAphDghefQb3JRtRGUBAq6QwS7CIsbac2dqxSyhluiqLZ78saU9ql8wCvLBG9WdEKsOywvU9vwx1YRfQnhpNVlvtDe6kbq8t68rKLkGHP6oRxGGHN2A9v1ql2Ef0y_5hQ45odn_gXopKzazEQjJg1-tLyCq-72oq9GXE6a4', alt: 'Literacy Worldwide' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAarHAmNpxZTqg6fu3ITcmZPHD019v-17BOWE4s4TkTYBHsam78WDG0JZujrfXzYeAT3nqfDJi-hgRO0pZyWblPvtTPk-hcKoQzQRYsnXEz20PELbUyeI63zl-OaXF9VCqQPUCF7yA20wEC7DhoAG4uC_RHd-WoX3mgktFcRigkECZAxvIxOCB0nu_GK7IKyCMfc_tQE2lvkqpa1-ZFWj-RgQw0YrX0PAdZr8P2tZNRgn7LMNd5IbAhYwo74OfF56DHgYGBFM4jQUY', alt: 'Sustainable Communities' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVpa7ZnS2z9EagngXobl8OOAK3KDA7KCOXqxaBU2qGxZXvsH5nUacCSgDD76os8U6L7WwaU_FO1hNPxOG4OzPwq80oDeUOVR1Dj6HqsAT8VrsgvfWUGItFv6O3Nb96LMmjwD7s3pN_u4smX12GuArXVw91tUt-4ZLL5muPu7Ie9FoMj5pKqfk7NwSjp-cPUgASi7CWeJxau28BXuAoa3Dm3uwpI5ZBDjijMkt1V8V5gTWVWrV3Or0cZp3FFY9xAb7hO0V1JF7PcPU', alt: 'Unity Foundation' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuiyCbI-hAPetHNTnNmwmzBsyz1tFlmY5aINhBofjrNlCnoMLX8E9SV-0h8Jg4arDkCk27bLI9Ikpo8qKRjUBpw5pvRqCUBlpqMNGvUVR6zaJNzKaSQPe8tokGdBaRa_dwy1b1I7E0642s8F3fzT9GA6lN_l46mbMLWkBOntMj5IoFPlhogY0SeChOja7VRzGp2LfzeW4YA75nTCgB9Pjdb9KxyYCgJWeIDx_E4Z2l_diKVBnwu3lCCFfLHu0LaZMYv0flGfQONMo', alt: 'Heritage Trust' },
];

const PartnerLogos = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 text-center mb-16">
                <FadeIn direction="up">
                    <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Working Together for Greater Impact
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        We collaborate with international institutions, local governments, and global foundations to deliver sustainable change across the continent.
                    </p>
                </FadeIn>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0 px-12 py-4">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            </div>

            <div className="max-w-[1200px] mx-auto text-center mt-12">
                <FadeIn direction="up" delay={0.2}>
                    <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-4">
                        <span>View all 24 partners</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </FadeIn>
            </div>
        </section>
    );
};

export default PartnerLogos;
