import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="flex flex-col">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default Contact;
