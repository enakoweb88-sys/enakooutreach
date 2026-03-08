import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Heart, ShieldCheck, Globe, ArrowRight, CheckCircle2, Phone, Building2, Smartphone, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Donate = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('5000');
    const [method, setMethod] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [phone, setPhone] = useState('');

    const amounts = ['2000', '5000', '10000', '25000', '50000'];

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleFinalize = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setStep(4);
        }, 3000);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-navy mb-2 italic">Select Amount</h3>
                            <p className="text-slate-500 font-medium">Your support fuels education in Cameroon.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {amounts.map((amt) => (
                                <button
                                    key={amt}
                                    onClick={() => setAmount(amt)}
                                    className={`h-20 rounded-2xl font-black text-xl transition-all ${amount === amt ? 'bg-primary text-white shadow-2xl shadow-primary/40 scale-105' : 'bg-slate-50 text-navy hover:bg-slate-100 border border-slate-100'}`}
                                >
                                    {parseInt(amt).toLocaleString()} <span className="text-[10px] opacity-60">XAF</span>
                                </button>
                            ))}
                            <div className="relative group">
                                <input
                                    type="number"
                                    placeholder="Custom"
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full h-20 px-6 rounded-2xl bg-slate-50 border border-slate-100 font-black text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-300">XAF</span>
                            </div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="w-full h-20 bg-navy text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-navy/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                        >
                            Next Step <ArrowRight className="w-5 h-5 text-primary" />
                        </button>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-navy mb-2 italic">Payment Method</h3>
                            <p className="text-slate-500 font-medium">Support via local mobile money or bank.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { id: 'mtn', name: 'MTN Mobile Money', icon: <Smartphone className="w-6 h-6 text-[#FFCC00]" />, color: 'bg-[#FFCC00]/5 border-[#FFCC00]/20' },
                                { id: 'orange', name: 'Orange Money', icon: <Smartphone className="w-6 h-6 text-[#FF6600]" />, color: 'bg-[#FF6600]/5 border-[#FF6600]/20' },
                                { id: 'bank', name: 'Bank Transfer', icon: <Building2 className="w-6 h-6 text-primary" />, color: 'bg-primary/5 border-primary/20' }
                            ].map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => setMethod(p.id)}
                                    className={`w-full p-6 rounded-2xl border flex items-center gap-6 transition-all ${method === p.id ? 'bg-navy text-white shadow-2xl scale-[1.02]' : `${p.color} hover:bg-slate-50 hover:scale-[1.01]`}`}
                                >
                                    <div className={`p-4 rounded-xl ${method === p.id ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                                        {p.icon}
                                    </div>
                                    <span className="font-black text-lg tracking-tight">{p.name}</span>
                                    {method === p.id && <CheckCircle2 className="ml-auto w-6 h-6 text-primary" />}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleBack} className="flex-1 h-20 rounded-2xl border border-slate-200 text-navy font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Back</button>
                            <button
                                disabled={!method}
                                onClick={handleNext}
                                className="flex-[2] h-20 bg-navy text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-navy/90 hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center gap-3"
                            >
                                Continue <ArrowRight className="w-5 h-5 text-primary" />
                            </button>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-navy mb-2 italic">Confirm Details</h3>
                            <p className="text-slate-500 font-medium">Verify your payment information.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6">
                            <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                                <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Amount</span>
                                <span className="text-navy text-2xl font-black italic">{parseInt(amount).toLocaleString()} XAF</span>
                            </div>

                            {method === 'bank' ? (
                                <div className="space-y-4">
                                    <div className="p-4 bg-white rounded-xl border border-slate-100 space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Bank Details (UBA Cameroon)</p>
                                        <p className="text-navy font-black text-lg">ACC: 10034 00003 456789 22</p>
                                        <p className="text-slate-500 text-xs font-bold uppercase">Enako Outreach Foundation</p>
                                    </div>
                                    <p className="text-xs text-slate-400 italic">Please make the transfer and enter your transaction ref below (optional).</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="6XX XXX XXX"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full h-20 px-12 rounded-2xl bg-white border border-slate-200 font-black text-navy placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        />
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                    </div>
                                    <p className="text-xs text-slate-400 italic">You will receive a prompt on your phone to confirm the transaction.</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleBack} className="flex-1 h-20 rounded-2xl border border-slate-200 text-navy font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Back</button>
                            <button
                                disabled={isProcessing || (method !== 'bank' && phone.length < 9)}
                                onClick={handleFinalize}
                                className="flex-[2] h-20 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-[1.02] disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center gap-3"
                            >
                                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Payment'}
                            </button>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8 py-10"
                    >
                        <div className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-navy mb-4 italic">Thank You!</h3>
                            <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                                Your donation of <span className="text-navy font-black">{parseInt(amount).toLocaleString()} XAF</span> has been received and confirmed.
                            </p>
                        </div>
                        <div className="pt-8">
                            <button
                                onClick={() => setStep(1)}
                                className="h-16 px-10 rounded-xl bg-navy text-white font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all"
                            >
                                Make Another Donation
                            </button>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <Navbar />
            <main className="flex-grow pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    {/* LEFT CONTENT */}
                    <div className="lg:w-1/2 space-y-12">
                        <FadeIn direction="right">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] w-fit">
                                <Heart className="w-3 h-3" /> Support Our Mission
                            </div>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.2}>
                            <h1 className="text-navy text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                                Invest in the <br />
                                <span className="text-primary italic">Future</span> of Cameroon.
                            </h1>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.3}>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                                Your contribution provides textbooks, restores classrooms, and supports teachers in Douala and beyond. 100% of your donation goes directly to the field.
                            </p>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.4}>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { icon: ShieldCheck, title: 'Secure Payment', desc: 'Industry-standard encryption' },
                                    { icon: Globe, title: 'Direct Impact', desc: 'Straight to community projects' }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-soft border border-slate-100 flex items-center justify-center text-navy">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-sm font-black text-navy uppercase tracking-widest italic">{item.title}</h4>
                                        <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* RIGHT DONATION CARD */}
                    <div className="lg:w-1/2 w-full max-w-2xl">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-premium border border-slate-100/50 relative overflow-hidden">
                                {/* Step Indicator */}
                                {step < 4 && (
                                    <div className="flex gap-2 mb-12">
                                        {[1, 2, 3].map((s) => (
                                            <div
                                                key={s}
                                                className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'w-12 bg-primary' : 'w-4 bg-slate-100'}`}
                                            />
                                        ))}
                                    </div>
                                ) || <div className="h-1.5 mb-12" />}

                                <AnimatePresence mode="wait">
                                    {renderStep()}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Donate;
