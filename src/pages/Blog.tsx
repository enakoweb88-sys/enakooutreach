import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                {/* HERO */}
                <section className="container mx-auto px-6 mb-20 text-center">
                    <FadeIn direction="up">
                        <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px] block mb-6">Enako Insights</span>
                        <h1 className="text-navy text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8 italic">
                            The Cameroon <br />
                            <span className="text-primary not-italic">Perspective.</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Deep dives into the challenges, triumphs, and stories shaping the future of education and communities in Cameroon.
                        </p>
                    </FadeIn>
                </section>

                {/* FILTERS */}
                <section className="container mx-auto px-6 mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-slate-50 border-none font-medium text-navy placeholder:text-slate-300 focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-navy text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* POSTS GRID */}
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPosts.map((post, i) => (
                            <FadeIn key={post.id} direction="up" delay={i * 0.05} fullWidth>
                                <article className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 flex flex-col h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md text-navy text-[10px] font-black uppercase tracking-widest shadow-xl">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                                            <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-primary" /> {post.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-navy leading-tight mb-4 group-hover:text-primary transition-colors italic">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest group/link">
                                            Read Full Article <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-40 bg-white rounded-[4rem] border border-dashed border-slate-200">
                            <p className="text-slate-400 font-black uppercase tracking-widest italic">No articles found matching your criteria.</p>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
