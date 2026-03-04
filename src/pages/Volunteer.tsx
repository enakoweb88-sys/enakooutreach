import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VolunteerPage = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });
    const roles = [
        { icon: 'school', title: 'Education Support', desc: 'Assist in local schools, provide tutoring, and help build learning resource centers for underprivileged children.' },
        { icon: 'diversity_3', title: 'Community Outreach', desc: 'Work directly with community leaders to implement sustainable development projects and health awareness programs.' },
        { icon: 'construction', title: 'Skill Development', desc: 'Share your professional expertise in technology, business, or trades to empower youth with marketable skills.' },
    ];
    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <Navbar />
            <main className="flex-grow">
                {/* HERO */}
                <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-navy    z-10" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
                            alt="Volunteers working"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full pt-32 pb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase tracking-widest w-fit mb-6">
                            <span className="material-symbols-outlined text-sm">group</span>
                            Volunteer Opportunity
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                            Be Part of <span className="text-primary italic">the Change</span>
                        </h1>
                        <p className="text-slate-200 text-lg max-w-xl leading-relaxed mb-8">
                            Your time and talent can transform lives. Join our global network of dedicated volunteers working across Africa to empower the next generation.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#apply" className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-white font-bold hover:bg-primary transition-all">
                                Start Volunteering
                            </a>
                            <Link to="/impact" className="flex items-center justify-center rounded-lg h-14 px-8 border border-white bg-white border border-white text-white backdrop-blur-sm font-bold hover:bg-white border border-white transition-all">
                                Learn More
                            </Link>
                        </div>
                        {/* Mini volunteer stats */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-400" />
                                ))}
                            </div>
                            <p className="text-white text-sm font-medium">Join 2,400+ volunteers already making an impact</p>
                        </div>
                    </div>
                </section>

                {/* ROLES */}
                <section className="py-16 px-6 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Volunteer Areas</span>
                            <h2 className="text-navy text-3xl font-black">Where You Can Help</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {roles.map((role) => (
                                <div key={role.title} className="bg-background-light rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
                                    <div className="w-12 h-12 bg-white border border-primary rounded-xl flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-2xl">{role.icon}</span>
                                    </div>
                                    <h3 className="text-navy text-xl font-bold mb-3">{role.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* APPLICATION FORM */}
                <section className="py-16 px-6 lg:px-20 bg-background-light" id="apply">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">Join Us</span>
                            <h2 className="text-navy text-3xl font-black mb-2">Volunteer Application</h2>
                            <p className="text-slate-500">Fill out the form below and we'll be in touch within 48 hours.</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary text-navy"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary text-navy"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary text-navy"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Preferred Role *</label>
                                    <select
                                        value={form.role}
                                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                                        className="w-full h-12 px-4 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary text-navy"
                                    >
                                        <option value="">Select a role...</option>
                                        <option>Education Support</option>
                                        <option>Community Outreach</option>
                                        <option>Skill Development</option>
                                        <option>Fundraising</option>
                                        <option>Remote / Digital</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-navy mb-2">Why do you want to volunteer?</label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-primary text-navy resize-none"
                                    placeholder="Tell us about yourself and your motivation..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full h-14 bg-primary rounded-xl text-white font-black text-lg hover:bg-primary hover:-translate-y-0.5 transition-all shadow-xl shadow-primary/25"
                            >
                                Submit Application
                            </button>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 px-6 bg-navy text-center">
                    <h2 className="text-white text-3xl font-black mb-4">Ready to Make a Difference?</h2>
                    <p className="text-slate-300 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
                        Join our growing family of volunteers changing lives across 12 countries in Africa.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#apply" className="inline-flex items-center justify-center h-12 px-8 bg-primary rounded-lg text-white font-bold hover:bg-primary transition-all">
                            Apply Now
                        </a>
                        <Link to="/donate" className="inline-flex items-center justify-center h-12 px-8 border-2 border-white rounded-lg text-white font-bold hover:bg-white border border-white transition-all">
                            Donate Instead
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default VolunteerPage;
