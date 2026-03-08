import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24">
                <ContactHero />
                <ContactInfo />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
