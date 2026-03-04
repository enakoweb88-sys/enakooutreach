import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stories = [
    {
        id: 1,
        category: 'Student Success',
        title: '"From a Village Classroom to a University in Accra"',
        author: 'Abena Osei, Scholarship Recipient',
        country: 'Ghana',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf36m3k6OIJWgQJnMGVHWXJXz5cQVL1FU4mVwbkZ5l0IJarktCFr78ZR2kFmSnxpLVENEXKCAzIinLHE3H4oJFe6MmOPVzf9Sik8nUO7XFujIqsGExm87DQ6IYXM45-r69fvInAFBKOgXq11jSQyWEiNlqZIPMDGjG3dHfzJG7HiwNHQsD_FdNQRIKQ3jVvAbfG4Nxq-bxOK6GRatjfJbshyF7L44Q1JjqjCiQE5QAIHXRXjhUjQAOa9cE2-vn2LOqAYlDCvPOkE',
        excerpt: 'When I was selected as the top student in my district, I never imagined it would open doors I had only dreamed of. The Enako Outreach scholarship didn\'t just pay my fees — it changed my entire family\'s trajectory.',
        featured: true,
    },
    {
        id: 2,
        category: 'Teacher Award',
        title: '"Being Recognized Changed How I Teach"',
        author: 'Mr. Emmanuel Asante, Teacher',
        country: 'Nigeria',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMGcVwFYUe-lACRbwLg0aey91CJPqM5sShYGA6Brmd7AF8A3O3pqIqyqsw6PpZL4bMXokYm7yttOMQvGY7329YvjfhuKxkzc5V2TKdpKMg4dNUqJ6NbjVIcbp2Aq3OTaC8R9qshcngnhqImNqTMkIfRCo5AEEsxzi6vE8xfcTba9Ngm9D46GlrEvP5yhE8_eb3MR6oaAambK6lQ2oofxonzNahHWUbNWxz9CvfXwxZ06k4okzg8ExCUuv4PrzqD1wjYCrgLK2Zc',
        excerpt: 'The award was more than money; it was validation. For the first time in 15 years of teaching, someone said "we see you." My students noticed the change in my energy immediately.',
        featured: false,
    },
    {
        id: 3,
        category: 'Community Impact',
        title: '"Our Village Now Has Clean Water"',
        author: 'Chief Yaw Darko, Community Leader',
        country: 'Kenya',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0D42cGvlYkLGdY3Pyp7nz-KaP3VV6UPlGjinq-S7S6a4Arr-3zmJCevxHP7pswwOm0vZC1anWyer2TwCYBDPL0XAN_PcFTFcW2T0W9IKytjETMkyRGl397af6EKKoQMi0zstLUmREEuurpP46enI208yrXJn4br0_ZmSofXYzty42SaLMIZvnlGbIxHiXN4V3v1MKEweoMIp_wZdUcYITheMR8YeuoaTzs707dR1PH7HAyRLzWn6h8Nx53YONQRjpw5qPnEv0jZA',
        excerpt: 'Before Enako came, our children walked 3 km each morning just to reach water. Now that borehole in our compound has freed our children to attend school instead.',
        featured: false,
    },
];

const StoriesPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <Navbar />
            <main className="flex-grow">
                {/* HERO */}
                <section className="relative w-full min-h-[70vh] flex flex-col overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-navy    z-10" />
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcw8wxpYcYBRL5pXLzflekN0ZSeDZgXPZfP8prs4flNveXRQbXpOwb7I_-2nWDe0cBH3uYJrzYMnjbe1ISIDCgp4VNeM_Lr6i7W3Yet-UvfotldMpB9XlfbSq7Y4ral-63I4O9ZEnQAZg-UJ20y79euxrFznquIVxmYyixWzFSli6fYmnGmNs2BUByUTNMzAobC6Ggrnw1wbiXKhv0QuDrVb6_5kH15OME7yobzgFIkZejAP-QF18TbX2UKHqUxcS8qu7-YYwqRI8"
                            alt="Community narratives"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className="relative z-20 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-20 w-full pb-16 pt-40">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase tracking-widest w-fit mb-6">
                            <span className="material-symbols-outlined text-sm">library_books</span>
                            Community Narratives
                        </div>
                        <h1 className="text-navy text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                            Stories of<br />
                            <span className="text-primary italic">Impact</span> and Hope
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed mb-10">
                            Voices from the field. Real narratives of transformation from students, teachers, and communities across Africa.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#stories" className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white font-bold hover:bg-primary transition-all">
                                Explore Narratives
                            </a>
                            <Link to="/impact" className="flex items-center justify-center rounded-lg h-14 px-8 border-2 border-navy text-navy font-bold hover:bg-white transition-all">
                                Our Impact Report
                            </Link>
                        </div>
                    </div>
                </section>

                {/* STATS BAR */}
                <section className="bg-white border-y border-slate-200 py-8">
                    <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-wrap gap-12 justify-between items-center">
                        <nav className="flex items-center gap-2 text-slate-400 text-sm">
                            <Link to="/" className="hover:text-primary">Home</Link>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span className="text-navy font-semibold">Stories</span>
                        </nav>
                        <div className="flex gap-10">
                            {[{ v: '12k+', l: 'Lives Touched' }, { v: '45', l: 'Communities' }, { v: '89%', l: 'Success Rate' }].map((s) => (
                                <div key={s.l}>
                                    <p className="text-navy text-2xl font-black">{s.v}</p>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURED STORY */}
                <section className="py-16 px-6 lg:px-20 bg-white" id="stories">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-navy text-2xl font-black mb-8">Featured Story</h2>
                        <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 h-72 lg:h-auto">
                                <img src={stories[0].image} alt={stories[0].title} className="w-full h-full object-cover" />
                            </div>
                            <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-navy text-white">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-primary border border-primary text-primary text-xs font-bold uppercase mb-6 w-fit">
                                    {stories[0].category}
                                </span>
                                <h3 className="text-2xl font-black leading-tight mb-4">{stories[0].title}</h3>
                                <p className="text-slate-300 leading-relaxed mb-6">{stories[0].excerpt}</p>
                                <p className="text-primary font-bold text-sm">{stories[0].author} · {stories[0].country}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STORY CARDS */}
                <section className="py-16 px-6 lg:px-20 bg-background-light">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-navy text-2xl font-black mb-8">More Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {stories.slice(1).map((story) => (
                                <div key={story.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                                    <div className="h-56 overflow-hidden">
                                        <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{story.category}</span>
                                        <h3 className="text-navy text-xl font-bold mt-2 mb-3">{story.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{story.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-navy text-sm font-semibold">{story.author}</p>
                                            <span className="text-slate-400 text-xs">{story.country}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEWSLETTER CTA */}
                <section className="py-20 px-6 bg-navy text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-white text-3xl font-black mb-4">Stay Inspired</h2>
                        <p className="text-slate-300 mb-8">Get the latest stories of impact delivered directly to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 h-12 px-4 rounded-lg bg-white border border-white border border-white text-white placeholder:text-slate-400 focus:outline-none focus:border-primary"
                            />
                            <button className="h-12 px-6 bg-primary rounded-lg text-white font-bold hover:bg-primary transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default StoriesPage;
