import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        <section className="py-32 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-24">
                <FadeIn direction="up">
                    <div className="flex items-center justify-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                        <Star className="w-3 h-3 fill-current" /> Trust & Collaboration
                    </div>
                    <h2 className="text-navy text-4xl md:text-6xl font-black tracking-tight leading-none mb-8">
                        The Wall of <span className="text-primary ">Trust.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                        We collaborate with international institutions, local governments, and global foundations to deliver sustainable change.
                    </p>
                </FadeIn>
            </div>

            {/* Infinite Marquee */}
            <div className="relative flex overflow-hidden group py-10">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0 px-16 py-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-14 w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto text-center mt-12">
                <FadeIn direction="up" delay={0.2}>
                    <Link to="/partnership" className="inline-flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest group">
                        Become a Partner <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default PartnerLogos;
