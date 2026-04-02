const ContactInfo = () => {
    const infoItems = [
        {
            icon: "mail",
            title: "Email Us",
            value: "info@enakooutreach.org",
            description: "For general inquiries and partnerships"
        },
        {
            icon: "phone",
            title: "Call Us",
            value: "+254 700 000 000",
            description: "Mon-Fri from 9am to 6pm"
        },
        {
            icon: "location_on",
            title: "Visit Us",
            value: "Nairobi, Kenya",
            description: "123 Impact Plaza, Community Hub"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {infoItems.map((item) => (
                    <div key={item.title} className="flex flex-col items-center text-center space-y-4 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl group">
                        <div className="size-16 rounded-2xl bg-white border border-primary text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-navy dark:text-white">{item.title}</h3>
                        <p className="text-primary font-bold text-lg">{item.value}</p>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactInfo;
