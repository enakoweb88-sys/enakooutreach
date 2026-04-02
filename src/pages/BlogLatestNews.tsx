import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Rss, Bell } from 'lucide-react';

const latestNews = [
    {
        id: 1,
        date: 'March 28, 2026',
        category: 'Healthcare',
        tag: 'New Initiative',
        title: 'Enako Launches Mobile Health Clinic in Bamenda',
        excerpt: 'Our newest mobile clinic has reached over 500 families in the North West region during its first week of operation, providing free medical screenings and medication.',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
        urgent: true,
    },
    {
        id: 2,
        date: 'March 22, 2026',
        category: 'Education',
        tag: 'Milestone',
        title: '200 Scholarships Awarded for the 2026 Academic Year',
        excerpt: 'Enako Outreach celebrates a landmark milestone as 200 deserving students from across Cameroon receive full tuition funding for the 2025–2026 academic year.',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
        urgent: false,
    },
    {
        id: 3,
        date: 'March 15, 2026',
        category: 'Clean Water',
        tag: 'Project Update',
        title: 'Borehole Drilling Completed in 3 Littoral Villages',
        excerpt: 'Three communities in the Littoral region now have access to clean, safe drinking water following the completion of our latest infrastructure project.',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80',
        urgent: false,
    },
    {
        id: 4,
        date: 'March 8, 2026',
        category: 'Emergency Relief',
        tag: 'Alert',
        title: 'Emergency Food Distribution Reaches 1,200 Families in South West',
        excerpt: 'Following a period of acute food insecurity, Enako delivered emergency food packages to 1,200 displaced families across five communities in the South West region.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
        urgent: true,
    },
    {
        id: 5,
        date: 'February 28, 2026',
        category: 'Women Support',
        tag: 'Programme',
        title: "Single Mothers Programme Records 95% Participant Employment Rate",
        excerpt: "Graduates of our single mothers' skills training programme in Bafoussam report a 95% employment or self-employment rate within six months of completing the programme.",
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
        urgent: false,
    },
    {
        id: 6,
        date: 'February 20, 2026',
        category: 'Education',
        tag: 'Partnership',
        title: 'New Partnership with Ministry of Basic Education Signed',
        excerpt: 'Enako Outreach formalises a strategic partnership with Cameroon\'s Ministry of Basic Education to jointly support school rehabilitation across three regions.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
        urgent: false,
    },
];

const categoryColors: Record<string, string> = {
    Healthcare: 'bg-red-100 text-red-700',
    Education: 'bg-blue-100 text-blue-700',
    'Clean Water': 'bg-cyan-100 text-cyan-700',
    'Emergency Relief': 'bg-orange-100 text-orange-700',
    'Women Support': 'bg-purple-100 text-purple-700',
    Partnership: 'bg-green-100 text-green-700',
};

const BlogLatestNews = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-16 bg-gradient-to-br from-slate-900 to-green-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-2 mb-4">
                            <Rss className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Live Updates</span>
                        </div>
                        <h1 className="text-white font-black text-5xl md:text-6xl mb-4">Latest News</h1>
                        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
                            Stay informed on our most recent activities, programmes, and impact across Cameroon.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Breaking banner */}
            <div className="bg-red-600 text-white py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm font-semibold">
                    <span className="flex items-center gap-1.5 bg-white text-red-600 px-3 py-1 rounded-full text-xs font-black">
                        <Bell className="w-3 h-3" /> URGENT
                    </span>
                    Emergency relief response ongoing in North West Region — <Link to="/donate" className="underline">donate now to help</Link>
                </div>
            </div>

            {/* News Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Featured */}
                    <FadeIn direction="up">
                        <div className="mb-8">
                            <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Top Story</span>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            {latestNews.slice(0, 1).map((post) => (
                                <motion.article
                                    key={post.id}
                                    whileHover={{ y: -4 }}
                                    className="lg:col-span-2 group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="grid md:grid-cols-2">
                                        <div className="relative h-72 md:h-full overflow-hidden">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
                                            {post.urgent && (
                                                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full">URGENT</span>
                                            )}
                                        </div>
                                        <div className="p-10 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black ${categoryColors[post.category] || 'bg-green-100 text-green-700'}`}>
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />{post.date}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-700 transition-colors">{post.title}</h2>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                                            <Link to="/blog/posts" className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:gap-4 transition-all">
                                                Read Full Story <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Remaining posts */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestNews.slice(1).map((post, i) => (
                            <FadeIn key={post.id} direction="up" delay={i * 0.07}>
                                <motion.article
                                    whileHover={{ y: -4 }}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        {post.urgent && (
                                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black rounded-full">URGENT</span>
                                        )}
                                        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black backdrop-blur-sm ${categoryColors[post.category] || 'bg-green-100 text-green-700'}`}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                            <Tag className="w-3 h-3" />{post.tag}
                                            <span className="ml-auto flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                                        </div>
                                        <h3 className="text-slate-900 font-black text-base leading-tight mb-3 group-hover:text-green-700 transition-colors flex-1">{post.title}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                                        <Link to="/blog/posts" className="text-green-600 font-bold text-xs flex items-center gap-1.5 hover:gap-3 transition-all">
                                            Read More <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </motion.article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-green-50 border-t border-green-100">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h3 className="font-black text-slate-900 text-2xl mb-3">Stay Updated</h3>
                    <p className="text-slate-500 text-sm mb-6">Get the latest news from Enako Outreach delivered to your inbox.</p>
                    <div className="flex gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" />
                        <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogLatestNews;
