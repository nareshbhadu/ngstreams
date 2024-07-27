import './App.css';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Ellipse from '../Components/Ellipse';
import Sec2 from '../Components/Sec2';
import Host from '../Components/Host';
import Bussiness from '../Components/Bussiness';
import Banner from '../Components/Banner';
import TrustedBy from '../Components/Trustedby';
import FAQsSection from '../Components/Faq';
import Footer from '../Components/Footer';
import HeroCards from '../Components/HeroCards';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroCards />
      <Ellipse />
      <Sec2 />
      <Host />
      <Bussiness />
      <Banner />
      <TrustedBy />
      <FAQsSection />
      <Footer />
    </>
  );
}

export default App;
