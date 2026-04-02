const ContactHero = () => {
    return (
        <section className="relative py-24 pt-36 px-6 md:px-12 bg-transparent dark:bg-slate-950 overflow-hidden text-center">
            <div className="absolute inset-0 z-0 ">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[160px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary text-primary text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">alternate_email</span>
                    Connect With Us
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                    Get in <span className="text-primary ">Touch</span>.
                </h1>
                <p className="text-slate-300 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                    Have questions or want to partner with us? We're here to help you make an impact.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
