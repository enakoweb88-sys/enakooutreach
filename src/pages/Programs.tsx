import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsHero from '../components/ProgramsHero';
import ProgramsOverview from '../components/ProgramsOverview';
import TransparencySection from '../components/TransparencySection';

const ProgramsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <ProgramsHero />
                <ProgramsOverview />
                <TransparencySection />
            </main>
            <Footer />
        </div>
    );
};

export default ProgramsPage;
