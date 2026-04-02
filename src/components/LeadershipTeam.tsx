import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const team = [
    {
        name: 'Dr. Amara Enako',
        role: 'Founder & Executive Director',
        bio: 'Amara brings 20 years of expertise in humanitarian logistics and a profound passion for African educational equity.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6yph0bjydBWZl42Qkwuu4hO1fZXptQwn23_CNI9cWWC08ENmafgQVT6P5r9fg5ENmo8VIZ4LTdcIcWn40YOQUO0W7KkJI4s-DwS8DJIWNeGK-rfyuEuENJ6dz0CkLdN5lOy-zbM_6z7a3REi3B-2X0gbe42dNtgkd73MS1Hv-ntpjF84byfP0E0PdC65YeStD4rna_5X-Z8vpzSZgPzJxhJDLjU38fC_9K6Ihbe4Dws48saapQgcDLH9uc2GA_Jt_0a7VmDwiqYg',
    },
    {
        name: 'Kofi Mensah',
        role: 'Director of Programs',
        bio: 'Kofi leads ground operations, ensuring every initiative is culturally aligned and community-driven for maximum impact.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0DbxATWqsy5n-kbIOm4JM4EBe88WVHe7HP6_V_lQ2_qWfQDiA4nrbGLLRfnGzkjlZPE9zT3H0SewDEoZkCq0TICTX35vk4SxsR5CQigrWfzvVojmsIn-VpdQ2oqacqf4i-b4kYsvcCntVKT8I5583A-0oEzteIp5HDMMD9tegdbPqHlMzj3QFHbr5tFezDL2HvkbedEG_MwgjXtbAnm5gX3uIxowaG3pnMJGpZ9c9E3Ewad89yRL-qWA53dAKA3sHzy9nQlYMYa0',
    },
    {
        name: 'Sarah Johnson',
        role: 'Chief Operations Officer',
        bio: 'Sarah specializes in scaling non-profit impact through strategic partnerships and sustainable resource management globally.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk3GabsI_rALwFV2tWE3lVYK9XhoAyPl6r7p9hWANMFqmmHyZdrXtvZiFrq9h_kny-4_YMBiQ-CkRBcoNEyuzC5Wgafb6eQ8X2Sq_UKZAFlZED_6AqTPcyhUzga1aGSGaw189_b3gJs-zSQsqLPiVkHQCRQSDF-O-E4HT1A5TAB0IDGks8iEPStvIJsl7vSJAIgXnPzeCTGOirQ06ZDgAKsFYEnNMOsQJXk9IkWiXFmuIzItIaTFSrcAv1YZUt1WVJeYEJ7b4I7XE',
    },
    {
        name: 'Oluwaseun Adeyemi',
        role: 'Head of Education Initiatives',
        bio: 'A former educator, Oluwaseun leads curriculum innovation and teacher training programs across three distinct regions.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBFQDlDhzB4hrm5uBwVJRsE-U6X92uGSyBR-Wte8bOGDFJRSPHk-MqY1kmymNUXxbMWm8-wDQVvq7uFjnIs0FeGBzHbYBAGC2w5dhODD-NjAojXYmWb2kU9H1CNeVPmz625U6rXdq0d6uIVrMZ1TPYObZfXJLO6jeXZjsNZT9BcZfzwnbd5tzoHMN6ordw6hiBr-ZmpQbEUEscMdAGbB_K84RAeLB0ET2uN4Oy21tmBTgyjRC2rW2M8AkgRoPXKKMZgGSJOlfge70',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Director of Community Outreach',
        bio: 'Elena bridges international donor relations with local grassroots movements to foster organic, community-driven growth.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzIh1wMlMXVnLz3-ijVMt9CW_TWCLzea-bCB6K4tjHkQTT-KYJiddmtJ2PfT0uJx18b1eK89dYf2CLkbfxTPFwLPkU6v9pO45dywQdyGkcm-iScrQISAFbBICXb8JQBOT2y2zD6l6_dVZMZGVWvo2pkXZHjaH0sC90k9X3L5pc0S1Xd9zVSoxsRshXG0u-PFIgYZws6xaAxpiY-VPN3JS5M3xSRUQ5rFIvjYuGHfX4zlwMPWEadAsDdUwMHp6v94uBe86Wesirt28',
    },
    {
        name: 'David Okoro',
        role: 'Financial Oversight Lead',
        bio: 'David ensures absolute fiscal transparency and ethical management for all foundation grants and operational budgets.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6yph0bjydBWZl42Qkwuu4hO1fZXptQwn23_CNI9cWWC08ENmafgQVT6P5r9fg5ENmo8VIZ4LTdcIcWn40YOQUO0W7KkJI4s-DwS8DJIWNeGK-rfyuEuENJ6dz0CkLdN5lOy-zbM_6z7a3REi3B-2X0gbe42dNtgkd73MS1Hv-ntpjF84byfP0E0PdC65YeStD4rna_5X-Z8vpzSZgPzJxhJDLjU38fC_9K6Ihbe4Dws48saapQgcDLH9uc2GA_Jt_0a7VmDwiqYg',
    },
];

const LeadershipTeam = () => {
    return (
        <section className="px-6 lg:px-20 py-16 lg:py-24 max-w-7xl mx-auto">
            {/* Header */}
            <FadeIn direction="up">
                <div className="flex flex-col gap-4 max-w-3xl mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Governance & Vision</span>
                    <h2 className="text-navy text-4xl lg:text-5xl font-black leading-tight tracking-tight">Our Leadership Team</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Meet the dedicated visionaries driving sustainable change and community development across Africa through transparency, innovation, and local empowerment.
                    </p>
                </div>
            </FadeIn>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                    <FadeIn key={member.name} direction="up" delay={idx * 0.1} fullWidth>
                        <div className="group flex flex-col gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-md h-full">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-navy text-xl font-bold">{member.name}</h3>
                                <p className="text-primary font-semibold text-sm uppercase tracking-wide">{member.role}</p>
                                <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-2">{member.bio}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* CTA */}
            <FadeIn direction="up">
                <div className="mt-24 py-20 text-center">
                    <h3 className="text-navy text-3xl md:text-4xl font-black mb-4">Join Our Mission</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                        We are always looking for passionate individuals and corporate partners who share our vision for a brighter future in Africa. Let's build something lasting together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/volunteer" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary text-white font-bold hover:bg-primary transition-all">
                            Get in Touch <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                        <Link to="/volunteer" className="flex items-center justify-center rounded-lg h-12 px-8 border-2 border-slate-200 text-navy font-bold hover:bg-slate-50 transition-all">
                            View Careers
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default LeadershipTeam;
