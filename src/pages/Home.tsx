import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PremiumHeroCarousel from '../components/PremiumHeroCarousel';
import ProgramsGrid from '../components/ProgramsGrid';
import ImpactDashboard from '../components/ImpactDashboard';
import IdeasSection from '../components/IdeasSection';
import VideoShowcase from '../components/VideoShowcase';
import AutoExplainerVideo from '../components/AutoExplainerVideo';
import PartnerLogos from '../components/PartnerLogos';
import VolunteerCTA from '../components/VolunteerCTA';
import BeneficiaryStories from '../components/BeneficiaryStories';
import StoryHighlight from '../components/StoryHighlight';
import LatestBlog from '../components/LatestBlog';
import NewsletterCTA from '../components/NewsletterCTA';
import AnimatedNetworkBg from '../components/AnimatedNetworkBg';

const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark">
            <Navbar />
            {/* Single unified animated background for the whole page */}
            <div className="relative">
                <AnimatedNetworkBg particleCount={60} />
                <main className="relative z-10">
                    <PremiumHeroCarousel />
                    <ProgramsGrid />
                    <ImpactDashboard />
                    <IdeasSection />
                    <BeneficiaryStories />
                    <AutoExplainerVideo />
                    <StoryHighlight />
                    <PartnerLogos />
                    <VideoShowcase />
                    <VolunteerCTA />
                    <LatestBlog />
                    <NewsletterCTA />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
