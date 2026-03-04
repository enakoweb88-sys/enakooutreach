import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const amounts = [10, 25, 50, 100];

const DonatePage = () => {
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState('');
    const [selectedCause, setSelectedCause] = useState('general');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const causes = [
        { id: 'general', icon: 'volunteer_activism', label: 'General Fund', desc: 'Where needed most' },
        { id: 'scholarship', icon: 'school', label: 'Scholarships', desc: 'Student support' },
        { id: 'teacher', icon: 'emoji_events', label: 'Teacher Awards', desc: 'Educator rewards' },
        { id: 'community', icon: 'location_city', label: 'Community Dev', desc: 'Infrastructure' },
        { id: 'orphanage', icon: 'child_care', label: 'Orphanage', desc: 'Child welfare' },
    ];

    const faqs = [
        { q: 'Is my donation tax-deductible?', a: 'Yes, Enako Outreach is a registered non-profit. All donations over XAF 10 are fully tax-deductible. You will receive a receipt by email within 24 hours.' },
        { q: 'How is my donation used?', a: '92% of every donation goes directly to our field programs. 5% covers operational costs and 3% goes to payment processing. We publish annual financial reports for full transparency.' },
        { q: 'Can I make a recurring donation?', a: 'Absolutely. Recurring donations let us plan more effectively for long-term programs. You can set up monthly giving and cancel anytime.' },
        { q: 'Are international donations accepted?', a: 'Yes, we accept donations from anywhere in the world via Stripe, PayPal, or bank transfer in multiple currencies.' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <Navbar />
            <main className="flex-grow">
                {/* HERO */}
                <section className="relative w-full min-h-[60vh] flex flex-col items-start justify-end overflow-hidden pb-16 pt-32">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-navy    z-10" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
                            alt="Children learning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full">
                        <FadeIn direction="up">
                            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                                Give Hope.<br /><span className="text-primary">Create Opportunity.</span>
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.1}>
                            <p className="text-slate-200 text-lg max-w-xl leading-relaxed mb-6">
                                Every dollar you give directly funds scholarships, teacher rewards, and community development programs across Africa.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2}>
                            <div className="flex gap-8">
                                {[{ value: '92%', label: 'Funds to Programs' }, { value: 'XAF 2.4M', label: 'Funding Target' }, { value: '15k+', label: 'Lives Goal' }].map((s) => (
                                    <div key={s.label}>
                                        <p className="text-primary text-2xl font-black">{s.value}</p>
                                        <p className="text-white text-sm">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* CHOOSE A CAUSE */}
                <section className="py-16 px-6 lg:px-20 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn direction="up">
                            <h2 className="text-navy text-3xl font-extrabold mb-2">Choose a Cause</h2>
                            <p className="text-slate-500 mb-8">Select the program you'd like to support</p>
                        </FadeIn>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {causes.map((cause, i) => (
                                <FadeIn key={cause.id} direction="up" delay={i * 0.1}>
                                    <button
                                        onClick={() => setSelectedCause(cause.id)}
                                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all w-full h-full ${selectedCause === cause.id
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-slate-200 text-slate-600 hover:border-primary'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">{cause.icon}</span>
                                        <span className="font-bold text-sm">{cause.label}</span>
                                        <span className="text-xs ">{cause.desc}</span>
                                    </button>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AMOUNT + FORM */}
                <section className="py-16 px-6 lg:px-20 bg-background-light">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn direction="up">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                                <h2 className="text-navy text-2xl font-extrabold mb-8">Select Donation Amount</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                    {amounts.map((a) => (
                                        <button
                                            key={a}
                                            onClick={() => { setSelectedAmount(a); setCustomAmount(''); }}
                                            className={`py-4 rounded-xl font-black text-xl border-2 transition-all ${selectedAmount === a && !customAmount
                                                ? 'border-primary bg-primary text-white shadow-lg shadow-primary/25'
                                                : 'border-slate-200 text-navy hover:border-primary'
                                                }`}
                                        >
                                            XAF {a}
                                        </button>
                                    ))}
                                </div>
                                <div className="mb-8">
                                    <label className="block text-sm font-bold text-navy mb-2">Custom Amount</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy font-bold text-lg">XAF </span>
                                        <input
                                            type="number"
                                            value={customAmount}
                                            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                                            placeholder="Enter amount"
                                            className="w-full h-14 pl-8 pr-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-primary text-navy text-lg font-bold"
                                        />
                                    </div>
                                </div>

                                {/* Transparency bar */}
                                <div className="bg-primary/5 border border-primary rounded-xl p-6 mb-8">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-navy font-bold text-sm">Fund allocation transparency</span>
                                        <span className="text-primary font-black">92% to programs</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-3">
                                        <div className="bg-primary h-3 rounded-full" style={{ width: '92%' }} />
                                    </div>
                                    <p className="text-slate-500 text-xs mt-2">92% Programs · 5% Operations · 3% Payment processing</p>
                                </div>

                                {/* Payment methods */}
                                <div className="mb-8">
                                    <p className="text-sm font-bold text-navy mb-4">Accepted Payment Methods</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['Credit Card', 'PayPal', 'Bank Transfer', 'Apple Pay', 'Google Pay'].map((m) => (
                                            <span key={m} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-navy">{m}</span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full h-14 bg-primary rounded-xl text-white font-black text-lg hover:bg-primary hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/25">
                                    Donate XAF {customAmount || selectedAmount}
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 px-6 lg:px-20 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <FadeIn direction="up">
                            <div className="text-center mb-12">
                                <h2 className="text-navy text-3xl font-extrabold mb-2">Donation FAQ</h2>
                                <p className="text-slate-500">Common questions about giving to Enako Outreach</p>
                            </div>
                        </FadeIn>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <FadeIn key={i} direction="up" delay={i * 0.1}>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-navy">{faq.q}</span>
                                            <span className="material-symbols-outlined text-primary transition-transform" style={{ transform: openFaq === i ? 'rotate(180deg)' : '' }}>
                                                expand_more
                                            </span>
                                        </button>
                                        {openFaq === i && (
                                            <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                                                <p className="pt-4">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 px-6 bg-navy text-center">
                    <FadeIn direction="up">
                        <h2 className="text-white text-4xl font-black mb-4">Every Contribution Counts</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                            Whether you give XAF 5 or XAF 5,000, your contribution directly changes the trajectory of a child's life in Africa.
                        </p>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center justify-center h-14 px-10 bg-primary rounded-lg text-white font-black text-lg hover:bg-primary transition-all">
                            Donate Now
                        </a>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DonatePage;
