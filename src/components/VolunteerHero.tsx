import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const VolunteerHero = () => {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Volunteers working with children in a sunny outdoor setting"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHX-tXUXPEX30EhjIhb8zrV4ZubNtqLgpYEeiFd2fdt5GAkDWeINvFgVGjHz7JzTMUAFnlPQqdn68cypVhDC63DF1CH5LHVXJwlynv72MSyR4BkF0tGlA3N8HWUfycndCw6rBQj9nK-DhKu5wKlPAQwi8xvFVzDibHHLAit93c1B-YfZfj2EmhNI46OuJgIhPX02FWjOdanT61rM_B-mZjzplmcFt9zuunotn38xYdslboc7edl8EZUM29idUeYNjmMjpYHCDn1U"
                />
                <div className="absolute inset-0 bg-navy " />
                <div className="absolute inset-0 bg-navy    " />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center text-white space-y-8">
                <FadeIn direction="up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-primary">
                        <span className="material-symbols-outlined text-sm">volunteer_activism</span>
                        Join Our Mission
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                        Make a <span className="text-primary italic">Difference</span> Today.
                    </h1>
                    <p className="text-slate-200 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto ">
                        Enako Outreach relies on the passion and skills of volunteers like you to empower communities across Africa.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center pt-4">
                        <Link to="/school-registration" className="flex min-w-[200px] items-center justify-center rounded-2xl h-16 px-10 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all">
                            Apply Now
                        </Link>
                        <Link to="/about" className="flex min-w-[200px] items-center justify-center rounded-2xl h-16 px-10 border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all group">
                            Learn More
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default VolunteerHero;
