import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import ProgramsGrid from '../components/ProgramsGrid';
import ImpactDashboard from '../components/ImpactDashboard';
import PartnerLogos from '../components/PartnerLogos';
import VolunteerCTA from '../components/VolunteerCTA';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <HomeHero />
                <ProgramsGrid />
                <ImpactDashboard />
                <PartnerLogos />
                <VolunteerCTA />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
