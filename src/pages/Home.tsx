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

const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark">
            <Navbar />
            <main>
                <PremiumHeroCarousel />
                <ProgramsGrid />
                <ImpactDashboard />
                <AutoExplainerVideo />
                <IdeasSection />
                <BeneficiaryStories />
                <StoryHighlight />
                <PartnerLogos />
                <VolunteerCTA />
                <VideoShowcase />
                <LatestBlog />
                <NewsletterCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
