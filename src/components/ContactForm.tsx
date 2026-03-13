const ContactForm = () => {
    return (
        <section className="bg-transparent dark:bg-background-dark py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-navy dark:text-white text-4xl md:text-5xl font-black leading-tight">Send Us a Message</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Fill out the form and our team will get back to you within 24 hours. We look forward to hearing from you.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">description</span>
                                <span className="font-bold">Download Partnership Guide</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-500 hover:text-primary transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">help</span>
                                <span className="font-bold">View Frequently Asked Questions</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Your Name</label>
                            <input
                                type="text"
                                placeholder="FullName"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Email Address</label>
                            <input
                                type="email"
                                placeholder="hello@company.com"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Message</label>
                            <textarea
                                rows={4}
                                placeholder="How can we help?"
                                className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all shadow-sm resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full py-5 bg-primary text-white font-black rounded-xl text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
