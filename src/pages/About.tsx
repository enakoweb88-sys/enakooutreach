import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import LeadershipTeam from '../components/LeadershipTeam';

const AboutPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <AboutHero />
                <MissionVision />
                <LeadershipTeam />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
